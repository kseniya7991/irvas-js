function checkNumInputs(inputSelector) {
  const input = document.querySelectorAll(inputSelector);

  input.forEach((el) => {
    el.addEventListener("input", () => {
      el.value = el.value.replace(/\D/, "");
    });
  });
}

export default checkNumInputs;
