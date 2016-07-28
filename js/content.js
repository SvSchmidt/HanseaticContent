(function () {
  let element;

  document.addEventListener('contextmenu', e => element = e.target, true);

  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.startsWith('generate')) {
      let [a, what] = request.split('.');
      let result;

      if (what === 'title') {
        result = window[`RandomTitle${Math.floor(Math.random() * 6) + 1}`]();
      } else if (chance[what]) {
        result = chance[what]();
      } else {
        result = 'An error occured!';
      }

      element.value = result;
    }
  });
}());
