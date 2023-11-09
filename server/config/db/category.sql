CREATE TABLE category(
    id int AUTO_INCREMENT,
    name varchar(30) not null unique,
    primary key(id)

)

INSERT INTO category(name) 
values('Cosmatics'),
    ('Chamicals'),
    ('Food'),
    ('Alcohol'),
    ('Brevelage'),
    ('Medicine'),
    ('Babies')

