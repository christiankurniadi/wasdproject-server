const mongoose = require("mongoose")

let productSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, "Nama produk tidak boleh kosong!"],
  },

  status: {
    type: String,
    enum: ["Y", "N"],
    defaut: "Y",
  },

  thumbnail: {
    type: String,
  },

  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },

  switch: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "KeyboardSwitch",
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  price: {
    type: Number,
    default: 0,
  },
})

module.exports = mongoose.model("Product", productSchema)
