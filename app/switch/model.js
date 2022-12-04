const mongoose = require("mongoose")

let switchSchema = mongoose.Schema({
  switchName: {
    type: String,
    require: [true, "Nama switch tidak boleh kosong!"],
  },

  price: {
    type: Number,
    default: 0,
  },
})

module.exports = mongoose.model("KeyboardSwitch", switchSchema)
