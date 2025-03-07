-- Insert categories first since products reference them
INSERT INTO category (name) VALUES
  ('Electronics'),
  ('Books'), 
  ('Clothing'),
  ('Home & Garden');

-- Insert products with category references
INSERT INTO product (name, description, category_id, price) VALUES
  ('Smartphone', 'Latest model smartphone with 5G', 1, 999.99),
  ('Laptop', 'High performance laptop with SSD', 1, 1299.99),
  ('Programming Book', 'Learn to code with Python', 2, 49.99),
  ('T-shirt', 'Cotton casual t-shirt', 3, 19.99),
  ('Garden Tools Set', 'Complete gardening kit', 4, 89.99);

-- Insert customers
INSERT INTO customer (first_name, last_name, user_name, email, password) VALUES
  ('John', 'Doe', 'johndoe', 'john@example.com', 'hashed_password_123'),
  ('Jane', 'Smith', 'janesmith', 'jane@example.com', 'hashed_password_456'),
  ('Bob', 'Wilson', 'bobwilson', 'bob@example.com', 'hashed_password_789');

-- Insert carts
INSERT INTO cart (customer_id) VALUES
  (1),
  (2),
  (3);

-- Insert cart products
INSERT INTO cart_product (cart_id, product_id, quantity) VALUES
  (1, 1, 1),  -- John's cart: 1 smartphone
  (1, 3, 2),  -- John's cart: 2 programming books
  (2, 2, 1),  -- Jane's cart: 1 laptop
  (3, 4, 3),  -- Bob's cart: 3 t-shirts
  (3, 5, 1);  -- Bob's cart: 1 garden tools set