import request from "request";

class Recaptcha {
  constructor(secret, minScore) {
    console.log("secret", secret, "minScore", minScore);
    if (!secret) {
      throw new Error("No secret provided");
    }
    this.secret = secret;
    this.minScore = minScore || 0.5;
  }

  verify = () => {
    return (req, res, next) => {
      const { token } = req.body;
      if (!token) {
        throw new Error("No token provided");
      }
      const url = `https://www.google.com/recaptcha/api/siteverify?secret=${this.secret}&response=${token}`;

      request(url, (err, response, body) => {
        if (err) {
          throw new Error("Error verifying recaptcha");
        }
        const { success, score } = JSON.parse(body);

        console.log("success", success, "score", score);

        if (!success) {
          throw new Error("Recaptcha verification failed");
        }
        if (score < this.minScore) {
          throw new Error("Recaptcha verification score too low");
        }
        next();
      });
    };
  };
}

export default Recaptcha;
