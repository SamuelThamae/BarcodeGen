CREATE TABLE user(
    userID int primary key AUTO_INCREMENT,
    name varchar(50) not null,
    surname varchar(50) not null,
    email varchar(50) not null unique,
    cellphone varchar(12) not null,
    role enum('admin','moderator','user') default('user'),
    status enum('Pending','Active','Blocked') default('Pending'),
    password varchar(255) not null
) 

INSERT INTO user(
    name,surname,email,password,role,status
)values('Samuel','Jackson','jackson@code.com','admin','Active','123456'),
('Paul','Richards','prichards@gmail.com','basic','active','123456'),
('Lizzy','Scott','scott@code.com','123456','moderator','active');