import request from "request";

class Recaptcha {
  constructor(secret, minScore) {
    this.secret = secret;
    this.minScore = minScore || 0.5;
  }

  async verify(req, res, next) {
    const { token } = req.body;

    if (!token) {
      return next(() => {
        throw new Error("No token provided");
      });
    }

    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${this.secret}&response=${token}`;
    request(url, (err, response, body) => {
      if (err) {
        return next(() => {
          throw new Error("Error verifying recaptcha");
        });
      }

      const { success, score } = JSON.parse(body);

      if (!success) {
        return next(() => {
          throw new Error("Recaptcha verification failed");
        });
      }

      if (score < this.minScore) {
        return next(() => {
          throw new Error("Recaptcha verification score too low");
        });
      }

      next();
    });
  }
}

export default Recaptcha;
