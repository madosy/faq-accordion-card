const accordions = document.body.querySelectorAll(".accordion");
accordions.forEach((item) => item.addEventListener("click", showContent));

function showContent(e) {
  const accordion = e.target.closest(".accordion");
  const description = accordion.querySelector(".description");
  e.target.closest(".accordion").classList.toggle("open");

  if (accordion.classList.contains("open")) {
    description.style.height = description.scrollHeight + 20 + "px";
    description.style.maxHeight = description.scrollHeight + 20 + "px";
  } else {
    description.style.maxHeight = null;
  }
}
