---
id: post-man
title: Postman Collection
sidebar_label: Postman
description: Learn how to test Endora APIs using Postman.
---

# Postman Collection for Endora API

## Overview
Endora provides a ready-to-use **Postman Collection** to simplify API testing and collaboration.  
This collection includes all API endpoints with sample parameters, headers, and authentication setup.

---
## Expoting 

You can export your project as postman collection by check on button Download fo Postman 

![postman](/img/postman.png)


## Importing the Collection

You can test the API using Postman by importing the collection file.

###  Steps:
1. **Open Postman**
2. Click **Import** in the top-left corner
3. Choose one of the following:
   - **File Upload:** Import the `Endora_API_Collection.json`
   - **Link:** Paste the shared collection link (if provided)
4. After importing, you’ll see folders for each API module such as:
   - `Accounts`
   - `Transactions`
   - `Users`

---

##  Configuring Environment Variables

Set up your environment in Postman to switch easily between local and production servers.

| Variable | Example Value | Description |
|-----------|----------------|-------------|
| `base_url` | `https://api-ngin.oudom.dev/` | Base URL |
| `token` | `<your-jwt-token>` | JWT used for authentication |

You can add these in **Postman → Environments → Add New Environment**.

---

##  Testing an Endpoint

Example using environment variables:

**Request:**

**Headers:**
```
Authorization: Bearer {{token}}
```


**Example Response:**
```json
[
  {
    "id": 1,
    "name": "Sanom",
    "email": "sanom@endora.dev"
  }
]

