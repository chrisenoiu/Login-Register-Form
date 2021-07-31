window.onload = loginField;
const arraySwitcher = ["swLog"];

function loginField() {
  // Input Field "div" created.
  let divParent = document.createElement("div");
  divParent.setAttribute("id", "loginField");
  divParent.classList.add("flex-column");

  // Title
  let divTitle = document.createElement("h3");
  let divTitleText = document.createTextNode("Log in!");
  divTitle.classList.add("spacer");
  divTitle.appendChild(divTitleText);
  divParent.appendChild(divTitle);

  // Input Name
  let inputFieldName = document.createElement("input");
  inputFieldName.classList.add("spacer");
  inputFieldName.setAttribute("id", "nameLogin");
  inputFieldName.setAttribute("type", "text");
  inputFieldName.setAttribute("placeholder", "Username");
  divParent.appendChild(inputFieldName);

  // Input Password
  let inputFieldPass = document.createElement("input");
  inputFieldPass.classList.add("spacer");
  inputFieldPass.setAttribute("id", "passLogin");
  inputFieldPass.setAttribute("type", "text");
  inputFieldPass.setAttribute("placeholder", "Password");
  divParent.appendChild(inputFieldPass);

  // Login Button
  let logButton = document.createElement("button");
  let logButtonText = document.createTextNode("Login");
  logButton.setAttribute("id", "loginB");
  logButton.classList.add("spacer");
  logButton.appendChild(logButtonText);
  divParent.appendChild(logButton);

  // Field Switcher
  let regSwitcher = document.createElement("p");
  regSwitcher.classList.add("spacer");
  let regSwitcherA = document.createTextNode("Create one ");
  regSwitcher.appendChild(regSwitcherA);
  let regSwitcherHref = document.createElement("a");
  regSwitcherHref.setAttribute("href", "#");
  regSwitcher.appendChild(regSwitcherHref);
  let regSwitcherB = document.createTextNode("here.");
  regSwitcherHref.appendChild(regSwitcherB);
  divParent.appendChild(regSwitcher);

  // Appent to Main Container
  let mainContainer = document.querySelector("#mainContainer");
  mainContainer.appendChild(divParent);

  // Login Button
  let registerButton = document.querySelector("#loginB");

  // Actions
  regSwitcherHref.addEventListener("click", fieldSwitch);
  registerButton.addEventListener("click", verifyAcc);
}

function registerField() {
  // Input Field "div" created.
  let divParent = document.createElement("div");
  divParent.setAttribute("id", "registerField");
  divParent.classList.add("flex-column");

  // Title
  let divTitle = document.createElement("h3");
  let divTitleText = document.createTextNode("Create Account");
  divTitle.classList.add("spacer");
  divTitle.appendChild(divTitleText);
  divParent.appendChild(divTitle);

  // Input Name
  let inputFieldName = document.createElement("input");
  inputFieldName.classList.add("spacer");
  inputFieldName.setAttribute("id", "nameInput");
  inputFieldName.setAttribute("type", "text");
  inputFieldName.setAttribute("placeholder", "Username");
  divParent.appendChild(inputFieldName);

  // Input Password
  let inputFieldPass = document.createElement("input");
  inputFieldPass.classList.add("spacer");
  inputFieldPass.setAttribute("id", "passInput");
  inputFieldPass.setAttribute("type", "text");
  inputFieldPass.setAttribute("placeholder", "Password");
  divParent.appendChild(inputFieldPass);

  // Register Button
  let regButton = document.createElement("button");
  let regButtonText = document.createTextNode("Register");
  regButton.setAttribute("id", "registerB");
  regButton.classList.add("spacer");
  regButton.appendChild(regButtonText);
  divParent.appendChild(regButton);

  // Field Switcher
  let regSwitcher = document.createElement("p");
  regSwitcher.classList.add("spacer");
  let regSwitcherA = document.createTextNode("Go back to ");
  regSwitcher.appendChild(regSwitcherA);
  let regSwitcherHref = document.createElement("a");
  regSwitcherHref.setAttribute("href", "#");
  regSwitcher.appendChild(regSwitcherHref);
  let regSwitcherB = document.createTextNode("login.");
  regSwitcherHref.appendChild(regSwitcherB);
  divParent.appendChild(regSwitcher);

  // Appent to Main Container
  let mainContainer = document.querySelector("#mainContainer");
  mainContainer.appendChild(divParent);

  // Register Button.
  let registerButton = document.querySelector("#registerB");

  // Actions
  regSwitcherHref.addEventListener("click", fieldSwitch);
  registerButton.addEventListener("click", registerAcc);
}

// Register Account
function registerAcc() {
  let accountName = document.querySelector("#nameInput");
  let accountPassword = document.querySelector("#passInput");

  if (accountName.value == "" && accountPassword.value == "") {
    alert("Please complete the boxes");
  } else {
    window.localStorage.setItem("myAccountName", accountName.value);
    window.localStorage.setItem("myAccountPassword", accountPassword.value);
    document.querySelector("#registerField").remove();
    regSuccess();
  }
}

// Register Successful

function regSuccess() {
  // Input Field "div" created.
  let divParent = document.createElement("div");
  divParent.setAttribute("id", "successField");
  divParent.classList.add("flex-column");

  // Title
  let divTitle = document.createElement("h1");
  let divTitleText = document.createTextNode("Congrats!");
  divTitle.classList.add("spacer");
  divTitle.appendChild(divTitleText);
  divParent.appendChild(divTitle);

  // subTitle
  let divSubTitle = document.createElement("h3");
  let divSubTitleText = document.createTextNode(
    "You've registred with success!"
  );
  divSubTitle.classList.add("spacer");
  divSubTitle.appendChild(divSubTitleText);
  divParent.appendChild(divSubTitle);

  // Field Switcher
  let regSwitcher = document.createElement("p");
  regSwitcher.classList.add("spacer");
  let regSwitcherA = document.createTextNode("Go back to ");
  regSwitcher.appendChild(regSwitcherA);
  let regSwitcherHref = document.createElement("a");
  regSwitcherHref.setAttribute("href", "#");
  regSwitcher.appendChild(regSwitcherHref);
  let regSwitcherB = document.createTextNode("Login");
  regSwitcherHref.appendChild(regSwitcherB);
  divParent.appendChild(regSwitcher);

  // Appent to Main Container
  let mainContainer = document.querySelector("#mainContainer");
  mainContainer.appendChild(divParent);

  //Actions
  regSwitcherHref.addEventListener("click", successSwitch);
}

function logSuccess() {
  // Input Field "div" created.
  let divParent = document.createElement("div");
  divParent.setAttribute("id", "loginSuccess");
  divParent.classList.add("flex-column");

  // Title
  let divTitle = document.createElement("h1");
  let divTitleText = document.createTextNode("Welcome!");
  divTitle.classList.add("spacer");
  divTitle.appendChild(divTitleText);
  divParent.appendChild(divTitle);

  // subTitle
  let divSubTitle = document.createElement("h3");
  let divText = document.createElement("p");
  let divSubTitleText1 = document.createTextNode(
    "You've reached the login page!"
  );
  let divSubTitleText2 = document.createTextNode(
    "There's nothing to see here yet."
  );
  divSubTitle.classList.add("spacer");
  divSubTitle.appendChild(divSubTitleText1);
  divText.appendChild(divSubTitleText2);
  divSubTitle.appendChild(divText);
  divParent.appendChild(divSubTitle);

  // Appent to Main Container
  let mainContainer = document.querySelector("#mainContainer");
  mainContainer.appendChild(divParent);
}

// Login/Register Switch
function fieldSwitch() {
  if (arraySwitcher[0] === "swLog") {
    document.querySelector("#loginField").remove();
    registerField();
    arraySwitcher.pop();
    arraySwitcher.push("swReg");
  } else if (arraySwitcher[0] === "swReg") {
    document.querySelector("#registerField").remove();
    loginField();
    arraySwitcher.pop();
    arraySwitcher.push("swLog");
  }
}

// Success to Login Switch
function successSwitch() {
  console.log("Switched to Login from Succes Register!");
  if (arraySwitcher[0] === "swReg") {
    document.querySelector("#successField").remove();
    loginField();
    arraySwitcher.pop();
    arraySwitcher.push("swLog");
    console.log(arraySwitcher[0]);
  }
}

// Credentials Validation

function verifyAcc() {
  let myAccount = window.localStorage.getItem("myAccountName");
  let myPassword = window.localStorage.getItem("myAccountPassword");

  let verifyAccount = document.querySelector("#nameLogin").value;
  let verifyPassword = document.querySelector("#passLogin").value;

  function resetInput() {
    document.querySelector("#nameLogin").value = "";
    document.querySelector("#passLogin").value = "";
  }

  if (verifyAccount === myAccount && verifyPassword === myPassword) {
    console.log("Credentials match");
    document.querySelector("#loginField").remove();
    logSuccess();
  } else {
    console.log("Credentials don't match!");
    resetInput();
  }
}
