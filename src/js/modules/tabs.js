const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
  const header = document.querySelector(headerSelector),
    tab = document.querySelectorAll(tabSelector),
    content = document.querySelectorAll(contentSelector);

  console.log(content);

  function hideTabContent() {
    content.forEach((el) => {
      el.style.display = "none";
    });

    tab.forEach((el) => {
      el.classList.remove(activeClass);
    });
  }

  function showTabContent(item = 0) {
    content[item].style.display = "block";

    tab[item].classList.add(activeClass);
  }

  hideTabContent();
  showTabContent();

  header.addEventListener("click", (e) => {
    const target = e.target;
    if (
      target &&
      (target.classList.contains(tabSelector.replace(/\./, "")) ||
        target.parentNode.classList.contains(tabSelector.replace(/\./, "")))
    ) {
      tab.forEach((item, i) => {
        if (target == item || target.parentNode == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
};

export default tabs;
