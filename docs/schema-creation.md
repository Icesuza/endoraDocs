---
id: Schema Creation
title: Schema Creation
---

# Schema Creation

> 🚀 In this guide, you’ll learn how to design and create a schema step by step.

---

## 📝 What is a Schema?

A **schema** defines the structure of your data. It describes:
- Fields
- Types
- Relationships
- Constraints

---

Before creating a schema, you need to sign up and create a project to access our features. This step will guide you through creating your first project: simply click the “Create Project” button and enter a name for your project. Once your project is set up, you’ll be ready to start designing your database schema and generating APIs.

1. Once your project is ready, you can start building your database schema. Follow these steps:
Add schema Click “New Schema” to create a new Schema for your database. Give it a meaningful name or you can duplicate by using old shema.

2. Define Columns Add fields to your table by specifying column name, type, and constraints (unique, or default values).

3. Set Relationships Connect tables by defining relationships such as one-to-one, one-to-many, or many-to-many. This helps your API understand how data interacts across tables.

4. Review Schema – Check your schema visually to ensure all tables and relationships are correct.

5. Save Schema – Once satisfied, click “Save Schema”. Your structure is now ready to generate an API.
By using our visual schema builder, you can design complex databases quickly without worrying about manual coding. Once your schema is complete, the platform can automatically generate a fully functional API based on your design.

After creating your schema, you can populate your tables with data in two ways:
1. Manually Insert Data – go to datasource tap and add records directly by filling in the fields.

2. Import from File – Upload a file (such as CSV or Excel) to bulk insert data into your tables. This method is perfect for larger datasets or when migrating existing data.



## 🔧 Steps to Create a Schema

1. Open your project folder  
2. Create a new file: `schema.yaml`  
3. Define your tables and relationships  
4. Save the file and run `npx schema-cli`  

:::tip
Keep your schemas **small and modular**. This makes them easier to maintain.
:::

---



