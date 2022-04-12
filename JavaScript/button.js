const hiringApp = {};

hiringApp.button = document.querySelector("#btnHire");
hiringApp.button.addEventListener("click", function () {
  window.location.href = "company.html";
});

hiringApp.findButton = document.querySelector("#btnFind");
hiringApp.findButton.addEventListener("click", function () {
  window.location.href = "jobBoard.html";
});

hiringApp.button = document.querySelector("#findJob");
hiringApp.button.addEventListener("click", function () {
  window.location.href = "jobBoard.html";
});

hiringApp.button = document.querySelector("#bookMeeting");
hiringApp.button.addEventListener("click", function () {
  window.location.href = "company.html";
});
