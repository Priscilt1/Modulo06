const express = require ('express')
const routes = express.Router ()
const multer = require('./app/middiewares/multer')
const ProductController = require('./app/controllers/ProductController')


routes.get ('/', function (req, res) {
    return res.render("layout.njk")
})

routes.get ('/products/create', ProductController.create)
routes.get ('/products/:id/edit', ProductController.edit)

// multer.array("photos", 6) pega a lista de fotos e limita em 6
routes.post('/products', multer.array("photos", 6), ProductController.post) //postar
routes.put('/products',  multer.array("photos", 6), ProductController.put) //atualizar
routes.delete('/products', ProductController.delete)



// ALIAS - ATALHO   
routes.get ('/ads/create', function (req, res) {
    return res.rendirect("/products/create")
})

module.exports = routes