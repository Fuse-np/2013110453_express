const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//สร้างScheme
const shopSchema = new Schema(
  {
    name: { type: String, require: true, trim: true },
    photo: { type: String, default: "nopic.png" },
    location: {
      lat: Number,
      lgn: Number,
    },

    //   createdAt:{type:Date,default:Date.now}, มองกูดสร้างให้เอง ต้องให้ ทามสแสม ทรู
    //   updatedAt:{type:Date,default:Date.now},
  },
  {
    toJSON: { virtual: true },
    timestamps: true,
    collection: "shops",
  }
); 
shopSchema.virtual("menus", {
  ref: "Menu",
  localField: "_id",
  foreignField: "shop",
});
const shop = mongoose.model("Shop", shopSchema);
module.exports = shop;