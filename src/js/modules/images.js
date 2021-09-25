const images = () => {
  const allImages = document.querySelectorAll('.preview'),
        popup = document.querySelector('.popup'),
        workSection = document.querySelector('.works'),
        popupBlock = document.createElement('div'),
        bigImage = document.createElement('img');

  workSection.appendChild(popupBlock)
  popupBlock.className = "popup";
  popupBlock.style.display = "flex";
  popupBlock.style.justifyContent = "center";
  popupBlock.style.alignItems = "center";
  bigImage.style.maxHeight = "80%";
  bigImage.style.maxWidth = "80%";

  popupBlock.appendChild(bigImage)

  allImages.forEach((img) => {
    img.addEventListener('click', (e) => {
      e.preventDefault();
      console.log(e.target.closest("a").href)
      bigImage.src = e.target.closest("a").href;
      popupBlock.classList.add('popup_opened')
    })
  })

  popupBlock.addEventListener('click', (e) => {
    e.preventDefault();
    if(e.currentTarget == e.target) {
      popupBlock.classList.remove("popup_opened")
    }
  })
}

export default images;