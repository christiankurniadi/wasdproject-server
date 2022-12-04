const Product = require("./model")
const Category = require("../category/model")
const KeyboardSwitch = require("../switch/model")

module.exports = {
  index: async (req, res) => {
    try {
      const alertMessage = req.flash("alertMessage")
      const alertStatus = req.flash("alertStatus")

      const alert = { message: alertMessage, status: alertStatus }
      const product = await Product.find()
      res.render("admin/product/view_product", {
        product,
        alert,
      })
    } catch (err) {
      req.flash("alertMessage", `${err.message}`)
      req.flash("alertStatus", "danger")
      res.redirect("/product")
    }
  },

  viewCreate: async (req, res) => {
    try {
      const category = await Category.find()
      const keyboardSwitch = await KeyboardSwitch.find()
      res.render("admin/product/create", { category, keyboardSwitch })
    } catch (err) {
      req.flash("alertMessage", `${err.message}`)
      req.flash("alertStatus", "danger")
      res.redirect("/product")
    }
  },

  //   actionCreate: async (req, res) => {
  //     try {
  //       const { switchName, price } = req.body
  //       let keyboardSwitch = await KeyboardSwitch({ switchName, price })
  //       await keyboardSwitch.save()
  //       req.flash("alertMessage", "Berhasil menambahkan switch!")
  //       req.flash("alertStatus", "success")
  //       res.redirect("/switch")
  //     } catch (err) {
  //       req.flash("alertMessage", `${err.message}`)
  //       req.flash("alertStatus", "danger")
  //       res.redirect("/switch")
  //     }
  //   },

  //   viewEdit: async (req, res) => {
  //     try {
  //       const { id } = req.params
  //       const keyboardSwitch = await KeyboardSwitch.findOne({ _id: id })
  //       res.render("admin/switch/edit", { keyboardSwitch })
  //     } catch (err) {
  //       req.flash("alertMessage", `${err.message}`)
  //       req.flash("alertStatus", "danger")
  //       res.redirect("/switch")
  //     }
  //   },

  //   actionEdit: async (req, res) => {
  //     try {
  //       const { id } = req.params
  //       const { switchName, price } = req.body
  //       await KeyboardSwitch.findOneAndUpdate(
  //         {
  //           _id: id,
  //         },
  //         { switchName, price }
  //       )
  //       req.flash("alertMessage", "Berhasil mengubah switch!")
  //       req.flash("alertStatus", "success")

  //       res.redirect("/switch")
  //     } catch (err) {
  //       req.flash("alertMessage", `${err.message}`)
  //       req.flash("alertStatus", "danger")
  //       res.redirect("/switch")
  //     }
  //   },

  //   actionDelete: async (req, res) => {
  //     try {
  //       const { id } = req.params

  //       await KeyboardSwitch.findOneAndRemove({
  //         _id: id,
  //       })
  //       req.flash("alertMessage", "Berhasil menghapus switch!")
  //       req.flash("alertStatus", "success")
  //       res.redirect("/switch")
  //     } catch (err) {
  //       req.flash("alertMessage", `${err.message}`)
  //       req.flash("alertStatus", "danger")
  //       res.redirect("/switch")
  //     }
  //   },
}
