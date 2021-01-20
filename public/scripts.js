// MASCARA DINHEIRO - FORMATANDO INPUT DO PREÇO
const input = document.querySelector('input[name="price"]')
input.addEventListener('keydown', function (e) {
    setTimeout(function(){
        let { value } = e.target
    
        // tirando tudo que nao é numero quando o usuario for digitar - expressao regular
        value = value.replace(/\D/g,"")

        // formatando o dado para real
        value = new Intl.NumberFormat('pt-BR', {
            style: 'currency', //ex:1.000,00
            currency: 'BRL' //R$
        }).format(value/100)

        e.target.value = value
    }, 1)
})