const auth = (req, res, next) => {
  if (req.session?.user?.email) {
    console.log(req.session?.user?.email);
    return next();
  }
  return res.status(401).send({ message: "error de autorizacion" });
};

export default auth;
