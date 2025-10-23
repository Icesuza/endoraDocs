---
id: schema-creation
title: Schema Design Guide
sidebar_position: 3
---

# Schema Design Guide

**Master the art of database schema design with Endora's visual builder.**

Learn how to create efficient, scalable database schemas that power your APIs. This guide covers everything from basic table creation to complex relationship modeling.

## 🎯 What You'll Learn

- ✅ Visual schema design principles
- ✅ Table and column creation
- ✅ Relationship modeling
- ✅ Data validation and constraints
- ✅ Performance optimization
- ✅ Schema best practices

## 📹 Schema Design Overview

<div style={{
  background: '#f8f9fa',
  border: '2px dashed #dee2e6',
  borderRadius: '8px',
  padding: '40px',
  margin: '20px 0',
  textAlign: 'center',
  minHeight: '300px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}}>
  <div style={{fontSize: '48px', marginBottom: '20px'}}>🎥</div>
  <h3 style={{color: '#495057', marginBottom: '15px'}}>Schema Design Fundamentals</h3>
  <p style={{color: '#6c757d', marginBottom: '20px'}}>Replace this entire section with your video demonstration</p>
  <div style={{
    background: '#e9ecef',
    padding: '20px',
    borderRadius: '4px',
    color: '#495057',
    fontSize: '14px'
  }}>
    <strong>Video Placeholder:</strong> Insert your schema design overview video here
  </div>
</div>

**Understand the fundamentals of database schema design and how Endora's visual builder makes it easy.**

## 🏗️ Understanding Database Schemas

### What is a Schema?

A **database schema** is the blueprint of your database. It defines:

- **Tables**: Containers for your data
- **Columns**: Individual data fields
- **Relationships**: How tables connect
- **Constraints**: Rules and validations

### Why Schema Design Matters

:::tip **Foundation of Your API**
Your schema design directly impacts your API's performance, scalability, and usability.

:::

:::tip **Data Integrity**
Proper schema design ensures data consistency and prevents errors.

:::

:::tip **Future-Proofing**
Well-designed schemas are easier to extend and modify as your application grows.

:::

## 📹 Visual Schema Builder

<div style={{
  background: '#f8f9fa',
  border: '2px dashed #dee2e6',
  borderRadius: '8px',
  padding: '40px',
  margin: '20px 0',
  textAlign: 'center',
  minHeight: '300px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}}>
  <div style={{fontSize: '48px', marginBottom: '20px'}}>🎥</div>
  <h3 style={{color: '#495057', marginBottom: '15px'}}>Visual Schema Builder Interface</h3>
  <p style={{color: '#6c757d', marginBottom: '20px'}}>Replace this entire section with your video demonstration</p>
  <div style={{
    background: '#e9ecef',
    padding: '20px',
    borderRadius: '4px',
    color: '#495057',
    fontSize: '14px'
  }}>
    <strong>Video Placeholder:</strong> Insert your schema builder interface demo here
  </div>
</div>

**Explore Endora's intuitive visual schema builder and learn how to navigate the interface.**

## 🚀 Getting Started with Schema Design

### 1. Create a New Schema

1. **Open Schema Builder**: Click "Schema Builder" in your project
2. **Click "New Schema"**: Start with a blank canvas
3. **Name Your Schema**: Choose a descriptive name
4. **Begin Designing**: Start adding tables and relationships

### 2. Schema Planning

Before you start building, consider:

- **What data do you need to store?**
- **How will the data be used?**
- **What relationships exist between data?**
- **What validations are required?**

## 📹 Schema Planning Process

<div style={{
  background: '#f8f9fa',
  border: '2px dashed #dee2e6',
  borderRadius: '8px',
  padding: '40px',
  margin: '20px 0',
  textAlign: 'center',
  minHeight: '300px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}}>
  <div style={{fontSize: '48px', marginBottom: '20px'}}>🎥</div>
  <h3 style={{color: '#495057', marginBottom: '15px'}}>Planning Your Database Schema</h3>
  <p style={{color: '#6c757d', marginBottom: '20px'}}>Replace this entire section with your video demonstration</p>
  <div style={{
    background: '#e9ecef',
    padding: '20px',
    borderRadius: '4px',
    color: '#495057',
    fontSize: '14px'
  }}>
    <strong>Video Placeholder:</strong> Insert your schema planning demo here
  </div>
</div>

**Learn how to plan your database schema before you start building.**

## 🏗️ Building Your Tables

### Adding Tables

1. **Click "Add Table"**: Create a new table
2. **Name Your Table**: Use descriptive, plural names (e.g., "users", "products")
3. **Add Columns**: Define the data structure
4. **Set Constraints**: Add validation rules

### Table Design Best Practices

:::tip **Use Plural Names**
Table names should be plural (users, products, orders)

:::

:::tip **Include Timestamps**
Always add created_at and updated_at columns

:::

:::tip **Add Primary Keys**
Every table needs a unique identifier

:::

## 📹 Table Creation Process

<div style={{
  background: '#f8f9fa',
  border: '2px dashed #dee2e6',
  borderRadius: '8px',
  padding: '40px',
  margin: '20px 0',
  textAlign: 'center',
  minHeight: '300px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}}>
  <div style={{fontSize: '48px', marginBottom: '20px'}}>🎥</div>
  <h3 style={{color: '#495057', marginBottom: '15px'}}>Creating Tables and Columns</h3>
  <p style={{color: '#6c757d', marginBottom: '20px'}}>Replace this entire section with your video demonstration</p>
  <div style={{
    background: '#e9ecef',
    padding: '20px',
    borderRadius: '4px',
    color: '#495057',
    fontSize: '14px'
  }}>
    <strong>Video Placeholder:</strong> Insert your table creation demo here
  </div>
</div>

**Watch how to create tables and define columns with proper data types and constraints.**

### Common Table Patterns

#### User Management

```
users
├── id (Primary Key)
├── email (Unique)
├── name
├── password_hash
├── created_at
└── updated_at
```

#### E-commerce

```
products
├── id (Primary Key)
├── name
├── description
├── price
├── category_id (Foreign Key)
├── created_at
└── updated_at
```

#### Content Management

```
posts
├── id (Primary Key)
├── title
├── content
├── author_id (Foreign Key)
├── published_at
├── created_at
└── updated_at
```

## 🔗 Creating Relationships

### Relationship Types

#### One-to-One

Each record in Table A relates to exactly one record in Table B.

```
users ←→ profiles
```

#### One-to-Many

One record in Table A can relate to many records in Table B.

```
users ←→ posts
categories ←→ products
```

#### Many-to-Many

Records in both tables can relate to multiple records in the other.

```
users ←→ roles (through user_roles)
posts ←→ tags (through post_tags)
```

## 📹 Relationship Modeling

<div style={{
  background: '#f8f9fa',
  border: '2px dashed #dee2e6',
  borderRadius: '8px',
  padding: '40px',
  margin: '20px 0',
  textAlign: 'center',
  minHeight: '300px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}}>
  <div style={{fontSize: '48px', marginBottom: '20px'}}>🎥</div>
  <h3 style={{color: '#495057', marginBottom: '15px'}}>Creating Database Relationships</h3>
  <p style={{color: '#6c757d', marginBottom: '20px'}}>Replace this entire section with your video demonstration</p>
  <div style={{
    background: '#e9ecef',
    padding: '20px',
    borderRadius: '4px',
    color: '#495057',
    fontSize: '14px'
  }}>
    <strong>Video Placeholder:</strong> Insert your relationship modeling demo here
  </div>
</div>

**Learn how to create and manage relationships between tables in your schema.**

### Setting Up Relationships

1. **Identify Connections**: Determine how tables should relate
2. **Add Foreign Keys**: Create references between tables
3. **Set Cascade Rules**: Define update and delete behavior
4. **Test Relationships**: Verify connections work correctly

### Relationship Best Practices

:::tip **Use Descriptive Foreign Keys**
Foreign key names should clearly indicate the relationship (user_id, product_id)

:::

:::tip **Consider Cascade Rules**
Decide how updates and deletes should propagate through relationships

:::

:::tip **Add Indexes**
Index foreign key columns for better query performance

:::

## 📊 Data Types and Constraints

### Supported Data Types

| Type       | Description        | Example                                |
| ---------- | ------------------ | -------------------------------------- |
| `string`   | Text data          | "Hello World"                          |
| `integer`  | Whole numbers      | 42                                     |
| `float`    | Decimal numbers    | 3.14                                   |
| `boolean`  | True/false values  | true                                   |
| `date`     | Date values        | "2024-01-01"                           |
| `datetime` | Date and time      | "2024-01-01T12:00:00Z"                 |
| `json`     | JSON objects       | `{"key": "value"}`                     |
| `uuid`     | Unique identifiers | "550e8400-e29b-41d4-a716-446655440000" |

### Common Constraints

- **Primary Key**: Unique identifier for each record
- **Foreign Key**: Reference to another table
- **Unique**: No duplicate values allowed
- **Not Null**: Field is required
- **Default Value**: Automatic value assignment
- **Check**: Custom validation rules

## 📹 Data Validation

<div style={{
  background: '#f8f9fa',
  border: '2px dashed #dee2e6',
  borderRadius: '8px',
  padding: '40px',
  margin: '20px 0',
  textAlign: 'center',
  minHeight: '300px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}}>
  <div style={{fontSize: '48px', marginBottom: '20px'}}>🎥</div>
  <h3 style={{color: '#495057', marginBottom: '15px'}}>Setting Up Data Validation</h3>
  <p style={{color: '#6c757d', marginBottom: '20px'}}>Replace this entire section with your video demonstration</p>
  <div style={{
    background: '#e9ecef',
    padding: '20px',
    borderRadius: '4px',
    color: '#495057',
    fontSize: '14px'
  }}>
    <strong>Video Placeholder:</strong> Insert your data validation demo here
  </div>
</div>

**Learn how to add constraints and validation rules to ensure data integrity.**

## 🚀 Advanced Schema Features

### Indexes for Performance

Add indexes to frequently queried columns:

- **Primary Keys**: Automatically indexed
- **Foreign Keys**: Should be indexed
- **Search Fields**: Index columns used in WHERE clauses
- **Sort Fields**: Index columns used in ORDER BY

### Schema Optimization

:::tip **Normalize Your Data**
Eliminate redundancy by organizing data into related tables

:::

:::tip **Denormalize for Performance**
Sometimes it's better to duplicate data for faster queries

:::

:::tip **Plan for Growth**
Design schemas that can handle increasing data volumes

:::

## 📹 Schema Optimization

<div style={{
  background: '#f8f9fa',
  border: '2px dashed #dee2e6',
  borderRadius: '8px',
  padding: '40px',
  margin: '20px 0',
  textAlign: 'center',
  minHeight: '300px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}}>
  <div style={{fontSize: '48px', marginBottom: '20px'}}>🎥</div>
  <h3 style={{color: '#495057', marginBottom: '15px'}}>Optimizing Your Schema</h3>
  <p style={{color: '#6c757d', marginBottom: '20px'}}>Replace this entire section with your video demonstration</p>
  <div style={{
    background: '#e9ecef',
    padding: '20px',
    borderRadius: '4px',
    color: '#495057',
    fontSize: '14px'
  }}>
    <strong>Video Placeholder:</strong> Insert your schema optimization demo here
  </div>
</div>

**Learn advanced techniques for optimizing your database schema for performance and scalability.**

## 🧪 Testing Your Schema

### Schema Validation

Before generating your API, validate your schema:

1. **Check Relationships**: Ensure all foreign keys are valid
2. **Verify Constraints**: Confirm all validation rules are correct
3. **Test Data Types**: Ensure appropriate data types are used
4. **Review Performance**: Check for missing indexes

### Common Schema Issues

- **Missing Primary Keys**: Every table needs a unique identifier
- **Orphaned Records**: Foreign keys without valid references
- **Data Type Mismatches**: Inconsistent data types across relationships
- **Missing Indexes**: Poor query performance

## 📹 Schema Testing

<div style={{
  background: '#f8f9fa',
  border: '2px dashed #dee2e6',
  borderRadius: '8px',
  padding: '40px',
  margin: '20px 0',
  textAlign: 'center',
  minHeight: '300px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}}>
  <div style={{fontSize: '48px', marginBottom: '20px'}}>🎥</div>
  <h3 style={{color: '#495057', marginBottom: '15px'}}>Testing Your Schema</h3>
  <p style={{color: '#6c757d', marginBottom: '20px'}}>Replace this entire section with your video demonstration</p>
  <div style={{
    background: '#e9ecef',
    padding: '20px',
    borderRadius: '4px',
    color: '#495057',
    fontSize: '14px'
  }}>
    <strong>Video Placeholder:</strong> Insert your schema testing demo here
  </div>
</div>

**Learn how to validate and test your schema before generating your API.**

## 🎯 Schema Design Patterns

### User Management System

```
users
├── id (Primary Key)
├── email (Unique)
├── name
├── password_hash
├── created_at
└── updated_at

profiles
├── id (Primary Key)
├── user_id (Foreign Key → users.id)
├── bio
├── avatar_url
├── created_at
└── updated_at

roles
├── id (Primary Key)
├── name (Unique)
├── permissions
├── created_at
└── updated_at

user_roles
├── user_id (Foreign Key → users.id)
├── role_id (Foreign Key → roles.id)
└── assigned_at
```

### E-commerce System

```
products
├── id (Primary Key)
├── name
├── description
├── price
├── category_id (Foreign Key → categories.id)
├── created_at
└── updated_at

categories
├── id (Primary Key)
├── name
├── parent_id (Foreign Key → categories.id)
├── created_at
└── updated_at

orders
├── id (Primary Key)
├── user_id (Foreign Key → users.id)
├── total_amount
├── status
├── created_at
└── updated_at

order_items
├── id (Primary Key)
├── order_id (Foreign Key → orders.id)
├── product_id (Foreign Key → products.id)
├── quantity
├── price
└── created_at
```

## 🚀 Best Practices Summary

### Design Principles

1. **Start Simple**: Begin with essential tables and add complexity gradually
2. **Use Descriptive Names**: Choose clear, meaningful names for tables and columns
3. **Plan Relationships**: Think about data connections before building
4. **Add Validation**: Include appropriate constraints and validation rules
5. **Consider Performance**: Add indexes for frequently queried columns

### Common Mistakes to Avoid

- ❌ **Over-normalization**: Too many small tables can hurt performance
- ❌ **Under-normalization**: Duplicate data leads to inconsistency
- ❌ **Poor Naming**: Unclear names make schemas hard to understand
- ❌ **Missing Constraints**: Lack of validation leads to data quality issues
- ❌ **No Indexes**: Poor query performance on large datasets

## 🎯 Next Steps

### Ready to Generate Your API?

1. **Review Your Schema**: Double-check all relationships and constraints
2. **Save Your Schema**: Click "Save Schema" to store your design
3. **Generate API**: Move on to [API Generation →](./api-generation.md)
4. **Test Endpoints**: Use the built-in testing interface

### Learn More

- [API Generation Guide →](./api-generation.md)
- [API Reference →](./api-reference.md)
- [Authentication Setup →](./authentication.md)

---

**Ready to turn your schema into an API?** [Generate your API →](./api-generation.md) 🚀
