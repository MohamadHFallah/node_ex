create table if not exists product (
    id serial primary key,
    name text not null,
    description text ,
    category_id int not null references category(id),
    price decimal not null,
    created_at timestamptz default now(),
    updated_at timestamptz
);

create table if not exists category (
    id serial primary key,
    name text not null,
    created_at timestamptz default now(),
    updated_at timestamptz
);

create table if not exists customer (
    id serial primary key,
    first_name text not null,
    last_name text not null,
    user_name text unique not null,
    email text,
    password text not null,
    created_at timestamptz default now(),
    updated_at timestamptz
);

create table if not exists cart(
  id serial primary key,
  customer_id int not null references customer(id),
  created_at timestamptz default now(),
  updated_at timestamptz
);


create table if not exists cart_product(
    id serial primary key,
    cart_id int not null references cart(id),
    product_id int not null references product(id),
    quantity int not null
);