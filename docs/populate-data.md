---
id: populate-data
title: Populate Data
---

# 📊 Populate Your Database

Transform your empty database into a fully functional system with real data. Endora provides multiple ways to populate your tables with sample data, making it easy to test and demonstrate your API.

## 🎯 What You'll Learn

- ✅ Multiple data insertion methods
- ✅ Bulk data import capabilities
- ✅ AI-powered data generation
- ✅ Data validation and formatting
- ✅ Sample data best practices

## 📹 Data Population Overview

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
  <h3 style={{color: '#495057', marginBottom: '15px'}}>Data Population Overview</h3>
  <p style={{color: '#6c757d', marginBottom: '20px'}}>Replace this entire section with your data population overview video</p>
  <div style={{
    background: '#e9ecef',
    padding: '20px',
    borderRadius: '4px',
    color: '#495057',
    fontSize: '14px'
  }}>
    <strong>Video Placeholder:</strong> Insert your data population overview video here
  </div>
</div>

**Learn how to populate your database with sample data using Endora's data management tools.**

## 🚀 Data Insertion Methods

### Method 1: Manual Data Entry

The simplest way to add data is through the visual interface:

1. **Navigate to Data Source**: Go to your project's data source tab
2. **Select Table**: Choose the table you want to populate
3. **Add Records**: Click "Add Record" and fill in the fields
4. **Save Data**: Click save to insert the record

### Method 2: File Import

For larger datasets, use file import:

1. **Prepare Your File**: Create CSV or Excel file with your data
2. **Upload File**: Use the import feature in the data source tab
3. **Map Columns**: Match your file columns to database fields
4. **Import Data**: Review and confirm the import

### Method 3: AI Data Generation

Let AI generate realistic sample data:

1. **Access AI Generator**: Go to the AI data generation tool
2. **Configure Settings**: Set the number of records and data types
3. **Generate Data**: Let AI create realistic sample data
4. **Review & Insert**: Review generated data and insert into your tables

## 📹 Manual Data Entry

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
  <h3 style={{color: '#495057', marginBottom: '15px'}}>Manual Data Entry</h3>
  <p style={{color: '#6c757d', marginBottom: '20px'}}>Replace this entire section with your manual data entry demonstration</p>
  <div style={{
    background: '#e9ecef',
    padding: '20px',
    borderRadius: '4px',
    color: '#495057',
    fontSize: '14px'
  }}>
    <strong>Video Placeholder:</strong> Insert your manual data entry demo here
  </div>
</div>

**Learn how to manually add records to your database tables using the visual interface.**

## 📹 File Import Process

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
  <h3 style={{color: '#495057', marginBottom: '15px'}}>File Import Process</h3>
  <p style={{color: '#6c757d', marginBottom: '20px'}}>Replace this entire section with your file import demonstration</p>
  <div style={{
    background: '#e9ecef',
    padding: '20px',
    borderRadius: '4px',
    color: '#495057',
    fontSize: '14px'
  }}>
    <strong>Video Placeholder:</strong> Insert your file import demo here
  </div>
</div>

**See how to import large datasets from CSV and Excel files into your database.**

## 📹 AI Data Generation

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
  <h3 style={{color: '#495057', marginBottom: '15px'}}>AI Data Generation</h3>
  <p style={{color: '#6c757d', marginBottom: '20px'}}>Replace this entire section with your AI data generation demonstration</p>
  <div style={{
    background: '#e9ecef',
    padding: '20px',
    borderRadius: '4px',
    color: '#495057',
    fontSize: '14px'
  }}>
    <strong>Video Placeholder:</strong> Insert your AI data generation demo here
  </div>
</div>

**Discover how to use AI to generate realistic sample data that follows your schema constraints.**

## 🔧 Data Validation

### Automatic Validation

Endora automatically validates your data:

- **Data Types**: Ensures data matches column types
- **Required Fields**: Checks for mandatory fields
- **Unique Constraints**: Prevents duplicate values
- **Foreign Keys**: Validates relationship integrity

### Common Validation Rules

```sql
-- Example validation rules
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    age INTEGER CHECK (age >= 18),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 📊 Sample Data Best Practices

### Realistic Data Generation

When generating sample data:

1. **Use Realistic Names**: Generate proper names and addresses
2. **Valid Email Formats**: Ensure email addresses are valid
3. **Proper Date Ranges**: Use logical date sequences
4. **Consistent Relationships**: Maintain referential integrity

### Data Volume Guidelines

- **Development**: 10-100 records per table
- **Testing**: 100-1000 records per table
- **Demo**: 50-500 records per table
- **Production**: Use real data or anonymized datasets

## 🚀 Advanced Data Management

### Bulk Operations

Perform bulk data operations:

```sql
-- Bulk insert example
INSERT INTO users (name, email, age) VALUES
    ('John Doe', 'john@example.com', 30),
    ('Jane Smith', 'jane@example.com', 25),
    ('Bob Johnson', 'bob@example.com', 35);
```

### Data Relationships

Maintain proper relationships:

```sql
-- Insert related data
INSERT INTO posts (user_id, title, content) VALUES
    (1, 'My First Post', 'This is my first blog post'),
    (2, 'Hello World', 'Welcome to my blog');
```

## 📹 Data Management Best Practices

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
  <h3 style={{color: '#495057', marginBottom: '15px'}}>Data Management Best Practices</h3>
  <p style={{color: '#6c757d', marginBottom: '20px'}}>Replace this entire section with your data management demonstration</p>
  <div style={{
    background: '#e9ecef',
    padding: '20px',
    borderRadius: '4px',
    color: '#495057',
    fontSize: '14px'
  }}>
    <strong>Video Placeholder:</strong> Insert your data management demo here
  </div>
</div>

**Learn best practices for managing and organizing your database data effectively.**

## 🎯 Next Steps

After populating your database:

1. **Test Your API**: Use the generated endpoints to test your data
2. **Verify Relationships**: Ensure foreign key relationships work correctly
3. **Check Performance**: Monitor query performance with your data
4. **Update Documentation**: Keep your API documentation current

## 🚀 Ready to Generate Your API?

With your database populated, you're ready to:

- **Generate API Endpoints**: Create REST APIs for your data
- **Test Functionality**: Use the built-in testing interface
- **Deploy Your API**: Make it available for production use

Your database is now ready for API generation and testing!