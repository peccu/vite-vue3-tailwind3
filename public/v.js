(() => {
  const v = 1677680000;
  if (!localStorage.getItem("v")) {
    localStorage.setItem("v", v);
    return;
  }
  if (localStorage.getItem("v") < v) {
    localStorage.setItem("v", v);
    location.reload();
  }
})();