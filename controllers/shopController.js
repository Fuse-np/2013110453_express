const Shop = require("../models/shop");
const Menu = require("../models/menu");

exports.shop = async (req, res, next) => {
    const shops = await Shop.find().sort({ _id: -1 });

    const shopWithPhotoDomain = shops.map( (shop,index) => {
        return{
            id:shop._id,
            name:shop.name,
            photo:config.DOMAIN + shop.photo,
            location:shop.location,

        }
    })
    

    res.status(200).json({
      data: shopWithPhotoDomain,
    });
  };

  exports.menu = async (req, res, next) => {
    //const menu = await Menu.find().select('+name') ;
    //const menu = await Menu.find().where('price').gt(100) ;
    const menu = await Menu.find().populate('shop');

    res.status(200).json({
      data: menu,
    });
  };

  


  exports.show = async (req, res, next) => {
    try {
      const shop = await Shop.findById(req.params.id).populate('menus');

      if (!shop) {
        throw new Error("ไม่พบผู้ใช้งาน");
      } else {
        res.status(200).json({
          data: shop,
        });
      }
    } catch (error) {
      res.status(400).json({
        error: {
          message: "เกิดข้อผิดพลาด" + error.message,
        },
      });
    }
  };