
function selectUser() {
  let user = document.getElementById("user").value;
  console.log(user);
}

function sendMassage() {
  let massage = document.getElementById("massegeTxt").value;
  // alert(massage);

  let user = document.getElementById("user").value;
  if (user === "Me") {
    console.log(user);
    
    document.getElementById("massageDisplyUser").innerHTML += `
    <li class="d-flex justify-content-end mt-2">
        <div class="bg-primary text-white rounded-4 p-2 me-2 message-bubble">
            <p class="mb-0 fs-6 text-break" >${massage}</p>
        </div>
        <div class="d-flex flex-row align-items-center">
            <img src="img/prof_01.jpg" class="rounded-circle" width="40">
        </div>
    </li>`;
  } else if (user === "Friend") {
    console.log(user);
    document.getElementById("massageDisplyUser").innerHTML += `
    <li class="d-flex justify-content-start mt-2">
        <div class="d-flex flex-row align-items-center">
            <img src="img/prof_02.jpg" class="rounded-circle" width="40">
        </div>    
        <div class="bg-primary text-white rounded-4 p-2 me-2 message-bubble">
            <p class="mb-0 fs-6 text-break" >${massage}</p>
        </div>    
    </li> `;
  } else {
    alert("Please select a user and enter a message.");
  }
  document.getElementById("massegeTxt").value = "";
}

