module.exports = {
  menuExpander: (lessons, button, lessonCount) => {
    let menu = document.querySelector(lessons);
    if (menu.style.display === "block") {
      menu.style.display = "none";
      document.querySelector(button).textContent = `➤ View ${lessonCount} lessons`
    } else {
      menu.style.display = "block";
      document.querySelector(button).textContent = `▼ Hide ${lessonCount} lessons`
    }
  }
}
