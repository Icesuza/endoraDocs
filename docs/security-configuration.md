---
id: security-configuration
title: Security Configuration
sidebar_label: Security
description: Learn how Endora handles authentication and security using Spring Security and JWT.
---

#  Security Configuration

##  Overview
Endora uses **Spring Security** with **JWT (JSON Web Token)** to secure all API endpoints.  
When a user creates a new project and enables **Client Authentication**, Endora automatically applies JWT-based authentication to that project.

---

##  How It Works

When the option **“Enable Client Authentication”** is selected during project creation:

1. **JWT Security Module** is automatically included in the project configuration.
2. The system generates a **JWT Token** for each authenticated user.
3. All API requests must include this token in the **Authorization Header** to access protected resources.

Example Header:

```
Authorization: Bearer <jwt-token>
```
