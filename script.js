const text = document.querySelector('input[name=inputText]');

text.addEventListener('input', function () {
  let string = text.value;

  const letterCount = document.querySelector('.total');
  letterCount.innerHTML = string.length;
});
