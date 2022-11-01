const User = require('../models/userModel')

const create_user = (req, res) => {
  const user = new User({
    fullname: req.body.fullname,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })

  user.save().then((result) => {
    // res.redirect('/singup')
    res.json(result)
  }).catch((err) => {
    res.json(err)
  })
}

module.exports = create_user