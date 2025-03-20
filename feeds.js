"use strict";
const likeButton = document.querySelector(".icon");

likeButton.addEventListener("click", () => {
  if (!likeButton.classList.contains("icon-color")) {
    likeButton.classList.add("icon-color");
  } else {
    likeButton.classList.remove("icon-color");
  }
});
const textArea = document.getElementById("comment");

const comment = document.querySelector(".js-comment");
comment.addEventListener("click", () => {
  if (comment) {
    textArea.style.display = "block";
  }
});

document
  .getElementById("comment")
  .addEventListener("keydown", function (event) {
    console.log(`key pressed: ${event.key}`);
    if (event.key === "Enter") {
      document.querySelector(".display-comment").innerHTML = textArea.value;
      textArea.value = "";
    }
  });
