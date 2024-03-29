const User = require("./schema/user");

exports.listUser = async (req, res) => {
    const users = await User.find();
    console.log("user List:", users)
  res.render("index", {users});
};

exports.addUser = (req, res) => {
  res.render("add");
};

exports.createUser = async(req, res) => {
  const { firstName, lastName, email } = req.body;
  const newUser = new User({
    firstName: firstName,
    lastName: lastName,
    email: email,
  })
  console.log("req: ", req.body);
  await newUser.save();
  res.redirect('/');
};

exports.deleteUser = async(req, res) => {
const id = req.params.id;
await User.findByIdAndDelete(id);
res.status(200).send('Delete');
}