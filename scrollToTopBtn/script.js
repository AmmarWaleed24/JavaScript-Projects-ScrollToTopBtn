const btn = document.querySelector("button");

window.onscroll = () => {
  if (window.scrollY >= 800) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
