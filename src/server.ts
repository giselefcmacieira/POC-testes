import app from "./app"

const port: number = Number(process.env.PORT) || 5000
app.listen(port, () => console.log(`Server is up and running on port ${port}`))