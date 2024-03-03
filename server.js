const express = require('express');
const mysql = require('mysql');
const app = express();

// Middleware to parse incoming request bodies
app.use(express.urlencoded());

// Create a MySQL connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'your_database_user',
  password: 'your_database_password',
  database: 'your_database_name'
});

// Endpoint for user authentication
app.post("/auth", function (req, res) {
  const streamkey = req.body.key;

  // Query the database to check if the provided key exists
  pool.query('SELECT * FROM users WHERE streamkey = ?', [streamkey], function (error, results, fields) {
    if (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
      return;
    }

    // If a user with the provided streamkey exists, allow access
    if (results.length > 0) {
      res.status(200).send('Authentication successful');
    } else {
      // Otherwise, reject the stream
      res.status(403).send('Unauthorized');
    }
  });
});

// Start the server
app.listen(5000, function () {
  console.log("Listening on port 5000");
});
