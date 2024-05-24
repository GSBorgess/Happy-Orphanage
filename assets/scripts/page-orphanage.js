const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false,
}

// CREATE MAP
const map = L.map('mapid', options).setView([-27.222633,-49.6455874], 16);

// CREATE AND ADD TILELAYER
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(map);

// CREATE ICON
const icon = L.icon({
    iconUrl: "/images/map-marker.png",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

// CREATE AND ADD MARKER
L.marker([-27.222633,-49.6455874], { icon })
.addTo(map)

// IMAGE GALLERY
function selectImage(event) {
    const button = event.currentTarget

    // REMOVER TODAS AS CLASSES ACTIVE
    const buttons = document.querySelectorAll('.images button')
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove('active')
    }

    // SELECIONAR A IMAGEM CLICADA
    const image = button.children[0]
    const imageContainer = document.querySelector('.orphanage-details > img')

    // ATUALIZAR O CONTAINER DE IMAGEM
    imageContainer.src = image.src

    // ADICIONAR A CLASSE ACTIVE PARA ESTE BOTÃO 
    button.classList.add('active')
}