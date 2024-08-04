import { getTokenFromHeader } from "./getTokenFromHeader.js";
import { verifyToken } from "../utils/verifyToken.js";
// import { getTokenFromHeader } from "./getTokenFromHeader.js";

export const isLoggedIn = (req, res, next) => {
  //get token from header
  const token = getTokenFromHeader(req);
  //verify the token
  const decodedUser = verifyToken(token);
  if (!decodedUser) {
    throw new Error("Invalid/Expired token, please login again");
  } else {
    //save the user into req obj
    req.userAuthId = decodedUser?.id;
    next();
  }
};