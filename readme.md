![Nginx Logo](https://linuxscriptshub.com/wp-content/uploads/2017/04/Nginx-Logo.png)

# Simple Authentication Server for Nginx RTMP

## Prerequisites

- Node.js
- Nginx
- MySQL Database

## Installation

1. Clone or download the repository.
2. Install dependencies using npm:
```
npm install
```
    Set up your MySQL database and update the configuration in config.js with your database credentials and details.

Usage

Start the authentication server:
```
npm start
```
Configuration

Add the following line to your Nginx configuration file (nginx.conf or a separate file included in your main configuration):

```

on_publish http://localhost:5000/auth;
```

This line directs Nginx to send a request to the authentication server when a stream is published.
SQL Integration

    Ensure your MySQL server is running and accessible.
    Create a database and a table to store user data. For example:

```

CREATE DATABASE streaming;
USE streaming;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  streamkey VARCHAR(255) NOT NULL
);
```

    Insert some test data:
    

INSERT INTO users (streamkey) VALUES ('your_stream_key');

Replace 'your_stream_key' with the actual stream key you want to use for testing.
Contributing

Contributions and forks are welcome! If you have any improvements or suggestions, feel free to submit a pull request.
