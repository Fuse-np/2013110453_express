const Staff = require('../models/staff')

// exports.index = async (req, res, next) => {

//   const staff = await Staff.findOne()

//   res.status(200).json({
//     data : staff,
//   });
// }
exports.index = async (req, res, next) => {
    const staff = await Staff.find().sort({ _id: -1 });
    res.status(200).json({
    data: staff,
    });
};

exports.insert = async (req, res, next) => {

    const{name,salary} = req.body

    let staff = new Staff({
        name : name,
        salary : salary
    });
    await staff.save()

    return res.status(200).json({
        massage: 'เพิ่มข้อมูลเรียบร้อยแล้ว'
    })
    
}