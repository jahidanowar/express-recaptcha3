import request from "request";

export default async (option) => {
  const { secret } = option;
  if (!secret) {
    throw new Error("secret is required");
  }

  // Google recaptcha server url
  const url =
    "https://www.google.com/recaptcha/api/siteverify?secret={secret}&response={token}";

  const verify = async (req, res, next) => {
    // Extract token from request body
    const { _token } = req.body;

    if (!_token) {
      next(() => {
        throw new Error("Missing token is field");
      });
    }
    // Send request to google server
    request(
      url.replace("{secret}", secret).replace("{token}", _token),
      (err, response, body) => {
        if (err) {
          next(() => {
            throw new Error("Error while verifying token");
          });
        }

        // Parse response
        const { success, error_codes } = JSON.parse(body);

        if (!success) {
          next(() => {
            throw new Error("Invalid token");
          });
        }

        next();
      }
    );
  };
  return verify;
};
