const User = require('../models/userModel')
const bcrypt = require('bcrypt');


const  create_user = async (req, res) => {
  const saltPassword = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(req.body.password, saltPassword)


  const user = new User({
    fullname: req.body.fullname,
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword
  })

  user.save().then((result) => {
    // res.redirect('/singup')
    res.json(result)
  }).catch((err) => {
    res.json(err)
  })
}

module.exports = create_user