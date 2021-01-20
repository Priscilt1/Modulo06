const db = require('../../config/db')

module.exports = {
    create (data) {
        // inserindo informações na tabela no banco de dados
        const query = `
            INSERT INTO products (
                category_id,
                user_id,
                name, 
                description,
                old_price, 
                price,
                quantity,
                status
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
            RETURNING id
        `

        // esse array sera responsavel por substituir os placeholder ($1, $2...)
        // o data price vai reverter a Mask. Se no front recebe R$1,23 no back recebera 123/100
        data.price = data.price.replace(/\D/g,"")
        const values = [
            data.category_id,
            data.user_id || 1,
            data.name,
            data.description, 
            data.old_price || data.price,
            data.price,
            data.quantity,
            data.status || 1
        ]

        return db.query(query, values)
    }
}