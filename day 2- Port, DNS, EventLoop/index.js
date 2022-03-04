const express = require("express");

const app = express();

app.get("/books", function (req, res) {
  console.log("hey");
  res.send([
    {
      Name_of_Author: "Amit Garg",
      Title_of_Book: "Junior Level Books Introduction to Computer",
      ISBN_No: "978-93-5019-561-1",
      Publisher: "Reader's Zone ",
      Year_of_Publication: "2011",
    },
    {
      Name_of_Author: "Amit Garg",
      Title_of_Book: "MCA Department, MIET Meerut ",
      ISBN_No: "978-93-5019-561-1",
      Publisher: "Reader's Zone ",
      Year_of_Publication: "2011",
    },
    {
      Name_of_Author: "Vinay Kumar Singhal",
      Title_of_Book: "MCA Department, MIET Meerut ",
      ISBN_No: "978-93-8067-432-1",
      Publisher: "Reader's Zone ",
      Year_of_Publication: "2011",
    },
    {
      Name_of_Author: "Sharad Kumar Verma",
      Title_of_Book: ".NET Framework & C# ",
      ISBN_No: "978-93-5019-561-1",
      Publisher: "Sun India Publication, New Delhi ",
      Year_of_Publication: "2009",
    },
    {
      Name_of_Author: "Saurabh Singhal",
      Title_of_Book: "Computer Networks ",
      ISBN_No: "978-93-5019-561-1",
      Publisher: "Thakur Publications",
      Year_of_Publication: "2015-16",
    },
  ]);
});

app.listen(6100, () => {
  console.log("6100 responded successfully");
});
