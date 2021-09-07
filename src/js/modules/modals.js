const modals = () => {
  function bindModal(trigger, popup, close) {
    if (trigger.length > 1) {
      trigger.forEach((el) => {
        el.addEventListener("click", (e) => {
          if (e.target) {
            e.preventDefault();
          }
          popup.classList.add("popup_opened");
          document.body.classList.add("modal-open");
        });
      });
    } else {
      trigger.addEventListener("click", (e) => {
        if (e.target) {
          e.preventDefault();
        }
        popup.classList.add("popup_opened");
        document.body.classList.add("modal-open");
      });
    }

    popup.addEventListener("click", (e) => {
      if (e.target == e.currentTarget) {
        popup.classList.remove("popup_opened");
        document.body.classList.remove("modal-open");
      }
    });

    close.addEventListener("click", (e) => {
      popup.classList.remove("popup_opened");
      document.body.classList.remove("modal-open");
    });
  }

  const callEngineerBtn = document.querySelector(".popup_engineer_btn"),
    modalEngineer = document.querySelector(".popup_engineer"),
    modalEngineerClose = document.querySelector(".popup_engineer .popup_close");

  const reqBackCalls = document.querySelectorAll(".phone_link"),
    modalBackCall = document.querySelector(".popup"),
    modalBackCallClose = document.querySelector(".popup .popup_close");

  bindModal(callEngineerBtn, modalEngineer, modalEngineerClose);
  bindModal(reqBackCalls, modalBackCall, modalBackCallClose);

  function showModalByTime(selector, time) {
    setTimeout(() => {
      document.body.classList.add("modal-open");
      document.querySelector(selector).classList.add("popup_opened");
    }, time);
  }

  showModalByTime(".popup", 60000);
};

export default modals;
