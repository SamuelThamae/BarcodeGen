CREATE TABLE items(
    itemCode varchar(6) primary key not null,
    itemName varchar(50) not null,
    category varchar(100) not null,
    purpose varchar(200) not null,
    manufactureCode varchar(6) not null,
    userID int not null,
    status enum('Pending','Approved') default('Pending'),
    foreign key(userID) references user(userID),
    foreign key(category) references category(name),
    foreign key(manufactureCode) references manufacture(manufactureCode)
)




INSERT INTO items
(
    itemCode,itemName,category,purpose,manufactureCode,userID,status
)
values(
    '375658','Knorr Aromat','Regular Items','Naturally Tasty Seasoning','001087','1','available'
),
(
    '9882','Black and While Invisible','Regular Items','Deoderant','4229','2','available'
)