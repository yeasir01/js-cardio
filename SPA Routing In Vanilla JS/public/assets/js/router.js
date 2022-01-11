const links = document.querySelectorAll('[data-template]');
const app = document.getElementById('app');

const routes = {
    "404": "./templates/404.html",
    "/": "./templates/home.html"
};

function handleRouteChange(){
    const path = window.location.pathname;
    const dir = routes[path] || routes['404'];
    renderDOM(dir, app);
}

async function renderDOM(templatePath, parentNode){
    try {
        const html = await fetch(templatePath).then(data => data.text());
        parentNode.innerHTML = html;
    } catch (err) {
        console.error(err)
    }
}

function handleClick(event) {
    try {
        event.preventDefault();
        const path = event.target.getAttribute("href");

        window.history.pushState({}, "", path);
        handleRouteChange();
    } catch (err) {
        console.error(err)
    }
}

window.addEventListener('DOMContentLoaded', () => {

    for (let link of links) {
        const url = link.getAttribute("href");
        const path = link.getAttribute("data-template");
        
        routes[url] = path;
    
        link.addEventListener('click', handleClick)
    }

    handleRouteChange()

});

window.addEventListener('popstate', handleRouteChange);