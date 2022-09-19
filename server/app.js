//Importing and creating an instance of express
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI;
const app = express();

app.use(cors());

// Creating the connect function
const connectDB = async () => {
  await mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Mongo connected successfully"))// Logs out successful when MongoDB connects.
    .catch((e) => {
      console.log(e.message);// Logs out the error message if it encounters any.
    });
};

// Calling the Connect Function
connectDB();

//Setting PORT to 5000 if PORT is not listed in environmental variables.
const PORT = process.env.PORT || 5000;


const userSchema = mongoose.Schema({
    name: String,
    phone: String
},{ collection: 'users'});

const UserModel = mongoose.model('User', userSchema);

// Creating the `GET` route
app.get("/", async(req, res) => {
    const user = { name: 'John Doe', phone: '984444444'};
    await UserModel.create(user);
    const docs = await UserModel.find();
    res.json({success: true, data: docs})
});

//Starting the express server
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
