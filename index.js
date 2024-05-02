
const express = require("express");

const app = express()

app.get("/", (req, res) => {
    res.send("Backend inicial dds-backend!")
})

const port = 3000
app.listen(port, () => {
    console.log(`sitio encuchando en el puerto ${port}`)
})