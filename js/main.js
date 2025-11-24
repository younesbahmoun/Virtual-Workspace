// import { employees } from "../data/eployees.js";
// import { roomsConfig } from "../data/rooms.js";
const employees = [
  {
    id: uid(),
    name: "Sara Manager",
    role: "manager",
    photo: "https://i.pravatar.cc/150?img=5",
    email: "sara@example.com",
    phone: "0660333444",
    exp: [],
    location: null,
  },
  {
    id: uid(),
    name: "Hamid Tech",
    role: "it",
    photo: "https://i.pravatar.cc/150?img=10",
    email: "hamid@example.com",
    phone: "0660555666",
    exp: [
      {
        company: "ITCorp",
        position: "Sysadmin",
        startDate: "2022-01-10",
        endDate: "2022-06-01",
      },
    ],
    location: null,
  },
  {
    id: uid(),
    name: "Karim Security",
    role: "security",
    photo: "https://i.pravatar.cc/150?img=15",
    email: "karim@example.com",
    phone: "0660777888",
    exp: [
      {
        company: "SecurCorp",
        position: "Guard",
        startDate: "2021-05-01",
        endDate: "2022-01-10",
      },
    ],
    location: null,
  },

  {
    id: uid(),
    name: "Fatima Cleaning",
    role: "cleaning",
    photo: "https://i.pravatar.cc/150?img=8",
    email: "fatima@example.com",
    phone: "0660999000",
    exp: [
      {
        company: "CleanPro",
        position: "Cleaner",
        startDate: "2020-02-01",
        endDate: "2021-07-23",
      },
    ],
    location: null,
  },
  {
    id: uid(),
    name: "Ali Employee",
    role: "other",
    photo: "https://i.pravatar.cc/150?img=20",
    email: "ali@example.com",
    phone: "0660111222",
    exp: [
      {
        company: "TechSoft",
        position: "Developer",
        startDate: "2019-01-01",
        endDate: "2021-01-01",
      },
    ],
    location: null,
  },
  {
    id: uid(),
    name: "Guest Person",
    role: "other",
    photo: "https://i.pravatar.cc/150?img=25",
    email: "guest@example.com",
    phone: "0660333444",
    exp: [],
    location: null,
  },
  {
    id: uid(),
    name: "Younes Manager",
    role: "manager",
    photo: "https://i.pravatar.cc/150?img=12",
    email: "younes@example.com",
    phone: "0660111222",
    exp: [
      {
        company: "WorkSphere",
        position: "Lead Dev",
        startDate: "2019-03-01",
        endDate: "2022-03-01",
      },
    ],
    location: null,
  },
  {
    id: uid(),
    name: "Lina Reception",
    role: "reception",
    photo: "https://i.pravatar.cc/150?img=3",
    email: "lina@example.com",
    phone: "0660555666",
    exp: [
      {
        company: "Hotel Plaza",
        position: "Receptionist",
        startDate: "2020-04-01",
        endDate: "2022-01-01",
      },
    ],
    location: null,
  },
  {
    id: uid(),
    name: "Tech IT",
    role: "it",
    photo: "https://i.pravatar.cc/150?img=7",
    email: "tech@example.com",
    phone: "0660777888",
    exp: [
      {
        company: "DataCenter",
        position: "Network Admin",
        startDate: "2018-01-01",
        endDate: "2022-01-01",
      },
    ],
    location: null,
  },
  {
    id: uid(),
    name: "Guard Security",
    role: "security",
    photo: "https://i.pravatar.cc/150?img=18",
    email: "guard@example.com",
    phone: "0660999000",
    exp: [
      {
        company: "SafeGuard",
        position: "Security Agent",
        startDate: "2017-01-01",
        endDate: "2022-01-01",
      },
    ],
    location: null,
  },
  {
    id: uid(),
    name: "Regular Employee",
    role: "other",
    photo: "https://i.pravatar.cc/150?img=30",
    email: "employee@example.com",
    phone: "0660111333",
    exp: [
      {
        company: "BusinessCorp",
        position: "Analyst",
        startDate: "2019-01-01",
        endDate: "2021-01-01",
      },
    ],
    location: null,
  },

  {
    id: uid(),
    name: "Doc Manager",
    role: "manager",
    photo: "https://i.pravatar.cc/150?img=22",
    email: "doc@example.com",
    phone: "0660444555",
    exp: [
      {
        company: "DocStore",
        position: "Archivist",
        startDate: "2018-01-01",
        endDate: "2022-01-01",
      },
    ],
    location: null,
  },
];
const roomsConfig = {
  conference: {
    name: "Salle de conference",
    capacity: 8,
    required: false,
    allowedRoles: ["manager", "cleaning", "other"],
  },
  reception: {
    name: "Reception",
    capacity: 2,
    required: true,
    allowedRoles: ["manager", "reception", "cleaning"],
  },
  server: {
    name: "Salle des serveurs",
    capacity: 3,
    required: true,
    allowedRoles: ["manager", "it", "cleaning"],
  },
  security: {
    name: "Salle de securite",
    capacity: 2,
    required: true,
    // cleaning pour maintenance
    allowedRoles: ["manager", "security", "cleaning"],
  },
  staff: {
    name: "Salle du personnel",
    capacity: 10,
    required: false,
    // Tous autorisés
    allowedRoles: [
      "manager",
      "reception",
      "it",
      "security",
      "cleaning",
      "other",
    ],
  },
  archives: {
    name: "Salle darchives",
    capacity: 2,
    required: true,
    // NO cleaning, NO other
    allowedRoles: ["manager"],
  },
};
// open and close modale add person
function openAddEmployeModal() {
  document.getElementById("add-modal").classList.add("active");
}

function closeAddEmployeModal() {
  document.getElementById("add-modal").classList.remove("active");
  document.getElementById("add-form").reset();
  document.getElementById("photo-preview").innerHTML = "";
  document.getElementById("experiences-container").innerHTML = "";
}

document.getElementById("btn-add-employee").addEventListener("click", () => {
  openAddEmployeModal();
});

document.getElementById("btn-cancel-add-employe").addEventListener("click", () => {
    closeAddEmployeModal();
});

document.getElementById("btn-close-modale-add-employe").addEventListener("click", () => {
    closeAddEmployeModal();
});

function closeSelectorModal() {
  document.getElementById("selector-modal").classList.remove("active");
}

document.getElementById("btn-close-modal-selector").addEventListener("click", () => {
    closeSelectorModal();
});

function openProfileModal() {
  document.getElementById("profile-modal").classList.add("active");
}

function closeProfileModal() {
  document.getElementById("profile-modal").classList.remove("active");
}

document.getElementById("btn-close-profile-modale").addEventListener("click", () => {
    closeProfileModal();
});

// Remove experience field
function removeExperience(expId) {
  const expElement = document.getElementById(expId);
  if (expElement) {
    expElement.remove();
  }
}

document.getElementById("btn-add-exp").addEventListener("click", () => {
  addExperienceField();
  // document.getElementById("experiencesContainer").appendChild(document.querySelector(".experience-item").cloneNode(true));
});

// document.getElementById("unassigned-list").addEventListener("click", event => {
//   console.log(event.currentTarget); // Toujours #unassigned-list (l'écouteur)
//   // console.log(event.target.closest(".employee-card").dataset.employeId); // L'élément spécifique cliqué

// Add experience field
function addExperienceField() {
  const container = document.getElementById("experiences-container");

  const expDiv = document.createElement("div");
  expDiv.className = "experience-item";
  expDiv.innerHTML = `
        <button type="button" class="btn-remove-exp" onclick="this.parentElement.remove()">×</button>
        <div class="experience-row">
            <input type="text" placeholder="Entreprise *" class="exp-company" required>
            <input type="text" placeholder="Poste *" class="exp-position" required>
        </div>
        <div class="experience-dates">
            <input type="date" class="exp-date-debut" placeholder="Date début *" required>
            <input type="date" class="exp-date-fin" placeholder="Date fin *" required>
        </div>
    `;

  container.appendChild(expDiv);
}

// validate form
function validateExperiences() {
  const expItems = document.querySelectorAll(".experience-item");

  for (let exp of expItems) {
    const company = exp.querySelector(".exp-company").value.trim();
    const position = exp.querySelector(".exp-position").value.trim();
    const startDate = exp.querySelector(".exp-date-debut").value;
    const endDate = exp.querySelector(".exp-date-fin").value;

    // Verification champs vides
    if (
      company === "" ||
      position === "" ||
      startDate === "" ||
      endDate === ""
    ) {
      alert("Veuillez remplir tous les champs des experiences.");
      return false;
    }

    // Verification dates
    if (new Date(startDate) > new Date(endDate)) {
      alert("La date de debut doit etre avant la date de fin.");
      return false;
    }
  }

  return true;
}

function validateForm() {
  const name = document.getElementById("emp-name").value.trim();
  const email = document.getElementById("emp-email").value.trim();
  const phone = document.getElementById("emp-phone").value.trim();
  const photo = document.getElementById("emp-photo").value.trim();

  const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]{2,40}$/;
  const emailRegex = /^[\w.-]+@[\w.-]+\.\w{2,}$/;
  const phoneRegex = /^(05|06|07)\d{8}$/;
  // const photoRegex = /^https?:\/\/.+\.(png|jpg|jpeg|gif|webp)$/i;
  const photoRegex = /^http/i;

  if (!nameRegex.test(name)) {
    alert("Nom invalide !");
    return false;
  }

  if (!emailRegex.test(email)) {
    alert("Email invalide !");
    return false;
  }

  if (phone !== "" && !phoneRegex.test(phone)) {
    alert("Téléphone marocain invalide !");
    return false;
  }

  if (photo !== "" && !photoRegex.test(photo)) {
    alert("Lien photo invalide !");
    return false;
  }

  if (!validateExperiences()) {
    return false;
  }

  return true;
}

// /* utility */
function uid() {
  return "id-" + Math.random().toString(36).slice(2, 9);
}

// add experience
function experiencesEmploye() {
  const experiencesContainer = document.getElementById("experiences-container");
  if (experiencesContainer.childElementCount === 0) {
    console.log("yes");
    return null;
  }
  const experienceItems = document.querySelectorAll(".experience-item");
  const experienceEmploye = [];

  for (let i = 0; i < experienceItems.length; i++) {
    const item = experienceItems[i];

    // Get inputs from the CURRENT experience item
    const company = item.querySelector(".exp-company").value;
    const position = item.querySelector(".exp-position").value;
    const startDate = item.querySelector(".exp-date-debut").value;
    const endtDate = item.querySelector(".exp-date-fin").value;

    // Only add if at least one field has data
    // if (company || position || duration) {
    const exp = {
      post: position,
      company: company,
      startDate: startDate,
      endDate: endtDate,
    };
    experienceEmploye.push(exp);
    // }
  }

  return experienceEmploye;
}

// Create Card Employe 
function createEmployeeCard(employee) {
  return `
    <div class="employee-card" data-employee-id="${employee.id}" data-role="${employee.role}">
      <div class="employee-card-content">
        <img src="${employee.photo}" class="employee-avatar" alt="Profile picture of ${employee.name}">
        <div class="employee-info">
          <h3>${employee.name}</h3>
          <p>${employee.role}</p>
        </div>
      </div>
    </div>
  `;
}

// add employ in non assigne
function renderUnassigned(employe) {
  const list = document.getElementById("unassigned-list");
  list.innerHTML += createEmployeeCard(employe);
}

// 1) submit data (click Ajouter un employe)
document.getElementById("add-form").addEventListener("submit", (event) => {
  event.preventDefault();

  // if (!validateForm()) return;

  const employe = {
    id: uid(),
    name: document.getElementById("emp-name").value,
    role: document.getElementById("emp-role").value,
    photo: document.getElementById("emp-photo").value,
    email: document.getElementById("emp-email").value,
    phone: document.getElementById("emp-phone").value,
    exp: experiencesEmploye(),
    location: null,
  };

  renderUnassigned(employe);
  employees.push(employe);
  console.log(employees);

  closeAddEmployeModal();
});

// data details
function showProfile(employe) {
  const content = document.getElementById("profile-content");
  // Vider le contenu d'abord
  content.innerHTML = "";

  // Header du profil
  content.innerHTML += `
    <div style="text-align:center;">
      <img src="${employe.photo}" class="profile-avatar">
      <div class="profile-name">${employe.name}</div>
      <div class="profile-role">${employe.role}</div>
    </div>
    <div class="info-item">
      <h4>Email</h4>
      <p>${employe.email}</p>
    </div>
    <div class="info-item">
      <h4>Téléphone</h4>
      <p>${employe.phone}</p>
    </div>
    <div class="info-item">
      <h4>Localisation</h4>
      <p>${employe.location ? employe.location : "Non assigne"}</p>
    </div>
    <div class="experiences-display">
      <h4>Experiences</h4>
  `;

  // Boucle pour les expériences
  if (employe.exp && employe.exp.length > 0) {
    for (let i = 0; i < employe.exp.length; i++) {
      const experience = employe.exp[i];
      content.innerHTML += `
        <div class="exp-item">
          <h5>company : ${experience.company}</h5>
          <p>position : ${experience.position}</p>
          <p>Start Date : ${experience.startDate}</p>
          <p>End Date : ${experience.endDate}</p>
        </div>
      `;
    }
  } else {
    content.innerHTML += `<p>Aucune experience</p>`;
  }

  // Fermer la div experiences-display
  content.innerHTML += `</div>`;
}

// 2) page details (click Employe non Assigne)
document.getElementById("unassigned-list").addEventListener("click", (event) => {
    const employe = event.target.closest(".employee-card");
    if (employe) {
      showProfile(employees[searchEmploye(employe.dataset.employeeId)]);
      openProfileModal();
    }
});


// function filterByRole (role) {
//   const employe = [];
//   for (let i = 0; i < employees.length; i++) {
//     if (employees[i].role === role) {
//       employe.push(employees[i]);
//     }
//   }
//   return employe;
// }


// function filterByRole (role) {
//   const employe = [];
//   for (let i = 0; i < employees.length; i++) {
//       for (const room of roomsConfig) {
//         for (let j = 0; roomsConfig[room].allowedRoles.length; j++) {
//             if (roomsConfig[room].allowedRoles[j] === role) {
//                 employe.push(room);
//                 break;
//             }
//         }
//       }
//        for (let j = 0; j < roomsConfig[roomName].allowedRoles.length; j++) {
//         if (employees[i].role === roomsConfig[roomName].allowedRoles[j]) {
//             employe.push(employees[i]);
//         }
//       }
//   }
//   return employe;
// }
// console.log(filterByRole("conference", "cleaning"));

// function test () {
//     const room = document.getElementById("zone-server");
//     room.style.background = "rgba(52, 152, 219, 0.15)";
// }

// affiche only role allowed inside #selector-list
function openZoneSelector(roomsId) {
  // document.getElementById("selector-modal").classList.add("active");
  const list = document.getElementById("selector-list");
  list.innerHTML = "";
  // let isEmployeFound = null;
  for (let i = 0; i < employees.length; i++) {
    if (!employees[i].location) {
      for (let j = 0; j < roomsConfig[roomsId].allowedRoles.length; j++) {
        if (employees[i].role === roomsConfig[roomsId].allowedRoles[j]) {
          list.innerHTML += createEmployeeCard(employees[i]);
          break;
        }
      }
    }
  }

  // list.addEventListener("click", (event) => {
  list.onclick = (event) => {
    const employ = event.target.closest(".employee-card");
    console.log(employ);
    if (employ) {
      addEmployeInRooms(employ.dataset.employeeId, roomsId);
      closeSelectorModal();
      // unassignedCountMines();
    }
  };
  // });

  // Clean up previous event listeners
  // list.removeEventListener("click", handleEmployeeSelection);
  // list.addEventListener("click", handleEmployeeSelection);

  // function handleEmployeeSelection(event) {
  //   const employeeCard = event.target.closest(".employee-card");
  //   if (employeeCard) {
  //     // addEmployeeToRoom(employeeCard.dataset.employeeId, roomId);
  //     addEmployeInRooms(employeeCard.dataset.employeeId, roomsId);
  //     closeSelectorModal();
  //   }
  // }
}

// + Employe Non Assigne
function unassignedCountPlus() {
  const unassignedCountTxt = document.getElementById("unassigned-count");
  unassignedCountTxt.textContent = Number(unassignedCountTxt.textContent) + 1;
}

// remove Inside Room
function removeFromZone(employeeCard) {
  const indexEmploye = searchEmploye(employeeCard.dataset.employeeId);
  employees[indexEmploye].location = null;
  renderUnassigned(employees[indexEmploye]);
  unassignedCountPlus();
  const roomSelected = employeeCard.parentElement.getAttribute("id").split("-")[1];
  const countEmployeInRooms = document.getElementById(`badge-${roomSelected}`);
  countEmployeInRooms.textContent = Number(countEmployeInRooms.textContent) + -1;
  employeeCard.remove();
}

  // 3) (click button Assigner)  + (click X remove employe Inside Room)
  document.querySelector(".rooms").addEventListener("click", (event) => {
    const assignBtn = event.target.closest(".btn-assign");
    if (assignBtn) {
      const roomSelected = assignBtn.dataset.rooms;
      console.log(roomSelected);
      const employesInRooms = document.getElementById(`employees-${roomSelected}`);
      if (employesInRooms.childElementCount === roomsConfig[roomSelected].capacity) {
        alert("La salle a atteint sa capacite maximale");
      } else {
        document.getElementById("selector-modal").classList.add("active");
        openZoneSelector(roomSelected);
      }
    }

    // remove Inside Room
    const removeBtn = event.target.closest(".btn-remove-img");

    if (removeBtn) {
      const employeeCard = removeBtn.closest(".employee-img-card");
      if (employeeCard) {
        const zone = employeeCard.parentElement.getAttribute("id").split("-")[1];
        if (employeeCard.parentElement.childElementCount === 1 && roomsConfig[zone].required) {
          // console.log(employeeCard.parentElement.parentElement);
          employeeCard.parentElement.parentElement.classList.add("empty-required");
        }
        removeFromZone(employeeCard);
        // console.log(employeeCard.parentElement.childElementCount);  error beceuse deleted
      }
    }

  // if (event.target.classList.contains("btn-remove-img")) {
  //   const employeeCard = event.target.closest(".employee-img-card");
  //   if (employeeCard) {
  //     removeFromZone(employeeCard.dataset.employeeId);
  //   }
  // }
});

function searchEmployeFromUnassigned(employeeId) {
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].id === employeeId) {
      console.log(employees[i]);
      return i;
    }
  }
  return -1;
}

// <button id="btn-remove-img" class="btn-remove-img" onclick="removeFromZone('${employee.id}')">×</button>

// delete from unssigned
function supprimerEmployeFromUnsigne(employeeId) {
  const list = document.getElementById("unassigned-list");
  for (let i = 0; i < list.childElementCount; i++) {
    if (list.children[i].getAttribute("data-employee-id") === employeeId) {
      list.children[i].remove();
      break;
    }
  }
  unassignedCountMines();
  // checkUnsigneIsVide();
}

function searchEmploye(employeeId) {
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].id === employeeId) {
      return i;
    }
  }
  return -1;
}

// Fonction pour créer une carte image
function createEmployeeImgCard(employee) {
  return `
    <div class="employee-img-card" data-employee-id="${employee.id}">
      <img class="employee-img" src="${employee.photo}" alt="Profile picture of ${employee.name}">
      <button id="btn-remove-img" class="btn-remove-img"">×</button>
    </div>
  `;
}

// 4) ajouter employe inside room and delete from unssigned
function addEmployeInRooms(employeeId, roomsId) {
  const indixEmployeSelected = searchEmploye(employeeId);
  employees[indixEmployeSelected].location = roomsId;
  document.getElementById(`employees-${roomsId}`).innerHTML += createEmployeeImgCard(employees[indixEmployeSelected]);
  supprimerEmployeFromUnsigne(employeeId);
  // document.getElementById(`zone-${roomsId}`).style.backgroundColor = "red";
  document.getElementById(`zone-${roomsId}`).classList.remove("empty-required");
  const countEmployeInRooms = document.getElementById(`badge-${roomsId}`);
  countEmployeInRooms.textContent = Number(countEmployeInRooms.textContent) + 1;
}

// click in person to assign to room logic
// document.getElementById("selector-list").addEventListener("click", (event) => {
//   // <div class="employee-card" data-employee-id="${employee.id}" data-role
//   const employ = event.target.closest(".employee-card");
//   // const room = event.target.closest(".btn-assign");
//   console.log(employ);
//   // console.log(room);

//   // if (employ) {
//   //   addEmployeInRooms(employ.dataset.employeeId);
//   //   // document.getElementById("employees-conference").innerHTML += createEmployeeImgCard(employees[employees.length - 1]);
//   //   // console.log(employ.dataset.employeeId);
//   //   closeSelectorModal();
//   // }
// });

function createEmploye(urlImage) {
  const img = document.createElement("img");
  img.setAttribute("src", `${urlImage}`);
}

// let dat = "1999-08-15";
// console.log(Number(dat.split("-")[0]) === 1999);

// const now = new Date();

// const year = now.getFullYear();
// let month = now.getMont();
// let day = now.getDate();

// console.log(typeof year);
// console.log(month);
// console.log(day);

// Photo preview functionality
// function previewPhoto() {
//     const photoUrl = document.getElementById("emp-photo").value;
//     const preview = document.getElementById("photo-preview");

//     if (photoUrl) {
//         preview.innerHTML = `<img src="${photoUrl}" alt="Photo preview">`;
//     } else {
//         preview.innerHTML = '';
//     }
// }

function previewPhoto() {
  const url = document.getElementById("emp-photo").value.trim();
  const preview = document.getElementById("photo-preview");

  if (url === "") {
    preview.innerHTML = "";
    return;
  }

  preview.innerHTML = `<img src="${url}" alt="photo employe">`;
}

function unassignedCountMines() {
  const unassignedCountTxt = document.getElementById("unassigned-count");
  unassignedCountTxt.textContent = Number(unassignedCountTxt.textContent) - 1;
}

function remplireUnsigneAuto() {
  for (let i = 0; i < employees.length; i++) {
    if (!employees[i].location) {
      renderUnassigned(employees[i]);
      unassignedCountPlus();
    }
  }
}

// function checkUnsigneIsVide() {
//   const list = document.getElementById("unassigned-list");
//   // <p class="empty-message">Tous assignes</p>
//   if (list.childElementCount === 0) {
//     list.innerHTML += `<p class="empty-message">Tous assignes</p>`;
//   }
// }

remplireUnsigneAuto();
// checkUnsigneIsVide();

// document.getElementById("badge-server").textContent = "";