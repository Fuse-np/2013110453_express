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
