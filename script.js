// 1. Input Field and Elements Selection
const startValueInput = document.querySelector(".one_input");
const disabledKeywordremove = document.querySelectorAll(".same-remove");
const hoverActivateremove = document.querySelectorAll(".same-remove");
let compare = document.querySelector(".compare");
let comparebtn = document.querySelectorAll(".comparebtn");
let storeCustomandPrebuilt;
// 2. Software Activation Based on User Input
startValueInput.addEventListener("input", (e) => {
  const storeInputvalue = startValueInput.value.trim();

  if (storeInputvalue !== "") {
    disabledKeywordremove.forEach((e) => e.removeAttribute("disabled"));
    hoverActivateremove.forEach((e) => e.classList.remove("same-remove"));
  } else {
    disabledKeywordremove.forEach((e) => e.setAttribute("disabled", "true"));
    hoverActivateremove.forEach((e) => e.classList.add("same-remove"));
    console.log("Hey buddy, I am empty. Just remove the access, bro!");
  }

  // 3. Fancy Button Highlighting Logic
  let justFancy = document.querySelector(".btn-pre"); // Initially selected button
  let store = justFancy; // Stores the last selected button
  let storeValue = 0;

  const btn_select = document.querySelectorAll(".btn-pre");
  btn_select.forEach((element) => {
    element.addEventListener("click", () => {
      store.style.boxShadow = "none"; // Remove shadow from previously selected button
      store = element; // Update to current button
      store.style.boxShadow = "0 4px 6px rgba(255, 0, 0, 0.8)"; // Apply shadow to the new button
      storeValue = Number(store.querySelector("span").innerText); // Get the button's value
      compare.setAttribute("disabled", "true");
      compare.classList.add("same-remove");
      element.removeAttribute("disabled", "true");
      element.classList.remove("same-remove");
      storeCustomandPrebuilt = storeValue;
    });
  });

  // 4. Bill Generation Logic
  const btn_generate_bill = document.querySelector(".generate-bill"); // Bill generation button

  // Bill Box Selection
  const custom_per = document.querySelector(".custom-tip"); // Input for custom tip
  const no_of_people = document.querySelector(".no-of-people"); // Input for number of people
  const tip_amt = document.querySelector(".tip-amt"); // Tip amount display
  const total_bil = document.querySelector(".total-amt"); // Total bill display
  const per_bill = document.querySelector(".per-bill"); // Per person bill display

  // Variables to store user inputs
  let val_custom;
  let val_per;

  // 5. Event Listeners for Inputs
  custom_per.addEventListener("input", () => {
    val_custom = Number(custom_per.value); // Update custom tip value
    comparebtn.forEach((element) => {
      element.setAttribute("disabled", "true");
      element.classList.add("same-remove");
      compare.removeAttribute("disabled");
      compare.classList.remove("same-remove");
      storeCustomandPrebuilt = val_custom;
    });
  });

  no_of_people.addEventListener("input", () => {
    val_per = Number(no_of_people.value); // Update number of people
  });

  // 6. Generate Bill on Button Click
  btn_generate_bill.addEventListener("click", () => {
    let tip_amt_calculation =
      (storeCustomandPrebuilt / 100) * Number(storeInputvalue);
    let total_bill_calculation = Number(storeInputvalue) + tip_amt_calculation;
    tip_amt.innerText = tip_amt_calculation;
    total_bil.innerText = total_bill_calculation;
    per_bill.innerText = Number(total_bill_calculation / Number(val_per));
  });
  let reset = document.querySelector(".reset-me");
  reset.addEventListener("click", () => {
    startValueInput.value = "";
    custom_per.value = "";
    no_of_people.value = "";
    tip_amt.innerText = "";
    total_bil.innerText = "";
    per_bill.innerText = "";
  });
});
