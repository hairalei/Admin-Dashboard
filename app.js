"use strict";

const theme = document.querySelector(".theme");

theme.addEventListener("click", function (e) {
  const name =
    e.target.getAttribute("name") === "moon-outline"
      ? "sunny-outline"
      : "moon-outline";
  e.target.setAttribute("name", name);

  if (name === "sunny-outline") {
    document.querySelector(":root").style.cssText = `
    --light-primary: #7f5af0;
  --light-secondary: #72757e;
  --light-tertiary: #2cb67d;
  --light-white: #16161a;
  --light-black: #fffffe;
    
    `;
  } else {
    document.querySelector(":root").style.cssText = `
    --light-primary: #6246ea;
    --light-secondary: #d1d1e9;
    --light-tertiary: #e45858;
    --light-white: #fffffe;
    --light-black: #2b2c34;
    
    `;
  }
});
