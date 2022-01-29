module.exports = {
  menuExpander: (lessons, button) => {
    let menu = document.querySelector(lessons);
    if (menu.style.display === "block") {
      menu.style.display = "none";
      document.querySelector(button).textContent = `➤`
    } else {
      menu.style.display = "block";
      document.querySelector(button).textContent = `▼`
    }
  }
}
