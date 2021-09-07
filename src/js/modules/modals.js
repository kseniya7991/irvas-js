const modals = () => {
  function bindModal(trigger, popup, close) {
    if (trigger.length > 1) {
      trigger.forEach((el) => {
        el.addEventListener("click", (e) => {
          if (e.target) {
            e.preventDefault();
          }
          popup.style.display = "block";
          document.body.classList.add("modal-open");
        });
      });
    } else {
      trigger.addEventListener("click", (e) => {
        if (e.target) {
          e.preventDefault();
        }
        popup.style.display = "block";
        document.body.classList.add("modal-open");
      });
    }

    popup.addEventListener("click", (e) => {
      if (e.target == e.currentTarget) {
        popup.style.display = "none";
        document.body.classList.remove("modal-open");
      }
    });

    close.addEventListener("click", (e) => {
      popup.style.display = "none";
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
      console.log("1");
      document.querySelector(selector).style.display = "block";
      document.querySelector(selector).classList.add("modal-open");
    }, time);
  }

  showModalByTime(".popup", 60000);
};

export default modals;