const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://abhijeet:abhijeet@cluster0.e73f4.mongodb.net/new?retryWrites=true&w=majority"
  );
};

// Creating a Schema
const sectionSchema = new mongoose.Schema(
  {
    name: { name: String, required: true },
    author: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Section = mongoose.model("section", sectionSchema);

// Author Schema
const authorSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    bookId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "book",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Author = mongoose.model("author", authorSchema);

const bookSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    body: { type: String, required: true },
    sectionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "section",
      required: true,
    },
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "author",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Book = mongoose.model("book", bookSchema);

// Section CRUD
app.get("/sections", async (req, res) => {
  try {
    const section = await Usersection.find().lean().exec();
    return res.status(200).send({ section: section });
  } catch (error) {
    return res.status(500).send({ message: err.message });
  }
});

app.post("/sections", async (req, res) => {
  try {
    const section = await Section.create(req.body);

    return res.status(201).send(section);
  } catch (error) {
    return res.status(500).send({ message: err.message });
  }
});
// url => req.params
// query string => req.query
app.get("/sections/:id", async (req, res) => {
  try {
    const section = await Section.findById(req.params.id).lean().exec();

    return res.status(200).send(section);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

app.patch("/sections/:id", async (req, res) => {
  try {
    const section = await Section.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();

    return res.status(200).send(section);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

app.delete("/sections/:id", async (req, res) => {
  try {
    const section = await Section.findByIdAndDelete(req.params.id)
      .lean()
      .exec();

    return res.status(200).send(section);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

// Authors CRUD
app.get("/authors", async (req, res) => {
  try {
    const author = await Author.find().lean().exec();
    return res.status(200).send({ author: author });
  } catch (error) {
    return res.status(500).send({ message: err.message });
  }
});

app.post("/authors", async (req, res) => {
  try {
    const section = await Section.create(req.body);

    return res.status(201).send(author);
  } catch (error) {
    return res.status(500).send({ message: err.message });
  }
});
// url => req.params
// query string => req.query
app.get("/authors/:id", async (req, res) => {
  try {
    const author = await Section.findById(req.params.id).lean().exec();

    return res.status(200).send(author);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

app.patch("/authors/:id", async (req, res) => {
  try {
    const author = await Section.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();

    return res.status(200).send(author);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

app.delete("/authors/:id", async (req, res) => {
  try {
    const author = await Section.findByIdAndDelete(req.params.id).lean().exec();

    return res.status(200).send(author);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

// Books CRUD
app.post("/books", async (req, res) => {
  try {
    const book = await Book.create(req.body);
    return res.status(200).send({ book: book });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
});

app.get("/books", async (req, res) => {
  try {
    const book = await Book.find().lean().exec();
    return res.status(200).send({ book: book });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
});

app.get("/books/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).lean().exec();
    return res.status(200).send({ book: book });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
});

app.patch("/books/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).send({ book: book });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
});

app.delete("/books/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    return res.status(200).send({ book: book });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
});

// Now final Checkout Schema With Checkin and Checkout
const checkOutSchema = new mongoose.Schema(
  {
    name: { type: String, required: false },
    bookId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "book",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Checkout = mongoose.model("checkout", checkOutSchema);

app.post("/checkedOut", async (req, res) => {
  try {
    const checkedOut = await Checkout.create(req.body);
    return res.status(200).send({ checkedOut: checkedOut });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
});

app.get("/checkedOut", async (req, res) => {
  try {
    const checkedOut = await Checkout.find()

      .lean()
      .exec();
    return res.status(200).send({ checkedOut: checkedOut });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
});

app.get("/checkedOut/:id", async (req, res) => {
  try {
    const checkedOut = await Checkout.findById(req.params.id)

      .lean()
      .exec();
    return res.status(200).send({ checkedOut: checkedOut });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
});

app.patch("/checkedOut/:id", async (req, res) => {
  try {
    const checkedOut = await Checkout.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return res.status(200).send({ checkedOut: checkedOut });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
});

app.delete("/checkedOut/:id", async (req, res) => {
  try {
    const checkedOut = await Checkout.findByIdAndDelete(req.params.id);
    return res.status(200).send({ checkedOut: checkedOut });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
});

// To Listen to port
app.listen(6000, async () => {
  try {
    await connect();
  } catch (err) {
    console.log(err);
  }

  console.log("listening on port 6000");
});
