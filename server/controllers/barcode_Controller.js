const conn = require("../config/connection");
const express = require("express");
const mysql = require("mysql");

/*READ BARCODE */
exports.read = async (req, res) => {
  const query = `SELECT  concat(manufacture.manufactureCode , items.itemCode)as barcode
    ,items.itemName,manufacture.manufactureName,items.category,items.purpose,manufacture.email,
    items.userID,items.dateCreated,manufacture.helpLine,manufacture.postalAddress,manufacture.website 
    from items INNER JOIN manufacture on items.manufactureCode = manufacture.manufactureCode `;
  conn.query(query, (err, result) => {
    if (err)
      return res.status(500).json({
        message: "Something went wron the server, please try again later",
      });
    return res.status(200).json({ result });
  });
};

/*READ BY BARCODE/ID */
exports.oneRecord = async (req, res) => {
  const barcode = req.params.id;
  var itemCode = "";

  /*Get the length barcode*/
  switch (barcode.length) {
    case 8: {
      var manufactureCode = getManufacture8(barcode);
      itemCode = getItem8(barcode);
      break;
    }
    case 13: {
      var manufactureCode = getManufacture(barcode);
      itemCode = getItem(barcode);

      break;
    }
    default: {
      return res.status(404).json({ message: "Invalid barcode" });
    }
  }

  /*END of Get the length barcode*/

  const query = `SELECT  concat(manufacture.manufactureCode , items.itemCode)as barcode
    ,items.itemName,manufacture.manufactureName,items.category,items.purpose,manufacture.email,
    items.userID,items.dateCreated,manufacture.helpLine,manufacture.postalAddress,manufacture.website 
    from items INNER JOIN manufacture on items.manufactureCode = manufacture.manufactureCode 
                 where manufacture.manufactureCode=${manufactureCode} and items.ItemCode=${itemCode}`;

  conn.query(query, (err, result) => {
    if (err)
      return res.status(500).json({
        message:
          "Something went wrong on the server, not connected to the database",
      });

    if (result.length > 0) {
      return res.status(200).json({ result });
    } else {
      return res.status(200).json({ result });
    }
  });
};

/*CREATE NEW BARCODE */
exports.create = async (req, res) => {
  var barcodeLine = req.body.barcode;
  const ManufactureName = req.body.manufacture;
  const itemName = req.body.item;
  const helpLine = req.body.helpLine;
  const postalAddress = req.body.postal;

  const purpose = req.body.purpose;
  const userID = req.body.id;
  const website = req.body.website;
  const category = req.body.category;
  const email = req.body.email;
  var itemCode = "";
  console.log(barcodeLine);
  /*Get the length barcode*/
  switch (barcodeLine.length) {
    case 8: {
      var manufactureCode = getManufacture8(barcodeLine);
      itemCode = getItem8(barcodeLine);
      break;
    }
    case 13: {
      var manufactureCode = getManufacture(barcodeLine);
      itemCode = getItem(barcodeLine);

      break;
    }
    default: {
      return res.status(400).json({ message: "Invalid barcode entered" });
    }
  }
  /*END of Get the length barcode*/

  //Test if the manufacture already exist
  const query = `SELECT * FROM manufacture
                   WHERE manufactureCode= ${manufactureCode}`;
  conn.query(query, (err, result) => {
    if (result.length > 0) {
      //Test if the itemcode exits
      const query = `SELECT * FROM items WHERE itemCode= ${itemCode} `;
      conn.query(query, (err, result) => {
        if (result.length > 0) {
          //Tells that if both manufacture code and items code are true that means the barcode exist
          return res.status(501).json({ message: "The barcode already exist" });
        } else {
          //tells if manufacture exist but item code dont exist then create the new item for that manufacture
          const query = `INSERT INTO items(itemCode,itemName,category,purpose,manufactureCode,userID) values(?)`;
          var values = [
            [itemCode, itemName, category, purpose, manufactureCode, userID],
          ];
          conn.query(query, values, (err, result) => {
            if (err) throw err;
            return res
              .status(200)
              .json({ message: "Barcode inserted successfully" });
          });
        }
      });
    } else {
      //Tells that we have a new manufacture insert the manufacture code
      const query = `INSERT INTO manufacture
                           (manufactureCode,manufactureName,helpLine,postalAddress,website,email) 
                           values(?)`;
      var values = [
        [
          manufactureCode,
          ManufactureName,
          helpLine,
          postalAddress,
          website,
          email,
        ],
      ];
      //Tells that new items will be inserted
      conn.query(query, values, (err, result) => {
        if (err)
          return res.status(500).json({
            message:
              "Something went wrong on the server, please try again later",
          });
        const query = `INSERT INTO items
                               (itemCode,itemName,category,purpose,manufactureCode,userID) 
                               values(?)`;
        var values = [
          [itemCode, itemName, category, purpose, manufactureCode, userID],
        ];
        conn.query(query, values, (err, result) => {
          if (err)
            return res.status(404).json({
              message:
                "Something went wrong on the server, please try again later",
            });
          return res
            .status(200)
            .json({ message: "Barcode inserted successfully" });
        });
      });
    }
  });
};

/*UPDATE BARCODE  */
exports.update = async (req, res) => {
  var barcode = req.params.id;
  const ManufactureName = req.body.manufacture;
  const itemName = req.body.itemName;
  const helpLine = req.body.helpLine;
  const postalAddress = req.body.postal;
  const purpose = req.body.purpose;
  const website = req.body.website;
  const category = req.body.category;
  const email = req.body.email;

  var itemCode = "";

  /*Get the length barcode*/
  switch (barcode.length) {
    case 8: {
      var manufactureCode = getManufacture8(barcode);
      itemCode = getItem8(barcode);
      break;
    }
    case 13: {
      var manufactureCode = getManufacture(barcode);
      itemCode = getItem(barcode);

      break;
    }
    default: {
      return res.status(404).json({ message: "Invalid barcode" });
    }
  }
  /*END of Get the length barcode*/

  const query = `SELECT * FROM items
                 INNER JOIN manufacture
                 On manufacture.manufactureCode=items.manufactureCode 
                 where manufacture.manufactureCode=${manufactureCode} and items.ItemCode=${itemCode}`;

  conn.query(query, (err, result) => {
    if (err)
      return res.status(404).json({
        message: "Something went wrong on the server, please try again later",
      });

    if (result.length > 0) {
      const query = `UPDATE manufacture SET 
                        manufactureName=?,helpLine=?,postalAddress=?,website=?,email=?
                        WHERE manufactureCode=?`;

      conn.query(
        query,
        [
          ManufactureName,
          helpLine,
          postalAddress,
          website,
          email,
          manufactureCode,
        ],
        (err, result) => {
          if (err) throw err;
          const query = `UPDATE items SET
                            itemName=?,category=?,purpose=?
                            WHERE ItemCode=?`;

          conn.query(
            query,
            [itemName, category, purpose, itemCode],
            (err, result) => {
              if (err) throw err;
              return res
                .status(200)
                .json({ message: `${barcode} barcode updated successfully` });
            }
          );
        }
      );
    } else {
      return res.status(500).json({ message: "results not found" });
    }
  });
};

exports.remove = async (req, res) => {
  var barcode = req.params.id;
  var itemCode = "";
  var manufactureCode = "";
  /*Get the length barcode*/
  switch (barcode.length) {
    case 8: {
      manufactureCode = getManufacture8(barcode);
      itemCode = getItem8(barcode);
      break;
    }
    case 13: {
      manufactureCode = getManufacture(barcode);
      itemCode = getItem(barcode);

      break;
    }
    default: {
      return res.status(404).json({ message: "Invalid barcode" });
    }
  }
  /*END of Get the length barcode*/

  const query = `SELECT * FROM items
    INNER JOIN manufacture
    On manufacture.manufactureCode=items.manufactureCode 
    where manufacture.manufactureCode=? and items.ItemCode=?`;

  conn.query(query, [manufactureCode, itemCode], (err, result) => {
    if (err)
      return res.status(500).json({
        message: "Something went wrong on the server, please try again later",
        err,
      });
    if (result.length > 0) {
      const query = `DELETE FROM items
                        WHERE ItemCode=${itemCode}`;
      conn.query(query, (err, result) => {
        if (err) throw err;
        return res.status(200).json({ message: "Item deleted successfully" });
      });
    }
  });
};

function getManufacture(code) {
  return code.substr(0, 7);
}

function getItem(code) {
  return code.substr(7);
}

function getItem8(code) {
  return code.substr(4);
}

function getManufacture8(code) {
  return code.substr(0, 4);
}
