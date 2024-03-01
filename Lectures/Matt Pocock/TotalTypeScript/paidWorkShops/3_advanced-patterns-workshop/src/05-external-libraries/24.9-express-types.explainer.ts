import express, { RequestHandler } from "express";

const app = express();

// /user?id=124123

/**
 * here we inspected the express app types and saw how generics are passed down in app
 */
/**
 * First generic - type of req.params
 * Second param - argument passed to send
 * third parameter - allows you to string type request body
 * fourth poaram - type of query parameter
 */
const getUser: RequestHandler<
  { id: string },
  {
    name: string;
  },
  {
    body: string;
  },
  {
    queryParam: string;
  }
> = (req, res) => {
  console.log(req.params.id);
  res.send({ name: "sumeet" });
  const body = req.body;
  console.log(req.query.queryParam);
};

app.get("/user", (req, res) => {
  res.send("Hello");
});

app.post("/user", (req, res) => {});

app.listen(3000);
