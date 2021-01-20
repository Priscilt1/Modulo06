const { formatPrice } = require('../../lib/utils')
const Category = require('../models/Category')
const Product = require('../models/Product')


module.exports = {
    create(req, res) {
        // pegar categorias - FORMATO DE PROMESE            S 
        Category.all()
        // then significa "então" (termo promessa)
        .then(function(results) {
            const categories = results.rows
            return res.render('products/create.njk', { categories })
        }).catch(function(err) {
            // o catch mostra o erro caso a promessa não der certo por algum motivo
            throw new Error (err)
        })
    },
    async post(req, res) {
        // logica para salvar
        // validacao para saber se os campos estão preenchidos
        const keys = Object.keys(req.body)

        for (key of keys) {
            if (req.body[key] == "") {
                return res.send('Por favor, preencha todos os campos!')
            }
        }

        // dados para salvar - req.body
        let results = await Product.create(req.body)
        // ASYNC-AWAIT - permite trabalhar com promises sem a cadeia de thein
        // toda vez que usar o await, precisa colocar o nome async na frente da função
        const productId = results.rows[0].id

        return res.redirect(`/products/${productId}`)

    },
    async edit (req, res) {
        let results = await Product.find(req.params.id)
        const product = results.rows[0]

        if(!product) return res.send('Produto não encontrado!')

        // formatação do preço
        product.old_price = formatPrice(product.old_price)
        product.price = formatPrice(product.price)

        results = await Category.all()
        const categories = results.rows

        return res.render('products/edit.njk', {product, categories})
    }
}