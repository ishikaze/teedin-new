const loaderDiv = document.createElement('div')
const loaderContainer = document.createElement('div')
const currentUrl = window.location.href;
const bareUrl = window.location.protocol + "//" + window.location.host

const urlString = currentUrl;
const url = new URL(urlString);
const pathname = url.pathname; 

const pathSegments = pathname.split('/');
const filteredSegments = pathSegments.filter(segment => segment !== ''); 

const pathDepth = filteredSegments.length; 

let exitPath = './'

for (let i = pathDepth; i > 0; i--) {
    exitPath += '../'
}

loaderDiv.id = 'loader'
loaderContainer.classList.add('loader-container')
loaderDiv.innerHTML = `<div class="loader"></div>`

loaderContainer.appendChild(loaderDiv)

document.body.appendChild(loaderContainer)

const loader = document.getElementById('loader')

console.log(window.location.cru)

function renderHeader() {
    const body = document.body
    const firstChild = body.firstChild; 
    const navbar = document.createElement('div')
    navbar.id = 'navbar'
    navbar.innerHTML = `<div id="icon"></div>
        <div id="burger" class="burger-menu">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div id="nav" class="nav-links">
            <a onmousedown="redirect('${exitPath}')">Home</a>
            <a onmousedown="redirect('${exitPath}buy')">Buy</a>
            <a onmousedown="redirect('${exitPath}sell')">Sell</a>
            <div class="nav-divider"></div>
            <div id="profile"><i class="fa-solid fa-user"></i></div>
        </div>`
    body.insertBefore(navbar, firstChild);
}

function renderFooter() {
    const body = document.body
    const footer = document.createElement('footer');

    const footerLeft = document.createElement('div')
    const footerLeftHeader = document.createElement('h3')
    const linkHome = document.createElement('a')
    const linkBrowse = document.createElement('a')
    const linkAbout = document.createElement('a')
    const linkLogin = document.createElement('a')

    footerLeftHeader.textContent = 'Site map'
    linkHome.textContent = 'Home'
    linkHome.onclick = function() {
        redirect('../../')
    }
    linkBrowse.textContent = 'Browse property'
    linkBrowse.onclick = function() {
        redirect('../../buy')
    }
    linkAbout.textContent = 'About Teedin'
    linkAbout.onclick = function() {
        redirect('../../about')
    }
    linkLogin.textContent = 'Login'
    linkLogin.onclick = function() {
        redirect('../../login')
    }
    footerLeft.classList.add('footerLeft')
    footerLeft.appendChild(footerLeftHeader)
    footerLeft.appendChild(linkHome)
    footerLeft.appendChild(linkBrowse)
    footerLeft.appendChild(linkAbout)
    footerLeft.appendChild(linkLogin)

    const footerRight = document.createElement('div')
    const footerRightHeader = document.createElement('h3')
    const linkEmail = document.createElement('a')
    const linkPhone = document.createElement('a')
    const linkAddress = document.createElement('a')

    footerRightHeader.textContent = 'Contact us'
    linkEmail.innerHTML = '<p>hello@teedin.com</p>'
    linkEmail.href = ''
    linkPhone.innerHTML = '<p>Tel. 099-999-9999</p>'
    linkPhone.href = ''
    linkAddress.innerHTML = '<p>1/23, BUF HQ., Big mama road, Wow subdistrict, Bangcock, Thailand, 696969</p>'
    linkAddress.href = ''

    footerRight.classList.add('footerRight')
    footerRight.appendChild(footerRightHeader)
    footerRight.appendChild(linkEmail)
    footerRight.appendChild(linkPhone)
    footerRight.appendChild(linkAddress)

    footer.appendChild(footerLeft)
    footer.appendChild(footerRight)

    body.appendChild(footer)
}

renderFooter()
renderHeader()

// Burger menu logic
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('nav');
    if (burger && navLinks) {
        burger.addEventListener('click', function() {
            burger.classList.toggle('open');
            navLinks.classList.toggle('nav-open');
        });
        window.addEventListener('resize', function() {
            if (window.innerWidth > 720) {
                burger.classList.remove('open');
                navLinks.classList.remove('nav-open');
            }
        });
    }

function showLoader(value) {
    if (value) {
        // loader.style.transform = 'scale(1)'
        loader.style.opacity = 1
        document.body.style.pointerEvents = 'none'
    } else {
        // loader.style.transform = 'scale(0)'
        loader.style.opacity = 0
        document.body.style.pointerEvents = 'auto'
    }
}

function redirect(to) {
    showLoader(true)
    setTimeout(() => {window.location.href = to}, 250);
}

showLoader(true)
window.onload = function() {
  showLoader(false)
};