
## Start da aplicação

```typescript 
npm init -y
```

```typescript 
npm i -D @types/node tsup tsx typescript fastify
```

```typescript 
npm i fastify 
```

- @types/node biblioteca com os tipos do NodeJS

- tsup biblioteca para fazer o transpiler o nosso código com zero configurações

- tsx biblioteca para executar nosso código typescript com zero configuração

- typescript 

- fastify e um web framework rápido e simples - foi desenvolvido inspirado no express e no Hapi

## Script DB

```sql 
CREATE TABLE product (
id UUID PRIMARY KEY,
name VARCHAR(255) NOT NULL,
description TEXT,
image_url VARCHAR(255),
price DOUBLE PRECISION
);

CREATE TABLE category (
id SERIAL PRIMARY KEY,
name VARCHAR(255) NOT NULL,
creation_date TIMESTAMP WITHOUT TIME ZONE
);

CREATE TABLE product_category (
product_id UUID NOT NULL,
category_id SERIAL NOT NULL,
PRIMARY KEY (product_id, category_id),
FOREIGN KEY (product_id) REFERENCES product (id) ON DELETE CASCADE,
FOREIGN KEY (category_id) REFERENCES category (id) ON DELETE CASCADE
);

CREATE TABLE address (
    id SERIAL PRIMARY KEY,
    street VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    state VARCHAR(2) NOT NULL,
    zip_code VARCHAR(10) NOT NULL
);

CREATE TABLE person (
id BIGSERIAL PRIMARY KEY,
cpf VARCHAR(11) not null,
name VARCHAR(100) not null,
birth DATE not null,
email varchar(255) not null
);

alter table address 
add column person_id bigint not null;

alter table address 
add constraint fk_address_person
foreign key (person_id)
references person(id);

CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

alter table person 
add column user_id int unique,
add constraint fk_user_id foreign key (user_id) references "user"(id);
```

