require("./db/connect.js");
const express = require("express");
const app = express();
const tasks = require("./routes/tasks.js");
const connectDB = require("./db/connect.js");
require("dotenv").config();
const notFound = require("./middleware/notFound.js");
const errorHandlerMiddleware = require("./middleware/error_handler.js");

//middleware
app.use(express.static("./public"));
app.use(express.json());
//routes
app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

//app.get('/api/v1/tasks')-get all task
//app.post('/api/v1/tasks')-create a task
//app.get('/api/v1/tasks/:id')-get a single task
//app.pat ch('/api/v1/tasks/:id')-update a task
//app.delete('/api/v1/tasks/:id')-delete a taks

const port = process.env.PORT|| 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);

    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
