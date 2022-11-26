const company = {
    data: [
      {
        id: 1,
        name: 'Riot',
        address: {
          province: 'Hong Kong',
          postcode: '999077'
        }
      },
      {
        id: 2,
        name: 'Hoyoverse',
        address: {
          province: 'Singapore',
          postcode: '546080'
        }
      },
      {
        id: 3,
        name: 'LINE MAN Wongnai',
        address: {
          province: 'Bangkok',
          postcode: '10110'
        }
      }
    ]
  }

exports.company = (req, res) => {
    res.send(company)
}
