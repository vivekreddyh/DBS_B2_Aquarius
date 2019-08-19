create database BankApp;

use BankApp;


create table User_login(
     userId int primary key,
     password varchar(15) not null,
     last_login_time timestamp not null);
	
insert into User_Login values(19080001,'Kmit123$',now());

create  table Registration(
      account_no int primary key,
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
	  ifsc_code varchar(13));
	  
	  
 insert into registration values( 138910000123456,'ABCDG0000H','saikumar','rao','pragada',7095079215,'xyz@gmail.com','1997-01-01','2-11,serilimgampally,financial district,hyd',508080,'savings',5001.999,19080001,'DBSH000389');
	  
	  
	  