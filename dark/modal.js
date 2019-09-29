//This code was made by the marvelous D4rkness_King (https://github.com/d4rknessking)

let modal = document.createElement('div');
let closeBtn = document.createElement('a');
let modalImg = document.createElement('img');

modal.id = "modal";
closeBtn.id = "modal_close";
modalImg.id = "modal_image";

closeBtn.innerText = "x";

modal.appendChild(closeBtn);
modal.appendChild(modalImg);
document.body.appendChild(modal)

document.querySelectorAll(".modal_content").forEach(
    (r) => {
        r.addEventListener('click', function() {
            document.body.style = "overflow: hidden;"
            modalImg.style.width = "80vh"
            modalImg.src = r.src
            modal.style.top = pageYOffset
            modal.style.display = "flex"
        });
    }
)
closeBtn.addEventListener('click', function() {
    document.body.style = ""
    modalImg.style.width = "0vh"
    modalImg.src = ""
    modal.style.display = "none"
})