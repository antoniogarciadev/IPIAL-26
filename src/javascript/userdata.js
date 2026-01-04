const users = [
  {
    userId: 12345678,
    name: "Alee",
    course: "informatica",
    media: 18,
    status: "Aprovado",
    userCode: "candalee12345",
  },
  {
    userId: 12574378,
    name: "Wiu",
    course: "Electronica",
    media: 18,
    status: "Pendente",
    userCode: "candwiu12345",
  },
  {
    userId: 1244448,
    name: "Teto",
    course: "Electronica",
    media: 18,
    status: "Reprovado",
    userCode: "candteto12345",
  },
];

// const body = document.querySelector("body");

// body.addEventListener("load", loadData);
// var users = [];

// function loadData() {
//   if(  localStorage.getItem("userData")){
//      users = JSON.parse(localStorage.getItem("userData"));
//     }
//     else{
//       localStorage.setItem("usersData", users1);
//       users = JSON.parse(localStorage.getItem("userData"));
//   }

// }

const btnsubmit = document.querySelector("#btnsub");

btnsubmit.addEventListener("click", validadeData);

function validadeData() {
  const userInput = document.querySelector("#usercode").value;
  //Se existe algum valor dentro do input
  if (userInput == "") {
    alert("Por favor, insira o codigo no formulário");
  } else {
    //Verifica se existe usuário na base de dados com o código inserido no input
    //Retorna true se existir e false se não existir
    const userExist = users.some((user) => user.userCode == userInput);
    console.log(userExist);

    if (userExist) {
      window.location.href = "#table";
      const user = users.find((user) => {
        return user.userCode == userInput;
      });

      console.log(`
        ${user.userId}
        ${user.name}
        ${user.course}
        ${user.media}
        ${user.status}
        ${user.userCode}
      `);
      // Chama a função que coloca os dados na tabela
      pushData(user);
    } else {
      alert("Código não encontrado! tente novamente");
    }
  }
}

function pushData(user) {
  const name = document.querySelector("#name");
  const userId = document.querySelector("#userId");
  const course = document.querySelector("#course");
  const media = document.querySelector("#media");
  const status = document.querySelector("#status");

  name.innerHTML = user.name;
  userId.innerHTML = user.userId;
  course.innerHTML = user.course;
  media.innerHTML = user.media;
  status.innerHTML = user.status;

  status.style.color = getStatusColor(user.status);
}

//Função que retorna a uma cor, dependendo do tipo de status
function getStatusColor(status) {
  const colors = {
    aprovado: "#26f753",
    reprovado: "#f76126",
    pendente: "#f7d826",
  };

  return colors[status.toLowerCase()] || "gray";
}
