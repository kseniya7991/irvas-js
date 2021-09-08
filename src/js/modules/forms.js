const forms = () => {
  const form = document.querySelectorAll(".form"),
    inputs = document.querySelectorAll(".form_input");

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
