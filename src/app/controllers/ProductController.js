const Category = require('../models/Category')

module.exports = {
    create(req, res) {
        // pegar categorias
        Category.all()
        // then significa então (termo promessa)
        .then(function(results) {

            const categories = results.rows
            
            return res.render('products/create.njk', { categories })
        }).catch(function(err) {
            // o catch mostra o erro caso a promessa não der certo por algum motivo
            throw new Error (err)
        })

    },
    post(req, res) {
    // logica para salvar
    }
}