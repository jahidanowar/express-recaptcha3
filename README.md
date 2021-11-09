# An Express middleware for recapctha server implementation

ES6 Module

```js
import recaptchaMidlleware from "express-recapctha3";

app.post(
  "/contact",
  recaptchaMidlleware({
    secret: process.env.RECAPTCHA_SITE_SECRET_KEY,
  }),
  (req, res) => {
    // Implementation goes here
  }
);
```

Common JS

```js
const recaptchaMidlleware = reqire("express-recapctha3")({
  secret: process.env.RECAPTCHA_SITE_SECRET_KEY,
});

app.post("/contact", recaptchaMidlleware, (req, res) => {
  // Implementation goes here
});
```
