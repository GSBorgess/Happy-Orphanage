// CREATE MAP
const map = L.map('mapid').setView([-27.222633,-49.6455874], 16);

// CREATE AND ADD TILELAYER
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(map);

// CREATE ICON
const icon = L.icon({
    iconUrl: "/images/map-marker.png",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

let marker;

// CREATE AND ADD MARKER
map.on('click', function(event) {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // REMOVE ICON
    marker && map.removeLayer(marker)

    // ADD ICON LAYER
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
})

// ADICIONAR CAMPO DE FOTOS
function addPhotoField() {
    // PEGAR CONTAINER DE FOTOS #images
    const container = document.querySelector('#images')

    // PEGAR CONTAINER PARA DUPLICAR.new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')

    // REALIZAR O CLONE DA ULTIMA IMAGEM ADICIONADA
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    // VERIFICAR SE O CAMPO ESTA VAZIO, SE SIM, NÃO ADICIONAR AO CONTAINER DE IMAGENS
    const input = newFieldContainer.children[0]
    if(input.value == '') {
        return
    }

    // LIMPAR O CAMPO ANTES DE ADICIONAR AO CONTAINER DE IMAGENS
    input.value = ''

    // ADICIONAR O CLONE AO CONTAINER DE #images
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget
    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <= 1) {
        // LIMPAR O VALOR DO CAMPO
        span.parentNode.children[0].value = ""
        return
    }

    // DELETAR O CAMPO
    span.parentNode.remove()
}

// SELECT YES OR NO
function toggleSelect(event) {
    
    // RETIRAR A CLASS .active DOS BOTÕES
    document.querySelectorAll('.button-select button')
    .forEach(function(button) {
        button.classList.remove('active')
    })
    
    // COLOCAR A CLASS .active NO BOTÃO CLICADO
    const button = event.currentTarget
    button.classList.add('active')
    
    // ATUALIZAR O MEU INPUT HIDDEN COM O VALOR SELECIONADO
    const input = document.querySelector('[name="open_on_weekends"]')
    
    input.value = button.dataset.value
}
