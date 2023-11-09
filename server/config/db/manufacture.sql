
CREATE TABLE manufacture(
   manufactureCode VARCHAR(6) primary key not null,
   manufactureName varchar(100) not null,
   helpLine varchar(15) not null,
   postalAddress text not null,
   website varchar(50) not null,
   email varchar(50) not null,
   country varchar(100) not null
   
)
INSERT INTO manufacture 
(manufactureCode, manufactureName, helpLine, postalAddress, website, email,country)
 VALUES ('001087', 'Unilever', '0860331441', '15 Nollsworth Crescent, La Lucia 4051', 'www.uniliver.co.za', 'Affairs-za@uniliver.co.za','South Africa'),
     ('4229', 'Beiersdorf', '0860102091', '21 Lighthouse Road, Umhlanga Rocks, 4319 ', 'www.nivea.co.za', 'Use form in the website','Germany');