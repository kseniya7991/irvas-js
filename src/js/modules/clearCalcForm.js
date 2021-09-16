function clearCalcForm() {
  const windowWidth = document.querySelector("#width"),
    windowHeight = document.querySelector("#height"),
    windowProfile = document.querySelectorAll(".checkbox"),
    windowType = document.querySelectorAll("#view_type > option"),
    windowForm = document.querySelectorAll(".balcon_icons_img"),
    windowFormBig = document.querySelectorAll(".big_img > img");

  windowWidth.value = "";
  windowHeight.value = "";
  windowForm.forEach((el) => {
    el.classList.remove("do_image_more");
  });
  windowForm[0].classList.add("do_image_more");
  windowFormBig.forEach((el) => {
    el.style.display = "none";
  });
  windowFormBig[0].style.display = "inline";
  windowType[0].selected = "selected";
  windowProfile.forEach((item) => {
    if (item.getAttribute("type") === "checkbox") {
      item.checked = false;
    }
  });
}

export default clearCalcForm;
