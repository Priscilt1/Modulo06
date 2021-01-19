CREATE TABLE "products" (
  "id" int PRIMARY KEY,
  "category_id" int UNIQUE,
  "user_id" int UNIQUE,
  "name" text,
  "description" text,
  "old_price" int,
  "price" int,
  "quantity" int,
  "status" int,
  "created_at" timestamp DEFAULT (now()),
  "updated_at" timestamp DEFAULT (now())
);

CREATE TABLE "categories" (
  "id" int PRIMARY KEY,
  "name" text
);

CREATE TABLE "files" (
  "id" int PRIMARY KEY,
  "name" text,
  "path" text,
  "product_id" int UNIQUE
);


ALTER TABLE "products" ADD FOREIGN KEY ("category_id") REFERENCES "categories" ("id");

ALTER TABLE "files" ADD FOREIGN KEY ("product_id") REFERENCES "products" ("id");
