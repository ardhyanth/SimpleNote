-- Prepare table
create table User(ID integer, userName varchar(100), Parent integer);
insert into User(ID, UserName, Parent) values(1, "Ali", 2);
insert into User(ID, UserName, Parent) values(2, "Budi", 0);
insert into User(ID, UserName, Parent) values(3, "Cecep", 1);

-- Query self join
select u1.ID, u1.userName, u2.userName
from User as u1
left join User as u2
on u2.ID = u1.Parent
order by u1.ID asc;
