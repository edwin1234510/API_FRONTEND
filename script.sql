use validacion;

create table generos(
genero_id int auto_increment,
genero varchar(100) not null,
primary key(genero_id));

create table ciudades(
ciudad_id int auto_increment,
ciudad_nombre varchar(150) not null,
primary key(ciudad_id));

create table lenguajes(
lenguaje_id int auto_increment primary key,
lenguaje varchar(150));

create table usuarios(
usuario_id int auto_increment primary key,
documento int unique,
nombre varchar(255) not null,
apellido varchar(255) not null,
telefono bigint,
contrasena varchar(255) not null,
id_genero INT,
id_ciudad int,
FOREIGN KEY (id_genero) REFERENCES generos(genero_id)on delete set null,
FOREIGN KEY (id_ciudad) REFERENCES ciudades(ciudad_id)on delete set null);

create table lenguajes_usuarios(
id int auto_increment primary key,
id_usuario int,
id_lenguaje int,
FOREIGN KEY (id_usuario) REFERENCES usuarios(usuario_id) on delete set null,
FOREIGN KEY (id_lenguaje) REFERENCES lenguajes(lenguaje_id)on delete set null);

select * from ciudades;

insert into ciudades (ciudad_nombre) values ("Bucaramanga");
insert into ciudades (ciudad_nombre) values ("Florida");
insert into generos (genero) values ("Masculino");
insert into lenguajes (lenguaje) values ("Java");
insert into lenguajes (lenguaje) values ("Python");
insert into usuarios (documento,nombre,apellido,telefono,contrasena,id_genero,id_ciudad) values (1546857631,"santiago","alfonso",3045425658,"santi11",1,1);
insert into usuarios (documento,nombre,apellido,telefono,contrasena,id_genero,id_ciudad) values (1249785436,"frank","perez",3105425659,"sfdsf",1,1);
insert into lenguajes_usuarios (id_usuario,id_lenguaje) values (1,1);
select * from ciudades ;
select * from usuarios;