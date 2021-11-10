# An Express middleware for recapctha server implementation

ES6 Module

```js
import ExpressRecaptcha3 from "express-recapctha3";

const recapctha = new ExpressRecaptcha3({
  secret: process.env.RECAPTCHA_SITE_SECRET_KEY,
  score: 0.7,
});

app.post("/contact", recaptcha.verify, (req, res) => {
  // Implementation goes here
});
```

Common JS

```js
const ExpressRecaptcha3 = reqire("express-recapctha3");

const recapctha = new ExpressRecaptcha3({
  secret: process.env.RECAPTCHA_SITE_SECRET_KEY,
  score: 0.7,
});

app.post("/contact", recaptcha.verify, (req, res) => {
  // Implementation goes here
});
```
