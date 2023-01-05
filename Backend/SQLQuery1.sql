create table User_login(
Id int primary key,
CustomerId int,
UserName varchar(20),
pswd varchar(20),
foreign key(CustomerId) references UserDetails(CustomerId)
);