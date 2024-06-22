const express = require("express");
const app = express();
const userRouter = require("./routes/userRoutes");
const noteRouter = require("./routes/noteRoutes");

app.use("/users", userRouter);
app.use("/notes", noteRouter);

app.get("/", (req, res) => {
    res.send("Hello");
});

app.listen(5000, () => {
    console.log(`Server started on port 5000`);
});