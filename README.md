# An Express middleware for recapctha server implementation

ES6 Module

```js
import recaptchaMidlleware from "express-recapctha3";

const recapctha = new recaptchaMidlleware({
  secret: process.env.RECAPTCHA_SITE_SECRET_KEY,
  score: 0.7,
});

app.post("/contact", recaptcha.verify, (req, res) => {
  // Implementation goes here
});
```

Common JS

```js
const recaptchaMidlleware = reqire("express-recapctha3");

const recapctha = new recaptchaMidlleware({
  secret: process.env.RECAPTCHA_SITE_SECRET_KEY,
  score: 0.7,
});

app.post("/contact", recaptcha.verify, (req, res) => {
  // Implementation goes here
});
```
