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

// logica para pegar no maximo 6 fotos
const PhotosUpload = {
    preview: document.querySelector('#photos-preview'),
    uploadLimit: 6,
    handleFileInput(event) {
        const { files: fileList } = event.target

        if (PhotosUpload.hasLimit(event)) return

        // fazendo com que a fileList se transforme em um array 
        Array.from(fileList).forEach(file => {
            const reader = new FileReader()

            // onload é um atributo que usamos quando queremos disparar um evento quando qualquer elemento tenha sido carregado. 
            reader.onload = () => {
                const image = new Image() //como se estivesse criando uma tag no HTML <img>  (formato blob = imagem em formato de texto)
                image.src = String(reader.result)

                const div = PhotosUpload.getContainer(image)

                PhotosUpload.preview.appendChild(div)
            }

            reader.readAsDataURL(file)
            
        })
    },
    // regras de limitações
    hasLimit (event) {
        const { uploadLimit } = PhotosUpload
        const { files: fileList} = event.target

        // lenght quantidade/tamanho
        if (fileList.length > uploadLimit) {
            alert(`Envie no máximo ${uploadLimit} fotos`)
            // bloquando o evento
            event.preventDefault()
            return true
        }

        return false
    },
    getContainer (image) {
        const div = document.createElement('div')
        div.classList.add ('photo')

        div.onclick = PhotosUpload.removePhoto

        div.appendChild(image)

        div.appendChild(PhotosUpload.getRemoveButton())

        return div
    },
    getRemoveButton () {
        const button = document.createElement('i')
        button.classList.add('material-icons')
        button.innerHTML = "close"
        return button
    },
    removePhoto(event){
        // parentNode é quem esta a cima, nesse caso, a div com a class photo
        const photoDiv = event.target.parentNode
        // o children é a lista
        const photosArray = Array.from(PhotosUpload.preview.children)
        const index = photosArray.indexOf(photoDiv)

        photoDiv.remove()
    }
}