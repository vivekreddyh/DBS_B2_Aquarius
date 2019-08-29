create database BankApp;

use BankApp;

drop table if exists User_login;

create table User_login(
     userId int primary key,
     password varchar(15) not null,
     last_login_time timestamp not null);
	
insert into User_Login values(19080001,'Kmit123$',now());

drop table if exists Registration;

create  table Registration(
      account_no varchar(15) primary key,
	  pan_no varchar(10) not null,
	  firstname varchar(30) not null,
	  middlename varchar(30),
	  lastname varchar(30),
	  phone_no varchar(11) not null,
	  email_id varchar(30) not null,
	  date_of_birth date not null,
	  address varchar(50) not null,
	  zipcode int not null,
	  account_type varchar(10) not null,
	  balance decimal(20,4) not null check(balance > 5000.0),
	  customer_id int not null,
	  ifsc_code varchar(13) not null,
	  account_status varchar(10) not null default "Active");
	  
	  
 insert into registration values( 138910000123456,'ABCDG0000H','saikumar','rao','pragada',7095079215,'xyz@gmail.com','1997-01-01','2-11,serilimgampally,financial district,hyd',508080,'savings',5001.999,19080001,'DBSH000389','Active');
	  
	  
	  
drop table if exists Customer_details;

drop table if exists Customer_login;

drop table if exists Customer_transaction;

drop table if exists Customer_account;

create table Customer_details(cust_id int primary key,cust_firstname varchar(30) NOT NULL,cust_middlename varchar(30),
cust_lastname varchar(30),phno varchar(20) NOT NULL,
email varchar(50) not null,cust_address varchar(50) NOT NULL,cust_pan varchar(10) NOT NULL UNIQUE);

create table Customer_login(
login_id int,
pwd varchar(15) not null,
last_login_time timestamp,
constraint `log_key` foreign key(login_id) references Customer_details(cust_id));


create table Customer_transaction(
tid int AUTO_INCREMENT primary key,
fromacc int not null, 
toacc int not null,
trans_time timestamp not null,
amount decimal(20,2),
trans_type varchar(10) not null,
trans_status varchar(11) not null
);

create table Customer_account(
acc_no int primary key,
acc_type varchar(20) not null,
cust_id int not null,
amount decimal(20,4) not null,
ifsc_code varchar(13) not null,
acc_status varchar(10) not null,
constraint `fk_key` foreign key(cust_id) references Customer_details(cust_id));

**********************Triggers on customer transactions **************

Delimiter // 
drop trigger updateCustomerBalanaceTrigger;
create  TRIGGER updateCustomerBalanaceTrigger
     after insert on customer_transaction_1
	 for each row
BEGIN
	IF NEW.trans_type like 'DEBIT' AND NEW.trans_status like 'SUCCESS' THEN 
		update customer_account set customer_account.amount = customer_account.amount - NEW.amount where acc_no = NEW.fromacc;
		update customer_account set customer_account.amount = customer_account.amount + NEW.amount where acc_no = NEW.toacc;
	END IF;
END; //
Delimiter ; 

grant all on *.* to 'localhost'@'%' identified by 'password';
flush privileges
