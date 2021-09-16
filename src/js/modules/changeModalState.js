import checkNumInputs from "./checkNumInputs";

function changeModalState(state) {
  const windowForm = document.querySelectorAll(".balcon_icons_img"),
    windowWidth = document.querySelectorAll("#width"),
    windowHeight = document.querySelectorAll("#height"),
    windowType = document.querySelectorAll("#view_type"),
    windowProfile = document.querySelectorAll(".checkbox"),
    nextBtn = document.querySelector(".popup_calc_button");

  checkNumInputs("#width");
  checkNumInputs("#height");

  function bindActionToEl(action, el, prop) {
    el.forEach((item, i) => {
      item.addEventListener(action, () => {
        switch (item.nodeName) {
          case "SPAN":
            state[prop] = i;
            break;
          case "INPUT":
            if (item.getAttribute("type") === "checkbox") {
              i === 0 ? (state[prop] = "Холодное") : (state[prop] = "Теплое");
              el.forEach((box, j) => {
                box.checked = false;
                if (i === j) {
                  box.checked = true;
                }
              });
            } else {
              state[prop] = item.value;
            }

            validateCalcForm(state);

            break;
          case "SELECT":
            state[prop] = item.value;
            break;
        }
        console.log(state);
      });
    });
  }

  bindActionToEl("click", windowForm, "form");
  bindActionToEl("input", windowWidth, "width");
  bindActionToEl("input", windowHeight, "height");
  bindActionToEl("change", windowType, "type");
  bindActionToEl("change", windowProfile, "profile");

  function validateCalcForm(state) {
    console.log(state.width);
    if (state.width === "" || state.height === "") {
      nextBtn.setAttribute("disabled", true);
    } else {
      nextBtn.removeAttribute("disabled");
    }
    /*     if ("width" in state && "height" in state && ) {
      console.log("ширину ввели");
    } else {
      console.log("ширину не ввели");
    } */
  }

  validateCalcForm(state);
}

export default changeModalState;
