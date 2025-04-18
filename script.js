window.addEventListener("scroll", () => {
    const search = document.getElementById("search");
    if(window.scrollY > 10.5){
        search.classList.add("compact");
    } else{
        search.classList.remove("compact");
    }
});

window.addEventListener("scroll", () => {
    const list = document.getElementById("list");
    if(window.scrollY > 10.5){
        list.classList.add("collapse");
    } else{
        list.classList.remove("collapse");
    }
});

const scrollable = document.getElementById("slides");
const scrollLeftBtn = document.getElementById("lft_nxt");
const scrollRightBtn = document.getElementById("nxtBtn");

function scrollLeft() {
    scrollable.scrollBy({left: -300, behavior: "smooth"});
    updateButtons();
}

function scrollRight() {
    scrollable.scrollBy({left: 300, behavior: "smooth"});
    updateButtons();
}

function updateButtons() {
    setTimeout(() => {
      scrollLeftBtn.style.display = scrollable.scrollLeft > 0 ? 'block' : 'none';
    }, 400);
}

scrollable.addEventListener('scroll', updateButtons);
