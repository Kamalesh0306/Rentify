const router = require("express").Router();
const UserModel = require("../models/bookmodel");
const collection = require("../models/login");

router.post("/add", async (req, res) => {
  try {
    const newBook = new UserModel(req.body);
    await newBook.save();
    res.status(200).json({ message: "New property Added Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/getBooks", async (req, res) => {
  try {
    const books = await UserModel.find();
    res.status(200).json({ books });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/getBooks/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const book = await UserModel.findById(id);
    res.status(200).json(book);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.put("/updateBook/:id", async (req, res) => {
  const id = req.params.id;
  const { bookname, description, author, image, price } = req.body;
  try {
    const updatedBook = await UserModel.findByIdAndUpdate(
      id,
      { bookname, description, author, image, price },
      { new: true } // Ensure to return the updated document
    );
    res.status(200).json({ message: "Data Updated Successfully", updatedBook });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.delete("/deleteBook/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await UserModel.findByIdAndDelete(id);
    res.status(201).json({ message: "Deleted Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/likeBook/:id", async (req, res) => {
  const id = req.params.id;
  try {
    // Find the book by id and update the likes count
    await UserModel.findByIdAndUpdate(id, { $inc: { likes: 1 } });
    res.status(200).json({ message: "Like added successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  try {
    const check = await collection.findOne({ email });
    const checks = await collection.findOne({ password });
    if (check && checks) {
      res.json("exist");
    } else {
      res.json("notexist");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/signup", async (req, res) => {
  const { email, password, firstName, lastName, phoneNumber, userType } = req.body;
  try {
    const existingUser = await collection.findOne({ email });
    if (existingUser) {
      res.json("exist");
    } else {
      const newUser = new collection({ email, password, firstName, lastName, phoneNumber, userType });
      await newUser.save();
      res.json("notexist");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
