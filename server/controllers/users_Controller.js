const express = require('express')
const nodemailer = require('nodemailer')
const conn = require('../config/connection')
const mysql = require('mysql')
const bcrypt = require('bcrypt')
const jwtToken = require('jsonwebtoken')

/*=============Login and Registration===========*/

const register = async (req, res) => {

    password = req.body.password
    hashPas = await bcrypt.hash(password, 10)

    fname = req.body.name,
        surname = req.body.surname,
        cellphone = req.body.cellphone,
        email = req.body.email

    var values = [
        [fname, surname, email, cellphone, hashPas, 'Pending', 'user']
    ]

    const existUser = `SELECT * FROM user WHERE email=?`
    conn.query(existUser, email, (err, result) => {
        if (!err) {
            if (result.length > 0) {
                return res.status(501).json({ message: "Email already exist" })
            } else {
                const query = "INSERT INTO user(name,surname,email,cellphone,password,status,role) values?"
                conn.query(query, [values], (err, result) => {
                    if (!err) {
                        return res.status(201).json({ message: "user added successfully" })
                    }
                    else {
                        return res.status(400).json({ message: "failed to register the user" })
                    }
                })
            }
        }
        else {

            return res.status(500).json({ message: err })
        }
    })



}

const login = async (req, res) => {
    password = req.body.password
    const email = req.body.email
    hashedPassword = await bcrypt.hash(password, 10)

    const query = `SELECT name,surname,role,cellphone,email,status,password,userID From user WHERE email=?`
    conn.query(query, [email], (err, data) => {
        if (err) return res.status(500).json({ message: "server is down please try later" });
        if (data.length > 0) {
            if (data[0].status == 'Active') {
                bcrypt.compare(hashedPassword, data[0].password, (err, result) => {
                    if (err) return res.status(403).json({ message: "Invalid login credentials" });
                    const values = {
                        "role": data[0].role,
                        "fullName": data[0].name + " " + data[0].surname,
                        "email": data[0].email,
                        "status": data[0].status,
                        "id":data[0].userID
                    }
                    const token = jwtToken.sign(values, process.env.PrivateKey, { expiresIn: "10h" });

                    res.status(200).json({ token:token,message:"Successfully login " })
                })
            }
            else {
                if (data[0].status == 'Pending')
                    return res.status(403).json({ message: 'Wait for approval' });
                return res.status(403).json({ message: 'You no longer have access, contact the admin' })
            }



        }
        else {
            return res.status(500).json({ message: "server error " })
        }
    })

}




/*===============Users Methods================*/
//All users below
const read = async (req, res) => {

    try {
        const Users = 'SELECT userID,name,surname,cellphone,email,role,status FROM user'
        conn.query(Users, (error, result) => {
            if (error) return res.status(401).json({ message: error });
            return res.status(200).json({ data: result })
        })

    } catch (err) {

        return res.status(500).json({ message: 'something went wrong in the server' })
    }

}

// user by :id
const oneRecord = async (req, res) => {
    const id = req.params.id

    try {
        const query = `SELECT * FROM user WHERE userID=?`
        conn.query(query, [id], (err, result) => {
            if (!err) {
                if (result.length > 0) {
                    return res.status(200).json({ data: result })
                }
                else {
                    return res.status(404).json({ message: "Record not found,please try again later" })
                }
            }
        })
    } catch (error) {

        return res.status(500).json({ message: "Something went wrong in the server, try again later" });

    }

}
//edit profile
const edit = async (req, res) => {

    const id = req.params.id
    const name = req.body.name
    const cellphone = req.body.cellphone
    const surname=req.body.surname

    try {
        const sqlUpdate = "UPDATE user SET name=?, surname=? ,cellphone=? WHERE userID=?";
        
        conn.query(sqlUpdate, [name, surname, cellphone,id]  ,(err,result) => {
            if (!err) {
                return res.status(201).json({ message: " updated successfully" })
            } else {

                return res.status(404).json({ message: "No user found with that id" })
            }

        })
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong in the serve, please try agin later" })
    }

}

//Update user
const update = async (req, res) => {

    const id = req.params.id
    const role = req.body.role
    const status = req.body.status
   
    try {
        const sqlUpdate = "UPDATE user SET status=? ,role=? WHERE userID=?";
        
        conn.query(sqlUpdate, [status, role, id],(err,result) => {
            if (!err) {
                return res.status(201).json({ message: "User updated successfully" })
            } else {

                return res.status(404).json({ message: "No user found with that id" })
            }

        })
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong in the serve, please try agin later" })
    }

}

//delete user
const remove = async (req, res) => {
    const email = req.params.email;

    try {
        const query = 'DELETE FROM user WHERE email = ?';

        conn.query(query, [email], (err, result) => {
            if (err) {
                return res.status(404).json({ message: "Record not found with that id" });
            }
            return res.status(200).json({ message: "User deleted successfully" });
        });
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong in the server, please try again later" })
    }


}










const checkToken = async (req, res) => {
    return res.status(200).json({ message: "true" })
}


/*==============Activites==================*/






/*GET user activities */
const activites = async (req, res) => {
    
    const id = req.params.id
    try {

        const query = `SELECT * FROM items
                INNER JOIN manufacture
                ON items.manufactureCode = manufacture.manufactureCode
                AND userID=?`
        conn.query(query, [id], (err, result) => {
            if (!err)
           {
                if(result.data == ""){
                    return res.status(404).json({ message: "No activities found from that user" });
                }else{
                      return res.status(200).json({ data: result })
                }

            }else{
                return res.status(501).json({ message: "Our Server currently experiencing technical problems, please try again later" });
            }
           
        })
    } catch (error) {
        return res.status(500).json({ message: "something went wrong in the server, please try again later" })
    }

}


/*===========reset password=========*/

const transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
        user: process.env.Email,
        pass: process.env.Password
    }
})

const resetPassword = async (req, res) => {
    const email = req.body.email
    const query = `SELECT email,password From user Where email=?`
    conn.query(query, [email], (err, data) => {
        if (err) return res.status(500).json(err);

        if (data.length <= 0) {
            return res.status(401).json({ message: 'Result not found' })
        }
        else {

            const generatedPass= generatePassword()
            const hashedPaa= hashedPassword(generatedPass)

           var mailOptions = {
                from: process.env.Email,
                to: data[0].email,
                subject: 'Password by Barcode app',
                html: `<p><b>Reset password on email:</b> ${data[0].email} <br><b> and password ${generatedPass} </b><br><a href="http://localhost:4200/account/login">Click here </a>`

            }
            transporter.sendMail(mailOptions, (err, result) => {
                if (err) console.log(err);
                return res.status(200).json({ message: 'Password was sent successfully to your mail' })

            })
        }
    })


}

function generatePassword(){
    return Math.random().toString(36).slice(-8)
}

function hashedPassword(data){
    const saltRounds = 10;
    return  bcrypt.hash(data, saltRounds);
}


module.exports = {
    read: read,
    register: register,
    edit:edit,
    update: update,
    login: login,
    delete: remove,
    checkToken: checkToken,
    oneRecord: oneRecord,
    activities: activites,
    forgotpassword: resetPassword,
 
}
