// MASCARA DINHEIRO - FORMATANDO INPUT DO PREÇO
const input = document.querySelector('input[name="price"]')
input.addEventListener('keydown', function (e) {
    setTimeout(function(){
        let { value } = e.target
    
        // tirando tudo que nao é numero quando o usuario for digitar - expressao regular
        value = value.replace(/\D/g,"")

        e.target.value = value
    }, 1)
})