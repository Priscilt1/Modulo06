// MASCARA DINHEIRO - FORMATANDO INPUT DO PREÇO
const Mask = {
    apply(input, func) {
        // deixando a função dinamica
        setTimeout(function(){
            input.value = Mask[func](input.value)
        }, 1)
    },
    formatBRL(value) {
        // tirando tudo que nao é numero quando o usuario for digitar - expressao regular
        value = value.replace(/\D/g,"")

        // formatando o dado para real
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency', //ex:1.000,00
            currency: 'BRL' //R$
        }).format(value/100)
    }
}