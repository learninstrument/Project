const leftArrows = document.querySelectorAll('.icon-list .icon-arrow');
const rightArrows = document.querySelectorAll('.icon-list .icon-arrow-right');
const iconItemsContainers = document.querySelectorAll('.icon-items');


leftArrows.forEach((leftArrow, index) => {
  leftArrow.addEventListener('click', () => {
    const iconItemsContainer = iconItemsContainers[index];
    const iconWidth = iconItemsContainer.children[0].offsetWidth;
    iconItemsContainer.scrollLeft -= iconWidth;
    iconItemsContainer.scrollTo({
      left: iconItemsContainer.scrollLeft,
      behavior: 'smooth'
    });
  });
});

rightArrows.forEach((rightArrow, index) => {
  rightArrow.addEventListener('click', () => {
    const iconItemsContainer = iconItemsContainers[index];
    const iconWidth = iconItemsContainer.children[0].offsetWidth;
    iconItemsContainer.scrollLeft += iconWidth;
    iconItemsContainer.scrollTo({
      left: iconItemsContainer.scrollLeft,
      behavior: 'smooth'
    });
  });
});


const bar = document.querySelector(".fa-bars");
const modal = document.querySelector(".modal");

bar.addEventListener("click", function(){
  modal.style.display = modal.style.display === "block" ? "none" : "block";
  });

window.addEventListener("click", function(e){
  let target = e.target;
  if(target === modal){
    
  modal.style.display = modal.style.display === "none"
  }
})

const modalItems = document.querySelector(".sign-modal")
const logBtn = document.querySelector(".logIn");
const SignBtn = document.querySelector(".SignUp");
const closeBtn = document.querySelector(".times");
const body = document.body;

logBtn.addEventListener("click", function(){
  event.preventDefault();
  body.classList.add("body-transparent");
  modalItems.style.display = 'block';
})
closeBtn.addEventListener("click", function(){
  modalItems.style.display = "none";
  body.classList.remove("body-transparent");
})


logBtn.addEventListener("click", function() {
  body.classList.add("body-transparent");
});




