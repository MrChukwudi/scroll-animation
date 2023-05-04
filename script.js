let boxes = document.querySelectorAll(".box");
window.addEventListener("scroll", checkBoxes); //Mind you, specifying onScroll means that this only kick into play when you scroll, even though you can use onLoad
window.addEventListener("load", checkBoxes); // I used onLoad to load the first elements that satisfies the criteria for show.

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4.5; //Setting the point on the screen where the transition class of show will kick into effect

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top; // Using DomRect object to get the top height of the element
    const boxBottom = box.getBoundingClientRect().bottom;
    if (boxTop < triggerBottom) {
      // Once the top of the element is above the height on the screen that we chose for the transition to happen, add .show class to the element.
      box.classList.add("show");
    } else if (boxTop > triggerBottom) {
      // Once the top of the element is below the height on the screen that we chose for the transition to happen, remove .show class to the element.
      box.classList.remove("show");
    }
  });
}
