# Shopping Cart API

A simple REST API for managing an e-commerce shopping cart system.

## Database Schema

The application uses PostgreSQL with the following tables:
- Products: Store items with name, description, price and category
- Categories: Product classifications
- Customers: User accounts with authentication details
- Carts: Shopping carts associated with customers
- Cart Products: Items in customer carts with quantities

## API Endpoints

### Customers
- GET `/customers` - List all customers
- GET `/customer/:id` - Get customer details by ID

### Products
- GET `/products` - List all available products

## Getting Started

1. Install dependencies:
please use nodejs v20
```
npm i
````
2- run command
```
npm run dev
```