const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();

app.use(bodyParser.json());

app.post("/signup", async (req, res) => {
  // It's just a dummy service - we don't really care for the email
  const email = req.body.email;
  const password = req.body.password;

  if (
    !password ||
    password.trim().length === 0 ||
    !email ||
    email.trim().length === 0
  ) {
    return res
      .status(422)
      .json({ message: "An email and password needs to be specified!" });
  }

  try {
    /**
     * @Desc here is how we reach auth api
     */
    // const hashedPW = await axios.get("http://auth/hashed-password/" + password);
    // const hashedPW = "dummy text";
    /**
     * THis is env variable is provided automatically by kubernetes for each service
     * This has internal IP address of the service
     */
    const hashedPW = await axios.get(
      `http://${process.env.AUTH_ADDRESS}/hashed-password/` + password
    );
    // since it's a dummy service, we don't really care for the hashed-pw either
    console.log(hashedPW, email);
    res.status(201).json({ message: "User created!" });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "Creating the user failed - please try again later." });
  }
});

app.post("/login", async (req, res) => {
  // It's just a dummy service - we don't really care for the email
  const email = req.body.email;
  const password = req.body.password;

  if (
    !password ||
    password.trim().length === 0 ||
    !email ||
    email.trim().length === 0
  ) {
    return res
      .status(422)
      .json({ message: "An email and password needs to be specified!" });
  }

  // normally, we'd find a user by email and grab his/ her ID and hashed password
  const hashedPassword = password + "_hash";
  /**
   * @Desc Here is how we reach auth api
   */
  // const response = await axios.get(
  //   "http://auth/token/" + hashedPassword + "/" + password
  // );
  // const response = { status: 200, data: { token: "abc" } };
  /**
   * we provide this env variable, value is DNS mapping which is automatically created by kubernetes for
   *  for each service.
   */
  const response = await axios.get(
    `http://${process.env.AUTH_SERVICE_SERVICE_HOST}/token/` +
      hashedPassword +
      "/" +
      password
  );
  if (response.status === 200) {
    return res.status(200).json({ token: response.data.token });
  }
  return res.status(response.status).json({ message: "Logging in failed!" });
});

app.listen(8080);
