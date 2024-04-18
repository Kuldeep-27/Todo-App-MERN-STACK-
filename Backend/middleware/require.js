const jwt = require("jsonwebtoken");
const { error } = require("../utils/response");


const isLogin = async (req, res, next) => {
  
  if (
    !req.headers ||
    !req.headers.authorization ||
    !req.headers.authorization.startsWith("Bearer")
  ) {
    return res.send(error(401, "Authorization header is required"));
  }

  const accessToken = req.headers.authorization.split(" ")[1];

  try {
    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);
    req._id = decoded._id;

    next();
  } catch (e) {
    

    return res.send(error(401, "Please Login First"));
  }
};



module.exports = isLogin;
  


