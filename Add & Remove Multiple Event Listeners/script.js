const buttons = document.querySelectorAll('.button');
const removeBtn = document.getElementById('remove-btn');

buttons.forEach(element => {
    element.addEventListener("click", doSomthing)
});

removeBtn.addEventListener("click", removeList)

function removeList(){
    buttons.forEach(element => {
        element.removeEventListener("click", doSomthing)
    });
}

function doSomthing(e){
    console.log(e.target.name, "clicked");
}