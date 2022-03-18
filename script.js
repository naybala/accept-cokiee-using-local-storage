const buttonTag = document.querySelector(".btn");
const parentTag = document.querySelector(".parent");
// const btnClick = document.querySelector('#btnClick');
// const afterClick = document.querySelector('#afterClick');

const openToastAlert = () => {
  parentTag.innerHTML = "";
  const toastAlertContainerTag = document.createElement("div");
  toastAlertContainerTag.classList.add("toastAlertContainer");
  // create toastAlertTextTag
  const toastAlertTextTag = document.createElement("div");
  toastAlertTextTag.append(
    `Hello I'm Toast Alert Testing with pure Js,Jquery and Boostrap..............`
  );
  toastAlertTextTag.classList.add("toastAlertText");

  // create closeButtonTag
  const closeButtonTag = document.createElement("div");
  closeButtonTag.append("Close");
  closeButtonTag.classList.add("btn", "btn-light");

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
    $("#afterClick").removeClass("afterClick");
  });
};

$(document).ready(() => {
  $("#btnClick").click(() => {
    openToastAlert();
    $("#afterClick").addClass("afterClick");
  });
});

