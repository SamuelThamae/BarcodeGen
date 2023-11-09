CREATE TABLE contactus(
    id int AUTO_INCREMENT primary key,
   email varchar(200) not null ,
   name varchar(200) not null,
   subject varchar(200) not null,
   message text not null,
   status enum('Not read','replied') default('Not read'),
   dateCreated TIMESTAMP Not null
)