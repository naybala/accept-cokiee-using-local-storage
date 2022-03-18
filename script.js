const buttonTag = document.querySelector(".btn");
const parentTag = document.querySelector(".parent");

const openToastAlert = () => {
  parentTag.innerHTML = "";
  const toastAlertContainerTag = document.createElement("div");
  toastAlertContainerTag.classList.add("toastAlertContainer");
  // create toastAlertTextTag
  const toastAlertTextTag = document.createElement("div");
  toastAlertTextTag.append(
    `Out Wesbsite Using Cookiee......lorem bar nyar thar ya kar...`
  );
  toastAlertTextTag.classList.add("toastAlertText");

  // create closeButtonTag
  const closeButtonTag = document.createElement("div");
  closeButtonTag.append("Accept");
  closeButtonTag.classList.add("btn", "btn-sm", "btn-light");

  // append toastAlertTextTag, closeButtonTag to toastAlertContainerTag
  toastAlertContainerTag.append(toastAlertTextTag, closeButtonTag);

  // append toastAlertContainerTag to parentTag
  parentTag.append(toastAlertContainerTag);
  parentTag.style.bottom = `-${parentTag.offsetHeight}px`;
  setTimeout(() => {
    parentTag.style.bottom = `0px`;
  }, 100);

  // Attach event listener on closeButtonTag
  closeButtonTag.addEventListener("click", () => {
    localStorage.setItem("accepted", "1");
    parentTag.style.bottom = `-${parentTag.offsetHeight}px`;
  });
};

window.addEventListener('load', () => {
  const accept = localStorage.getItem('accepted');
  if (accept != "1") {
    openToastAlert();
  }
})

