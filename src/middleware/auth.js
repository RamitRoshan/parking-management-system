const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token || token !== process.env.SECRET_KEY) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  next();
};

module.exports = authMiddleware;
