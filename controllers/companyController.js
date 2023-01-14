const Company = require('../models/company')

exports.index = async (req, res) => {

  const company = await Company.find().sort({ _id: '1' })
  res.send({ data: company })

}

exports.show = async (req, res) => {

  try {
    const company = await Company.findById(req.params.id)
    if (!company) {
      const error = new Error("ไม่พบข้อมูลบริษัท");
      error.statusCode = 400;
      throw error;
  }
  } 
  catch (error) {
    next(error)
  }
}

exports.insert = async (req, res) => {

  try {
    const { name, address} = req.body
    
    const company = new Company({ name, address })
    await company.save()
    res.status(201).json({ message: 'เพิ่มข้อมูลเรียบร้อย' })
  } 
  catch (error) {
    res.status(404).json({ message: 'error : ' + error.message })
  }
}

exports.update = async (req, res) => {

  try {
    const { id } = req.params
    const { name, address } = req.body
    const company = await Company.updateOne({ _id: id }, { name, address })
    if (company.matchedCount === 0) {
      const error = new Error('ไม่พบข้อมูล')
      error.statusCode = 404
      throw error;
    }
  } 
  catch (error) {
    next(error);
  }
}

exports.destroy = async (req, res) => {
  try {
    const { id } = req.params
    const company = await Company.deleteOne({ _id: id })
    if(company.deletedCount === 0) {
      const error = new Error("ไม่สามารถลบข้อมูลได้ / ไม่พบข้อมูลผู้ใช้งาน");
      error.statusCode = 400;
      throw error;
    }
  } 
  catch (error) {
        next(error);
  }
}

// const company = {
//     data: [
//       {
//         id: 1,
//         name: 'Riot',
//         address: {
//           province: 'Hong Kong',
//           postcode: '999077'
//         }
//       },
//       {
//         id: 2,
//         name: 'Hoyoverse',
//         address: {
//           province: 'Singapore',
//           postcode: '546080'
//         }
//       },
//       {
//         id: 3,
//         name: 'LINE MAN Wongnai',
//         address: {
//           province: 'Bangkok',
//           postcode: '10110'
//         }
//       }
//     ]
//   }


