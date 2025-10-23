---
id: getting-started
title: Quick Start Guide
sidebar_position: 2
---

# Quick Start Guide

**Build your first API in under 5 minutes with Endora's visual interface.**

This guide will walk you through creating a complete User Management API from scratch, including authentication, validation, and testing.

## 🎯 What You'll Build

By the end of this guide, you'll have:

- ✅ A complete database schema for user management
- ✅ A fully functional REST API with authentication
- ✅ Interactive API documentation
- ✅ Tested endpoints ready for production

## 📹 Complete Walkthrough

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
  <h3 style={{color: '#495057', marginBottom: '15px'}}>Full Tutorial: Building Your First API</h3>
  <p style={{color: '#6c757d', marginBottom: '20px'}}>Replace this entire section with your complete tutorial video</p>
  <div style={{
    background: '#e9ecef',
    padding: '20px',
    borderRadius: '4px',
    color: '#495057',
    fontSize: '14px'
  }}>
    <strong>Video Placeholder:</strong> Insert your complete tutorial video here
  </div>
</div>

**Watch the entire process from account creation to API deployment in this comprehensive walkthrough.**

## 🚀 Step 1: Create Your Account

### Sign Up for Free

1. **Visit Endora Platform**: Go to [endora.space](https://endora.space)
2. **Click "Get Started"**: Start your free account
3. **Enter Your Details**: Email, password, and basic information
4. **Verify Email**: Check your inbox and click the verification link

:::tip **Free Forever Plan**
Start with our free plan that includes 100 requests/hour and 1 project. No credit card required.

:::

## 📹 Account Setup

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
  <h3 style={{color: '#495057', marginBottom: '15px'}}>Account Creation & Setup</h3>
  <p style={{color: '#6c757d', marginBottom: '20px'}}>Replace this entire section with your account setup demonstration</p>
  <div style={{
    background: '#e9ecef',
    padding: '20px',
    borderRadius: '4px',
    color: '#495057',
    fontSize: '14px'
  }}>
    <strong>Video Placeholder:</strong> Insert your account creation demo here
  </div>
</div>

**Learn how to create your account and navigate the Endora dashboard.**

## 🚀 Step 2: Create Your First Project

### Project Setup

1. **Click "New Project"**: From your dashboard
2. **Enter Project Name**: "User Management API"
3. **Choose Database**: PostgreSQL (recommended)
4. **Click "Create Project"**: Your project is ready!

### Project Dashboard

Your project dashboard includes:

- **Schema Builder**: Visual database design tool
- **API Generator**: One-click API generation
- **Testing Interface**: Built-in API testing
- **Analytics**: Usage and performance metrics

## 📹 Project Creation

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
  <h3 style={{color: '#495057', marginBottom: '15px'}}>Creating Your First Project</h3>
  <p style={{color: '#6c757d', marginBottom: '20px'}}>Replace this entire section with your project creation demonstration</p>
  <div style={{
    background: '#e9ecef',
    padding: '20px',
    borderRadius: '4px',
    color: '#495057',
    fontSize: '14px'
  }}>
    <strong>Video Placeholder:</strong> Insert your project creation demo here
  </div>
</div>

**See how easy it is to set up a new project and navigate the dashboard.**

## 🚀 Step 3: Design Your Database Schema

### Visual Schema Builder

Our drag-and-drop interface makes database design intuitive:

1. **Add Tables**: Click "Add Table" to create new tables
2. **Define Columns**: Set column names, types, and constraints
3. **Create Relationships**: Connect tables with foreign keys
4. **Validate Schema**: Check for errors and optimize design

### User Management Schema

For this tutorial, we'll create a simple user management system:

```
users table:
- id (Primary Key)
- email (Unique, Required)
- name (Required)
- password_hash (Required)
- created_at (Timestamp)
- updated_at (Timestamp)
- is_active (Boolean, Default: true)
```

## 📹 Schema Design Process

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
  <h3 style={{color: '#495057', marginBottom: '15px'}}>Designing Your Database Schema</h3>
  <p style={{color: '#6c757d', marginBottom: '20px'}}>Replace this entire section with your schema design demonstration</p>
  <div style={{
    background: '#e9ecef',
    padding: '20px',
    borderRadius: '4px',
    color: '#495057',
    fontSize: '14px'
  }}>
    <strong>Video Placeholder:</strong> Insert your schema design demo here
  </div>
</div>

**Learn how to use the visual schema builder to create your database structure.**

### Schema Design Best Practices

:::tip **Start Simple**
Begin with essential tables and add complexity gradually.

:::

:::tip **Use Descriptive Names**
Choose clear, descriptive names for tables and columns.

:::

:::tip **Plan Relationships**
Think about how your data connects before creating relationships.

:::

## 🚀 Step 4: Generate Your API

### One-Click API Generation

1. **Review Your Schema**: Ensure everything looks correct
2. **Click "Generate API"**: Endora creates all endpoints automatically
3. **Review Generated Endpoints**: Check the created CRUD operations
4. **Configure Security**: Set up authentication and permissions

### Generated Endpoints

Your API will include:

```http
POST   /users          # Create new user
GET    /users          # List all users
GET    /users/{id}     # Get specific user
PUT    /users/{id}     # Update user
PATCH  /users/{id}     # Partial update
DELETE /users/{id}     # Delete user
```

## 📹 API Generation

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
  <h3 style={{color: '#495057', marginBottom: '15px'}}>Generating Your API</h3>
  <p style={{color: '#6c757d', marginBottom: '20px'}}>Replace this entire section with your API generation demonstration</p>
  <div style={{
    background: '#e9ecef',
    padding: '20px',
    borderRadius: '4px',
    color: '#495057',
    fontSize: '14px'
  }}>
    <strong>Video Placeholder:</strong> Insert your API generation demo here
  </div>
</div>

**Watch how Endora automatically generates complete REST APIs from your schema.**

## 🚀 Step 5: Test Your API

### Built-in Testing Interface

1. **Open Swagger UI**: Click "Test API" in your project
2. **Authenticate**: Enter your API key
3. **Test Endpoints**: Try creating, reading, updating, and deleting users
4. **View Responses**: See real-time API responses

### Testing Examples

#### Create a User

```json
POST /users
{
  "email": "john@example.com",
  "name": "John Doe",
  "password": "securepassword123"
}
```

#### Get All Users

```http
GET /users?page=1&limit=10
```

## 📹 API Testing

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
  <h3 style={{color: '#495057', marginBottom: '15px'}}>Testing Your Generated API</h3>
  <p style={{color: '#6c757d', marginBottom: '20px'}}>Replace this entire section with your API testing demonstration</p>
  <div style={{
    background: '#e9ecef',
    padding: '20px',
    borderRadius: '4px',
    color: '#495057',
    fontSize: '14px'
  }}>
    <strong>Video Placeholder:</strong> Insert your API testing demo here
  </div>
</div>

**Learn how to test your API endpoints using the built-in Swagger interface.**

## 🚀 Step 6: Deploy and Use

### Your API is Ready!

Your API is now:

- ✅ **Live and accessible** via HTTPS
- ✅ **Secured** with API key authentication
- ✅ **Documented** with interactive Swagger UI
- ✅ **Monitored** with real-time analytics

### Integration Examples

#### JavaScript/Node.js

```javascript
const response = await fetch("https://api.endora.space/v1/your-project/users", {
  headers: {
    Authorization: "Bearer YOUR_API_KEY",
    "Content-Type": "application/json",
  },
});
const users = await response.json();
```

#### Python

```python
import requests

response = requests.get(
    'https://api.endora.space/v1/your-project/users',
    headers={'Authorization': 'Bearer YOUR_API_KEY'}
)
users = response.json()
```

## 📹 Deployment & Integration

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
  <h3 style={{color: '#495057', marginBottom: '15px'}}>Deploying and Integrating Your API</h3>
  <p style={{color: '#6c757d', marginBottom: '20px'}}>Replace this entire section with your deployment demonstration</p>
  <div style={{
    background: '#e9ecef',
    padding: '20px',
    borderRadius: '4px',
    color: '#495057',
    fontSize: '14px'
  }}>
    <strong>Video Placeholder:</strong> Insert your deployment demo here
  </div>
</div>

**See how to deploy your API and integrate it with your applications.**

## 🎉 Congratulations!

You've successfully:

- ✅ Created your Endora account
- ✅ Designed a database schema
- ✅ Generated a complete REST API
- ✅ Tested your endpoints
- ✅ Deployed to production

## 🚀 Next Steps

### Learn More

- [Schema Design Guide →](./schema-creation.md)
- [API Reference →](./api-reference.md)
- [Authentication Setup →](./authentication.md)

### Advanced Features

- [Custom Endpoints →](./api-reference.md#custom-endpoints)
- [Advanced Security →](./authentication.md#advanced-security)
- [Performance Optimization →](./api-reference.md#performance)

### Get Help

- [FAQ →](./faq.md)
- [Community Support →](https://discord.gg/endora)
- [Contact Support →](mailto:support@endora.space)

---

**Ready to build something amazing?** [Start your next project →](https://endora.space) 🚀
