DROP SCHEMA public CASCADE;
CREATE SCHEMA public;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO public;

create table object_types(
    object_type_id serial primary key,
    parent_id integer,
    name varchar(255),
    foreign key (parent_id) references object_types (object_type_id) on delete cascade
);

create table attribute_types(
    attr_type_id serial primary key,
    name varchar(255)
);

create table attributes(
    attr_id serial primary key,
    attr_type_id integer,
    name varchar(255),
    foreign key (attr_type_id) references attribute_types (attr_type_id) on delete cascade
);

create table object_type_attributes (
    object_type_id integer,
    attr_id integer,
	primary key (object_type_id, attr_id),
    foreign key (object_type_id) references object_types (object_type_id) on delete cascade,
    foreign key (attr_id) references attributes (attr_id) on delete cascade
);

create table objects (
    object_id serial primary key,
    parent_id integer,
    object_type_id integer,
    name varchar(255),
    foreign key (parent_id) references objects (object_id) on delete cascade,
    foreign key (object_type_id) references object_types (object_type_id) on delete cascade
);

create table values (
    object_id integer,
    attr_id integer,
    primary key (object_id, attr_id),
    value varchar(255),
    foreign key (object_id) references objects (object_id) on delete cascade,
    foreign key (attr_id) references attributes (attr_id) on delete cascade
);