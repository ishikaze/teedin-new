let num = 0

document.documentElement.style.overflowY = 'hidden'

function shrinkHeader() {
    if (num === 1) {
        document.getElementById('header-img').style.height = '20em';
        document.getElementById('header-img').style.paddingBottom = '0em';
        document.documentElement.style.overflowY = 'auto'
        console.log('called');
    }
    num = num + 1
    
}

function setHeaderText(text) {
    const headerText = document.getElementById('header-text')

    headerText.style.opacity = 0
    setTimeout(() => {
        headerText.style.opacity = 1
        headerText.innerHTML = text
    }, 100);
}