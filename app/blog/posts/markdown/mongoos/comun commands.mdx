To monitor connections and use essential commands in MongoDB, follow these steps:

---

### **Viewing Current Connections in MongoDB**

#### 1. **Use `db.currentOp()`**

- This command shows active operations and connections in your MongoDB instance:
    
    ```javascript
    db.currentOp()
    ```
    

#### 2. **Check the Connection Pool**

Use the `serverStatus` command to get detailed connection statistics:

```javascript
db.serverStatus().connections
```

- Example output:
    
    ```json
    {
      "current": 10,
      "available": 100,
      "totalCreated": 120
    }
    ```
    
- `current`: The number of active connections.
- `available`: The number of connections that can still be established.
- `totalCreated`: Total connections created since the server started.

#### 3. **View Logs for Connection Events**

If enabled, MongoDB logs connection events in the logs. Use:

```bash
grep connection /var/log/mongodb/mongod.log
```

This will show events such as new connections or disconnections.

#### 4. **Use the MongoDB Shell (`mongosh`)**

Start the MongoDB shell and connect to your instance:

```bash
mongosh
```

---

### **Most Common MongoDB Commands**

#### **General Database Commands**

- **Show Databases**:
    
    ```javascript
    show dbs
    ```
    
- **Switch to a Database**:
    
    ```javascript
    use <databaseName>
    ```
    
- **Create or Drop a Database**:
    
    ```javascript
    db.dropDatabase()
    ```
    

---

#### **Collection Management**

- **Show Collections in the Current Database**:
    
    ```javascript
    show collections
    ```
    
- **Create a Collection**:
    
    ```javascript
    db.createCollection('myCollection')
    ```
    
- **Drop a Collection**:
    
    ```javascript
    db.myCollection.drop()
    ```
    

---

#### **Basic CRUD Operations**

1. **Insert Data**:
    
    ```javascript
    db.myCollection.insertOne({ name: "John", age: 30 })
    db.myCollection.insertMany([{ name: "Alice" }, { name: "Bob" }])
    ```
    
2. **Find Data**:
    
    - Find all documents:
        
        ```javascript
        db.myCollection.find()
        ```
        
    - Query with filters:
        
        ```javascript
        db.myCollection.find({ name: "John" })
        ```
        
    - Find one document:
        
        ```javascript
        db.myCollection.findOne({ name: "John" })
        ```
        
3. **Update Data**:
    
    ```javascript
    db.myCollection.updateOne({ name: "John" }, { $set: { age: 31 } })
    db.myCollection.updateMany({ name: "John" }, { $set: { age: 31 } })
    ```
    
4. **Delete Data**:
    
    ```javascript
    db.myCollection.deleteOne({ name: "John" })
    db.myCollection.deleteMany({ name: "John" })
    ```
    

---

#### **Indexes**

- **Create an Index**:
    
    ```javascript
    db.myCollection.createIndex({ name: 1 }) // 1 for ascending, -1 for descending
    ```
    
- **View Indexes**:
    
    ```javascript
    db.myCollection.getIndexes()
    ```
    
- **Drop an Index**:
    
    ```javascript
    db.myCollection.dropIndex('name_1')
    ```
    

---

#### **Administrative Commands**

- **Check Database Stats**:
    
    ```javascript
    db.stats()
    ```
    
- **Server Status**:
    
    ```javascript
    db.serverStatus()
    ```
    
- **Replica Set Status** (if applicable):
    
    ```javascript
    rs.status()
    ```
    

---

### **Performance and Monitoring**

- **Top Operations** (Shows the most time-consuming operations):
    
    ```javascript
    db.adminCommand({ top: 1 })
    ```
    
- **Profile Slow Queries**: Enable profiling to log slow queries:
    
    ```javascript
    db.setProfilingLevel(1, { slowms: 100 }) // Log queries slower than 100ms
    db.system.profile.find().sort({ ts: -1 }) // View slow queries
    ```
    

---

These commands should help you manage your MongoDB instance effectively. Let me know if you need further clarification or assistance!