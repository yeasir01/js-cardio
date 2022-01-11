const buttons = document.getElementsByClassName('button');
const removeListenerBtn = document.getElementById('remove-btn');

const controller = new AbortController;

for(let element of buttons) {
    element.addEventListener('click', (event) =>{
        console.log(event.target.name, "clicked")
    }, { signal: controller.signal })
}

removeListenerBtn.addEventListener("click", ()=> {
    controller.abort()
})