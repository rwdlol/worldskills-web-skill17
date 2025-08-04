import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const users = []; // Replace with DB in real-world
const secret = "supersecret";

app.post("/register", async (req, res) => {
  const hashed = await bcrypt.hash(req.body.password, 10);
  users.push({ email: req.body.email, password: hashed });
  res.status(201).send("Registered");
});

app.post("/login", async (req, res) => {
  const user = users.find((u) => u.email === req.body.email);
  const valid =
    user && (await bcrypt.compare(req.body.password, user.password));
  if (!valid) return res.status(401).send("Invalid");
  const token = jwt.sign({ email: user.email }, secret);
  res.json({ token });
});

app.get("/profile", (req, res) => {
  const auth = req.headers.authorization;
  if (!auth) return res.sendStatus(401);
  try {
    const decoded = jwt.verify(auth.split(" ")[1], secret);
    res.json(decoded);
  } catch {
    res.sendStatus(401);
  }
});
