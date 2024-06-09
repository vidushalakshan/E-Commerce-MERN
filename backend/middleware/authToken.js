const jwt = require("jsonwebtoken");

async function authToken(req, res) {
  try {
    const token = req.cookies?.token || req.header;

    jwt.verify(token, process.env.TOKEN_SECRET_KEY, function (err, decoded) {
      console.log(err);
      console.log("decoded", decoded);
    });

    console.log("token              =", token);
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      data: [],
      error: true,
      success: false,
    });
  }
}

module.exports = authToken;
