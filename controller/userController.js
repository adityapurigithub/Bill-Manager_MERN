export const getAuthUser = async (req, res) => {
  console.log(req.user);

  const userValid = req.user;

  return res.status(200).json({
    user: userValid,
  });
};
