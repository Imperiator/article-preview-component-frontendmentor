let share = document.querySelector('.share');
let social = document.querySelector('.social');

document.body.addEventListener("click", function(e){
    if(!e.target.className.includes("share-content")){
        social.style.display = "none";
    }
})

share.addEventListener("click", open);

function open(){
social.style.display = "flex";
}