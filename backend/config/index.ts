import express from "express";

const app = express();
const PORT = Bun.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.json("Server is running :-)")
})

app.listen(PORT, () => {
    console.log(`[SERVER]: Started on http://localhost:${PORT}`)
})