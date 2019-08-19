
use BankApp;
drop table if exists CustomerDetails;

drop table if exists Login;

drop table if exists Transaction;

drop table if exists Account;

create table CustomerDetails(custid int NOT NULL primary key,custname varchar(30) NOT NULL,phno int NOT NULL,
email varchar(50),custaddress varchar(50) NOT NULL,custpan varchar(10) NOT NULL UNIQUE);

create table Cust_Login(loginid int,
pwd varchar(15) not null,
lastlogin timestamp,
constraint `log_key` foreign key(loginid) references CustomerDetails(custid));


create table Transaction(tid int not null AUTO_INCREMENT,fromacc int, toacc int,time timestamp,amount decimal(10,2),primary key(tid));

create table Account(accnum int primary key,acctype varchar(20),custid int,constraint `fk_key` foreign key(custid) references CustomerDetails(custid) ); 
