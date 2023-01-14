const User = require("../models/user")


exports.index = (req, res, next) => {
    //res.send('Hello kitty');
    res.status(200).json(
      {Fullname: 'Nattaphong Patis'})
  
};

exports.bio = (req, res, next) => {
    res.status(200).json(
      {Fullname : 'Nattaphong Patis',
       Nickname : 'Fuse',
       Hobby    : 'Play game',
       gitusername : 'Fuse-np'
    })
};

exports.register = async (req, res, next) => {
  try{
    const {name, email, password} = req.body

    const exitEmail = await User.findOne({email:email})

    if(exitEmail){
      const error = new Error("Emailนี้มีผู้ใช้งานในระบบล้ว")
      error.statusCode = 400
      throw error;
    }
  
    let user = new User();
    user.name = name
    user.email = email
    user.password = await user.encryptPassword(password)
  
    await user.save()

     res.status(201).json({
      message:'ลงทะเบียนเรียบร้อยแล้ว'

    })
  }catch(error){
    next(error)
  }
}
