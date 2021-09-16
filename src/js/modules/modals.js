const modals = () => {
  let timeOut;

  function bindModal(
    triggerSelector,
    popupSelector,
    closeSelector,
    closeClickOverlay = true
  ) {
    const trigger = document.querySelectorAll(triggerSelector),
      popup = document.querySelector(popupSelector),
      close = document.querySelector(closeSelector),
      windows = document.querySelectorAll("[data-popup]");

    if (trigger.length > 1) {
      trigger.forEach((el) => {
        el.addEventListener("click", (e) => {
          if (e.target) {
            e.preventDefault();
          }

          windows.forEach((el) => {
            el.classList.remove("popup_opened");
          });

          popup.classList.add("popup_opened");
          clearTimeout(timeOut);
          document.body.classList.add("modal-open");
        });
      });
    } else {
      trigger[0].addEventListener("click", (e) => {
        if (e.target) {
          e.preventDefault();
        }

        windows.forEach((el) => {
          el.classList.remove("popup_opened");
        });

        popup.classList.add("popup_opened");
        clearTimeout(timeOut);
        document.body.classList.add("modal-open");
      });
    }

    popup.addEventListener("click", (e) => {
      if (e.target == e.currentTarget && closeClickOverlay) {
        windows.forEach((el) => {
          el.classList.remove("popup_opened");
        });
        popup.classList.remove("popup_opened");
        document.body.classList.remove("modal-open");
      }
    });

    close.addEventListener("click", (e) => {
      windows.forEach((el) => {
        el.classList.remove("popup_opened");
      });
      popup.classList.remove("popup_opened");
      document.body.classList.remove("modal-open");
    });
  }

  bindModal(
    ".popup_engineer_btn",
    ".popup_engineer",
    ".popup_engineer .popup_close"
  );
  bindModal(".phone_link", ".popup", ".popup .popup_close");
  bindModal(".popup_calc_btn", ".popup_calc", ".popup_calc_close");
  bindModal(
    ".popup_calc_button",
    ".popup_calc_profile",
    ".popup_calc_profile_close",
    false
  );
  bindModal(
    ".popup_calc_profile_button",
    ".popup_calc_end",
    ".popup_calc_end_close",
    false
  );

  function showModalByTime(selector, time) {
    timeOut = setTimeout(() => {
      document.body.classList.add("modal-open");
      document.querySelector(selector).classList.add("popup_opened");
    }, time);
  }

  showModalByTime(".popup", 60000);
};

export default modals;
