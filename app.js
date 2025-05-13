const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const bodyParser = require('body-parser');

const MONGO_URL = process.env.MONGO_URL || "mongodb://mongodb-service:27017";
const DB_NAME = process.env.DB_NAME || "mydatabase";
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0";

const app = express();

app.use(bodyParser.json());

// MongoDB client setup
let db;
MongoClient.connect(MONGO_URL, { useUnifiedTopology: true })
  .then(client => {
    db = client.db(DB_NAME);
    console.log(`Connected to MongoDB at ${MONGO_URL}`);
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  });

// Create operation (POST)
app.post('/create', async (req, res) => {
  const { name, age } = req.body;

  if (!name || !age) {
    return res.status(400).send({ error: "Name and age are required" });
  }

  try {
    const result = await db.collection('users').insertOne({ name, age });
    res.status(201).send({ message: "User created", id: result.insertedId });
  } catch (err) {
    res.status(500).send({ error: "Failed to create user" });
  }
});

// Read operation (GET)
app.get('/users', async (req, res) => {
  try {
    const users = await db.collection('users').find().toArray();
    res.status(200).json(users);
  } catch (err) {
    console.error("Failed to fetch users:", err);
    res.status(500).send({ error: "Failed to fetch users" });
  }
});

// Update operation (PUT)
app.put('/update/:id', async (req, res) => {
  const { id } = req.params;
  const { name, age } = req.body;
  try {
    const result = await db.collection('users').updateOne(
      { _id: new ObjectId(id) },
      { $set: { name, age } }
    );
    if (result.modifiedCount > 0) {
      res.status(200).send({ message: "User updated" });
    } else {
      res.status(404).send({ message: "User not found" });
    }
  } catch (err) {
    res.status(500).send({ error: "Failed to update user" });
  }
});

// Delete operation (DELETE)
app.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.collection('users').deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount > 0) {
      res.status(200).send({ message: "User deleted" });
    } else {
      res.status(404).send({ message: "User not found" });
    }
  } catch (err) {
    res.status(500).send({ error: "Failed to delete user" });
  }
});

// Start the server
app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});
