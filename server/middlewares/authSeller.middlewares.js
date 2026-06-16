import jwt from "jsonwebtoken";

const authSeller = async (req, res, next) => {
  const { sellerToken } = req.cookies;

  if (!sellerToken) {
    return res
      .status(401)
      .json({ success: false, message: "Seller not authorized" });
  }

  try {
    const tokenDecode = jwt.verify(sellerToken, process.env.JWT_SECRET);

    if (tokenDecode.email !== process.env.SELLER_EMAIL) {
      return res.status(403).json({ success: false, message: "Access denied" });
    }

    req.seller = tokenDecode;
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ success: false, message: "Invalid or expired seller token" });
  }
};

export default authSeller;
