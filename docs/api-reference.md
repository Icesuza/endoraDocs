---
id: api-reference
title: API Reference
sidebar_position: 3
---

# 📚 API Reference

Complete reference documentation for all Endora API endpoints, including request/response formats, authentication, and examples.

## 🎯 What You'll Find Here

- ✅ Complete endpoint documentation
- ✅ Request/response examples
- ✅ Authentication methods
- ✅ Error handling
- ✅ Rate limiting information
- ✅ Interactive testing interface

## 📹 API Reference Overview

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
  <h3 style={{color: '#495057', marginBottom: '15px'}}>API Reference Overview</h3>
  <p style={{color: '#6c757d', marginBottom: '20px'}}>Replace this entire section with your API reference overview video</p>
  <div style={{
    background: '#e9ecef',
    padding: '20px',
    borderRadius: '4px',
    color: '#495057',
    fontSize: '14px'
  }}>
    <strong>Video Placeholder:</strong> Insert your API reference overview video here
  </div>
</div>

**Learn how to navigate and use the comprehensive API reference documentation.**

## 🔐 Authentication

### API Key Authentication

All API requests require authentication using your API key:

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
     https://api.endora.space/v1/your-project/endpoint
```

### Getting Your API Key

1. **Login to Dashboard**: Access your Endora dashboard
2. **Navigate to API Keys**: Go to the API Keys section
3. **Generate New Key**: Click "Generate API Key"
4. **Copy Key**: Save your API key securely

## 📹 Authentication Setup

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
  <h3 style={{color: '#495057', marginBottom: '15px'}}>Authentication Setup</h3>
  <p style={{color: '#6c757d', marginBottom: '20px'}}>Replace this entire section with your authentication setup demonstration</p>
  <div style={{
    background: '#e9ecef',
    padding: '20px',
    borderRadius: '4px',
    color: '#495057',
    fontSize: '14px'
  }}>
    <strong>Video Placeholder:</strong> Insert your authentication setup demo here
  </div>
</div>

**Learn how to set up authentication for your API requests.**

## 🚀 Base URL

All API endpoints use the following base URL:

```
https://api.endora.space/v1/{project-id}
```

Replace `{project-id}` with your actual project identifier.

## 📊 CRUD Operations

### GET - Retrieve Data

```bash
# Get all records
GET /{table-name}

# Get single record
GET /{table-name}/{id}

# Get with filters
GET /{table-name}?filter=value&limit=10&offset=0
```

### POST - Create Data

```bash
# Create new record
POST /{table-name}
Content-Type: application/json

{
  "field1": "value1",
  "field2": "value2"
}
```

### PUT - Update Data

```bash
# Update record
PUT /{table-name}/{id}
Content-Type: application/json

{
  "field1": "new_value1",
  "field2": "new_value2"
}
```

### DELETE - Remove Data

```bash
# Delete record
DELETE /{table-name}/{id}
```

## 📹 CRUD Operations Demo

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
  <h3 style={{color: '#495057', marginBottom: '15px'}}>CRUD Operations Demo</h3>
  <p style={{color: '#6c757d', marginBottom: '20px'}}>Replace this entire section with your CRUD operations demonstration</p>
  <div style={{
    background: '#e9ecef',
    padding: '20px',
    borderRadius: '4px',
    color: '#495057',
    fontSize: '14px'
  }}>
    <strong>Video Placeholder:</strong> Insert your CRUD operations demo here
  </div>
</div>

**See how to perform Create, Read, Update, and Delete operations with your API.**

## 🔍 Query Parameters

### Filtering

```bash
# Filter by field value
GET /users?name=John

# Filter by multiple fields
GET /users?name=John&age=30

# Filter with operators
GET /users?age__gte=18&age__lte=65
```

### Pagination

```bash
# Limit results
GET /users?limit=10

# Offset results
GET /users?offset=20

# Combined pagination
GET /users?limit=10&offset=20
```

### Sorting

```bash
# Sort ascending
GET /users?sort=name

# Sort descending
GET /users?sort=-name

# Multiple sort fields
GET /users?sort=name,age
```

## 📹 Query Parameters Demo

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
  <h3 style={{color: '#495057', marginBottom: '15px'}}>Query Parameters Demo</h3>
  <p style={{color: '#6c757d', marginBottom: '20px'}}>Replace this entire section with your query parameters demonstration</p>
  <div style={{
    background: '#e9ecef',
    padding: '20px',
    borderRadius: '4px',
    color: '#495057',
    fontSize: '14px'
  }}>
    <strong>Video Placeholder:</strong> Insert your query parameters demo here
  </div>
</div>

**Learn how to use query parameters for filtering, pagination, and sorting.**

## 📝 Response Formats

### Success Response

```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "created_at": "2024-01-01T00:00:00Z"
  },
  "message": "Record retrieved successfully"
}
```

### Error Response

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input data",
    "details": {
      "email": "Invalid email format"
    }
  }
}
```

## 📹 Response Formats Demo

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
  <h3 style={{color: '#495057', marginBottom: '15px'}}>Response Formats Demo</h3>
  <p style={{color: '#6c757d', marginBottom: '20px'}}>Replace this entire section with your response formats demonstration</p>
  <div style={{
    background: '#e9ecef',
    padding: '20px',
    borderRadius: '4px',
    color: '#495057',
    fontSize: '14px'
  }}>
    <strong>Video Placeholder:</strong> Insert your response formats demo here
  </div>
</div>

**Understand the different response formats and how to handle them in your applications.**

## 🚨 Error Handling

### Common Error Codes

| Code | Description | Solution |
|------|-------------|----------|
| `400` | Bad Request | Check request format and parameters |
| `401` | Unauthorized | Verify API key and authentication |
| `403` | Forbidden | Check permissions and access rights |
| `404` | Not Found | Verify endpoint URL and resource ID |
| `429` | Rate Limited | Wait before making more requests |
| `500` | Server Error | Contact support if persistent |

### Error Handling Best Practices

```javascript
// Example error handling
try {
  const response = await fetch('/api/users/1');
  if (!response.ok) {
    const error = await response.json();
    console.error('API Error:', error.message);
    // Handle specific error cases
    if (error.code === 'VALIDATION_ERROR') {
      // Handle validation errors
    }
  }
} catch (error) {
  console.error('Network Error:', error);
}
```

## 📹 Error Handling Demo

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
  <h3 style={{color: '#495057', marginBottom: '15px'}}>Error Handling Demo</h3>
  <p style={{color: '#6c757d', marginBottom: '20px'}}>Replace this entire section with your error handling demonstration</p>
  <div style={{
    background: '#e9ecef',
    padding: '20px',
    borderRadius: '4px',
    color: '#495057',
    fontSize: '14px'
  }}>
    <strong>Video Placeholder:</strong> Insert your error handling demo here
  </div>
</div>

**Learn how to handle errors and implement proper error handling in your applications.**

## 🔄 Rate Limiting

### Rate Limits

- **Free Tier**: 100 requests per minute
- **Pro Tier**: 1000 requests per minute
- **Enterprise**: Custom limits

### Rate Limit Headers

```http
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1640995200
```

### Handling Rate Limits

```javascript
// Check rate limit headers
const rateLimitRemaining = response.headers.get('X-RateLimit-Remaining');
if (rateLimitRemaining < 10) {
  // Implement backoff strategy
  await new Promise(resolve => setTimeout(resolve, 1000));
}
```

## 📹 Rate Limiting Demo

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
  <h3 style={{color: '#495057', marginBottom: '15px'}}>Rate Limiting Demo</h3>
  <p style={{color: '#6c757d', marginBottom: '20px'}}>Replace this entire section with your rate limiting demonstration</p>
  <div style={{
    background: '#e9ecef',
    padding: '20px',
    borderRadius: '4px',
    color: '#495057',
    fontSize: '14px'
  }}>
    <strong>Video Placeholder:</strong> Insert your rate limiting demo here
  </div>
</div>

**Understand rate limiting and how to implement proper rate limit handling.**

## 🧪 Interactive Testing

### Swagger UI

Access the interactive API documentation:

1. **Navigate to API Docs**: Go to your project's API documentation
2. **Authenticate**: Enter your API key
3. **Test Endpoints**: Use the interactive interface
4. **View Responses**: See real-time responses

### Testing Examples

```bash
# Test with cURL
curl -X GET "https://api.endora.space/v1/your-project/users" \
  -H "Authorization: Bearer YOUR_API_KEY"

# Test with JavaScript
fetch('https://api.endora.space/v1/your-project/users', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
})
.then(response => response.json())
.then(data => console.log(data));
```

## 📹 Interactive Testing Demo

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
  <h3 style={{color: '#495057', marginBottom: '15px'}}>Interactive Testing Demo</h3>
  <p style={{color: '#6c757d', marginBottom: '20px'}}>Replace this entire section with your interactive testing demonstration</p>
  <div style={{
    background: '#e9ecef',
    padding: '20px',
    borderRadius: '4px',
    color: '#495057',
    fontSize: '14px'
  }}>
    <strong>Video Placeholder:</strong> Insert your interactive testing demo here
  </div>
</div>

**Learn how to use the interactive testing interface to test your API endpoints.**

## 🚀 SDKs and Libraries

### Official SDKs

- **JavaScript/Node.js**: `npm install @endora/api-client`
- **Python**: `pip install endora-api`
- **PHP**: `composer require endora/api-client`
- **Java**: Available via Maven Central

### SDK Examples

```javascript
// JavaScript SDK
import { EndoraAPI } from '@endora/api-client';

const api = new EndoraAPI('YOUR_API_KEY', 'your-project-id');

// Get all users
const users = await api.users.list();

// Create new user
const newUser = await api.users.create({
  name: 'John Doe',
  email: 'john@example.com'
});
```

## 📹 SDK Integration Demo

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
  <h3 style={{color: '#495057', marginBottom: '15px'}}>SDK Integration Demo</h3>
  <p style={{color: '#6c757d', marginBottom: '20px'}}>Replace this entire section with your SDK integration demonstration</p>
  <div style={{
    background: '#e9ecef',
    padding: '20px',
    borderRadius: '4px',
    color: '#495057',
    fontSize: '14px'
  }}>
    <strong>Video Placeholder:</strong> Insert your SDK integration demo here
  </div>
</div>

**See how to integrate Endora APIs using official SDKs and libraries.**

## 🎯 Next Steps

Now that you understand the API reference:

1. **Test Your Endpoints**: Use the interactive testing interface
2. **Integrate with Your App**: Use the SDKs or direct HTTP calls
3. **Monitor Usage**: Track your API usage and performance
4. **Scale as Needed**: Upgrade your plan as your usage grows

Your API is ready for production use!