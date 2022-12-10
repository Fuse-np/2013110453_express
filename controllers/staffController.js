const staff = require('../models/staff');
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
        message: 'เพิ่มข้อมูลเรียบร้อยแล้ว'
    })
}
exports.show = async (req, res, next) => {
try{
        const { id } = req.params;
}
catch(error){
    res.status(400).json({
        error:{
            message: 'เกิดข้อผิดพลาด: ' + error.message
        }
    })
}
}

exports.destory = async (req, res, next) => {
    try{
        const { id } = req.params;
        const staff = await Staff.deleteOne({
            id:id
        });
        if(deleteCount === 0){
            throw new Error('ไม่พบข้อมูลผู้ใช้งาน')
        }
        else{
            res.status(200).json({
                message:'ลบข้อมูลแล้ว',
                })
        }
}
catch(error){
    res.status(400).json({
        error:{
            message: 'เกิดข้อผิดพลาด: ' + error.message
        }
    })
}
}

exports.update = async (req, res, next) => {
    try{

        const { id } = req.params;
        const {name, salary} = req.body

        // const staff = await Staff.findById(id)
        // staff.name = name
        // staff.salary = salary
        // await staff.save   

        // const staff = await Staff.findByIdAndUpdate(id,{name,salary}) 
        const staff = await Staff.updateOne({ _id: id },{
            name: name,
            salary: salary,
            });

            res.status(200).json({
                message:'เปลี่ยนข้อมูลแล้ว',
                })
        }
catch(error){
    res.status(400).json({
        error:{
            message: 'เกิดข้อผิดพลาด: ' + error.message
        }
    })
}
}

