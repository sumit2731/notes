const express = require("express");

const PORT = 3010;
const app = express();

app.use((req, res, next) => {
  /**
   * This says default-src for all content from my origin only
   * default-src for all the content is my origin
   */
  //   res.setHeader(
  //     "Content-Security-Policy",
  //     "default-src 'self';"
  //   );

  /**
   * here we added a url from where only script elements can be loaded
   */
  //   res.setHeader(
  //     "Content-Security-Policy",
  //     "default-src 'self';" + "script-src 'self' http://unsecure.com"
  //   );

  /**
   * Allows the execution of inline script also
   */
  //   res.setHeader(
  //     "Content-Security-Policy",
  //     "default-src 'self';" +
  //       "script-src 'self' 'unsafe-inline' http://unsecure.com"
  //   );
  /**
   * Allows the execution of inline scripts with specififc nounce only
   * scripts that we want to execute needs to have same nounce attribute.
   * nounce attribute is not shown in browser dev tools
   */
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self';" +
      "script-src 'self' 'nonce-randomKey' 'unsafe-inline' http://unsecure.com"
  );
  next();
});

// app.use((req, res, next) => {
//     res.setHeader(
//         'Content-Security-Policy',
//         "default-src 'self';" +
//         "script-src 'self' 'nonce-randomKey' 'unsafe-inline' http://unsecure.com;"
//     );
//     next();
// })

app.use(express.static("public"));

app.get("/", (req, res) => {
  console.log(req.url);
  res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () => {
  console.log(`Server started at http://locolhost:${PORT}`);
});
