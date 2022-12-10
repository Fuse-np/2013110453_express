const Company = require('../models/company')

exports.index = async (req, res) => {

  const company = await Company.find().sort({ _id: '1' })
  res.send({ data: company })

}

exports.show = async (req, res) => {

  try {
    const company = await Company.findById(req.params.id)
    if (!company) throw new Error('ไม่พบข้อมูล')
    res.send({ data: company })
  } 
  catch (error) {
    res.status(404).json({ message: 'error : ' + error.message })
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
    if (company.matchedCount === 0) throw new Error('ไม่พบข้อมูล')
    res.status(200).json({ message: 'แก้ไขข้อมูลเรียบร้อย' })
  } 
  catch (error) {
    res.status(404).json({ message: 'error : ' + error.message })
  }
}

exports.destroy = async (req, res) => {
  try {
    const { id } = req.params
    const company = await Company.deleteOne({ _id: id })
    if (company.deletedCount === 0) throw new Error('ไม่พบข้อมูล')
    res.status(200).json({ message: 'ลบข้อมูลเรียบร้อย' })
  } 
  catch (error) {
    res.status(404).json({ message: 'error : ' + error.message })
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


