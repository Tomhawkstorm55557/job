export const sendToken = (user, statusCode, res, message) => {
  const token = user.getJWTToken();

  // Ensure COOKIE_EXPIRE is a number
  const cookieExpireDays =  5; // Default to 5 days if not set

  // Set options for the cookie
  const options = {
    expires: new Date(Date.now() + cookieExpireDays * 24 * 60 * 60 * 1000),
    httpOnly: true, // Ensure cookie is only accessible via web server
  };

  // Send response with the cookie and token
  res.status(statusCode)
    .cookie("token", token, options)
    .json({
      success: true,
      user,
      message,
      token,
    });
};
