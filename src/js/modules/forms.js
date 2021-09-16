import changeModalState from "./changeModalState";
import checkNumInputs from "./checkNumInputs";
import clearCalcForm from "./clearCalcForm";

const forms = (state) => {
  const form = document.querySelectorAll(".form"),
    inputs = document.querySelectorAll(".form_input");

  checkNumInputs('input[name="user_phone"]');

  const message = {
    loading: "Загрузка...",
    success: "Спасибо! Скоро с Вами свяжемся.",
    failure: "Что-то пошло не так. Повторите попытку.",
  };

  //Отправление запроса на сервер
  const postData = async (url, data) => {
    document.querySelector(".status").textContent = message.loading;
    let res = await fetch(url, {
      method: "POST",
      body: data,
    });
    return await res.text();
  };

  //Очистка инпутов
  const clearInputs = () => {
    clearCalcForm();
    let newState = { form: 0, width: "", height: "", type: "tree" };
    changeModalState(newState);
    inputs.forEach((el) => {
      el.value = "";
    });
  };

  //Обработка формы
  form.forEach((el) => {
    el.addEventListener("submit", (e) => {
      e.preventDefault();

      const statusMessage = document.createElement("div");
      statusMessage.classList.add("status");
      el.appendChild(statusMessage);

      const formData = new FormData(el);

      if (el.getAttribute("data-calc") === "end") {
        setTimeout(() => {
          const endCalcForm = document.querySelector(".popup_calc_end");
          endCalcForm.classList.remove("popup_opened");
          document.body.classList.remove("modal-open");
        }, 1000);

        for (let key in state) {
          formData.append(key, state[key]);
        }
      }

      postData("assets/server.php", formData)
        .then((res) => {
          console.log(res);
          statusMessage.textContent = message.success;
        })
        .catch(() => {
          statusMessage.textContent = message.failure;
        })
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessage.remove();
          }, 3000);
        });
    });
  });
};

export default forms;
