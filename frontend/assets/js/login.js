const mainContainer = document.querySelector(".container");

window.onload = async () => {
  const data = await getUser();
  if (data.status === "ERROR") {
    window.location.replace(
      "home.html" + data.data.type === "Planner" ? "?tab=orders" : ""
    );
  } else {
    mainContainer.innerHTML = `
      <div class="sub-container">
        <a href="index.html"><img src="./assets/images/logo.png" alt="Eventopia-Logo" /></a>
        <input type="text" name="name" placeholder="Name" autofocus />
        <input type="password" name="password" placeholder="Password" />
        <button class="btn btn-filled">Login</button>
      </div>
    `;
  }

  const btnLogin = document.querySelector("button");
  const inputBoxes = document.querySelectorAll("input");

  btnLogin.addEventListener("click", () => {
    simpleFetch("/auth/login", "POST", {
      name: inputBoxes[0].value,
      password: inputBoxes[1].value,
    }).then((data) => {
      if (data.status === "SUCCESS") {
        window.location.replace(
          "home.html" + data.data.type === "Planner" ? "?tab=orders" : ""
        );
      }
    });
  });
};
