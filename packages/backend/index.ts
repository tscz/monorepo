import express from "express";
import { DomainObject } from "model";

export const domainObject : DomainObject = {
    first: "Hello",
    second: "World!"
}

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(domainObject)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})