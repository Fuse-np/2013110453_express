const Company = require('../models/company')


exports.index = async (req, res, next) => {

  const company = await Company.findOne()

  res.status(200).json({
    data : company,
  });
};
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


