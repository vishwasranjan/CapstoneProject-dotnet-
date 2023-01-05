create table ApplyCard(

CustomerId int,
Email varchar(30) primary key,
CardType varchar(10),
foreign key(CustomerId) references UserDetails(CustomerId)
)

create table ApplyAccount(
CustomerId int,
Email varchar(30) primary key,
AccountType varchar(10),
foreign key(CustomerId)  references UserDetails(CustomerId)

)