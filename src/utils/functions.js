export function scrollElementHorizontally(elementId, index) {
   const element = document.getElementById(elementId);
   element.style.scrollBehavior = "smooth";
   element.scrollLeft += index;
}
