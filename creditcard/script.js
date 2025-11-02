(function () {
  const num = document.querySelector('#cardNumber');
  const mm = document.querySelector('#cardMonth');
  const yy = document.querySelector('#cardYear');
  const cvv = document.querySelector('#cardCvv');

  if (num) {
    num.addEventListener('input', (e) => {
      const digits = e.target.value.replace(/\D/g, '').slice(0, 16);
      const grouped = digits.replace(/(\d{4})(?=\d)/g, '$1 ').trim();
      e.target.value = grouped;
    });
  }

  const numericLimit = (el, len) =>
    el && el.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/\D/g, '').slice(0, len);
    });

  numericLimit(mm, 2);
  numericLimit(yy, 2);
  numericLimit(cvv, 4);
})();