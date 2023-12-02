const { authenticateUser } = require("./UserController");

async function login(req, res) {
  const { username, password } = req.body;

  try {
    const user = await authenticateUser({ username, password });
    console.log("user", user);

    if (user) {
      const { password, ...userData } = user.dataValues;
      return res.json({
        data: userData,
        status: 200,
        message: "Login Successful!",
      });
    } else {
      return res.status(401).json({ error: "Invalid credentials." });
    }
  } catch (error) {
    console.error("Authentication Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  login,
};
