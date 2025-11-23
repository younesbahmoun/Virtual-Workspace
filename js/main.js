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

document
  .getElementById("btn-cancel-add-employe")
  .addEventListener("click", () => {
    closeAddEmployeModal();
  });

document
  .getElementById("btn-close-modale-add-employe")
  .addEventListener("click", () => {
    closeAddEmployeModal();
  });

function closeSelectorModal() {
  document.getElementById("selector-modal").classList.remove("active");
}

document
  .getElementById("btn-close-modal-selector")
  .addEventListener("click", () => {
    closeSelectorModal();
  });

// Remove experience field
function removeExperience(expId) {
  const expElement = document.getElementById(expId);
  if (expElement) {
    expElement.remove();
  }
}

// Validate date logic
// function validateDates(expId) {
//     const expElement = document.getElementById(expId);
//     const startDateInput = expElement.querySelector('.exp-date-debut');
//     const endDateInput = expElement.querySelector('.exp-date-fin');
//     const errorElement = expElement.querySelector('.date-error');

//     const startDate = new Date(startDateInput.value);
//     const endDate = new Date(endDateInput.value);

//     if (startDate && endDate && endDate < startDate) {
//         errorElement.classList.add('show');
//         endDateInput.style.borderColor = '#e74c3c';
//         return false;
//     } else {
//         errorElement.classList.remove('show');
//         endDateInput.style.borderColor = '#dee2e6';
//         return true;
//     }
// }

document.getElementById("btn-add-exp").addEventListener("click", () => {
  addExperienceField();
  // document.getElementById("experiencesContainer").appendChild(document.querySelector(".experience-item").cloneNode(true));
});

// data tout employees in my app
// const employees = {
//   nonAssigne: [
//     { id: uid(), name: "Sara Manager", role: "manager", photo: "https://i.pravatar.cc/150?img=5", email: "sara@example.com", phone: "+212600333444", exp: [], location: null },
//     { id: uid(), name: "Hamid Tech", role: "it", photo: "https://i.pravatar.cc/150?img=10", email: "hamid@example.com", phone: "+212600555666", exp: [{ title: "Sysadmin", company: "ITCorp", years: {annee: 0, mois: 5, jour: 22} }], location: null },
//     { id: uid(), name: "Karim Security", role: "security", photo: "https://i.pravatar.cc/150?img=15", email: "karim@example.com", phone: "+212600777888", exp: [{ title: "Guard", company: "SecurCorp", years: {annee: 1, mois: 8, jour: 0} }], location: null },
//     { id: uid(), name: "Fatima Cleaning", role: "cleaning", photo: "https://i.pravatar.cc/150?img=8", email: "fatima@example.com", phone: "+212600999000", exp: [{ title: "Cleaner", company: "CleanPro", years: {annee: 1, mois: 5, jour: 22} }], location: null },
//     { id: uid(), name: "Ali Employee", role: "other", photo: "https://i.pravatar.cc/150?img=20", email: "ali@example.com", phone: "+212600111222", exp: [{ title: "Developer", company: "TechSoft", years: "2y" }], location: null },
//     { id: uid(), name: "Guest Person", role: "other", photo: "https://i.pravatar.cc/150?img=25", email: "guest@example.com", phone: "+212600333444", exp: [], location: null }
//   ],
//   conference: [
//     { id: uid(), name: "Younes Manager", role: "manager", photo: "https://i.pravatar.cc/150?img=12", email: "younes@example.com", phone: "+212600111222", exp: [{ title: "Lead dev", company: "WorkSphere", years: "3y" }], location: "conference" }
//   ],
//   reception: [
//     { id: uid(), name: "Lina Reception", role: "reception", photo: "https://i.pravatar.cc/150?img=3", email: "lina@example.com", phone: "+212600555666", exp: [{ title: "Receptionist", company: "Hotel Plaza", years: "2y" }], location: "reception" }
//   ],
//   server: [
//     { id: uid(), name: "Tech IT", role: "it", photo: "https://i.pravatar.cc/150?img=7", email: "tech@example.com", phone: "+212600777888", exp: [{ title: "Network Admin", company: "DataCenter", years: "3y" }], location: "server" }
//   ],
//   security: [
//     { id: uid(), name: "Guard Security", role: "security", photo: "https://i.pravatar.cc/150?img=18", email: "guard@example.com", phone: "+212600999000", exp: [{ title: "Security Agent", company: "SafeGuard", years: "5y" }], location: "security" }
//   ],
//   staff: [
//     // { id: uid(), name: "Regular Employee", role: "employee", photo: "https://i.pravatar.cc/150?img=30", email: "employee@example.com", phone: "+212600111333", exp: [{ title: "Analyst", company: "BusinessCorp", years: "2y" }], location: "staff" }
//     { id: uid(), name: "Regular Employee", role: "other", photo: "https://i.pravatar.cc/150?img=30", email: "employee@example.com", phone: "+212600111333", exp: [{ title: "Analyst", company: "BusinessCorp", years: "2y" }], location: "staff" }
//   ],
//   archives: [
//     { id: uid(), name: "Doc Manager", role: "manager", photo: "https://i.pravatar.cc/150?img=22", email: "doc@example.com", phone: "+212600444555", exp: [{ title: "Archivist", company: "DocStore", years: "4y" }], location: "archives" }
//   ]
// };

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
      <p>${employe.location ? employe.location : "Non assigné"}</p>
    </div>
    <div class="experiences-display">
      <h4>Expériences</h4>
  `;

  // Boucle pour les expériences
  if (employe.exp && employe.exp.length > 0) {
    for (let i = 0; i < employe.exp.length; i++) {
      const experience = employe.exp[i];
      content.innerHTML += `
        <div class="exp-item">
          <h5>${experience.title}</h5>
          <p>${experience.company}</p>
          <small>${experience.years}</small>
        </div>
      `;
    }
  } else {
    content.innerHTML += `<p>Aucune experience</p>`;
  }

  // Fermer la div experiences-display
  content.innerHTML += `</div>`;
}

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
      alert("Veuillez remplir tous les champs des expériences.");
      return false;
    }

    // Verification dates
    if (new Date(startDate) > new Date(endDate)) {
      alert("La date de début doit être avant la date de fin.");
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

// submit data
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

function searchEmploye(employeeId) {
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].id === employeeId) {
      console.log(employees[i]);
      return i;
    }
  }
  return -1;
}

function searchEmployeFromUnassigned(employeeId) {
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].id === employeeId) {
      console.log(employees[i]);
      return i;
    }
  }
  return -1;
}

// Fonction pour créer une carte image
// <button id="btn-remove-img" class="btn-remove-img" onclick="removeFromZone('${employee.id}')">×</button>
function createEmployeeImgCard(employee) {
  return `
    <div class="employee-img-card" data-employee-id="${employee.id}">
      <img class="employee-img" src="${employee.photo}" alt="Profile picture of ${employee.name}">
      <button id="btn-remove-img" class="btn-remove-img"">×</button>
    </div>
  `;
}

function checkUnsigneIsVide() {
  const list = document.getElementById("unassigned-list");
  // <p class="empty-message">Tous assignes</p>
  if (list.childElementCount === 0) {
    list.innerHTML += `<p class="empty-message">Tous assignes</p>`;
  }
}
remplireUnsigneAuto();
checkUnsigneIsVide();

function supprimerEmployeFromUnsigne(employeeId) {
  const list = document.getElementById("unassigned-list");
  for (let i = 0; i < list.childElementCount; i++) {
    if (list.children[i].getAttribute("data-employee-id") === employeeId) {
      list.children[i].remove();
      break;
    }
  }
  unassignedCountMines();
  checkUnsigneIsVide();
}

function addEmployeInRooms(employeeId, roomsId) {
  const indixEmployeSelected = searchEmploye(employeeId);
  employees[indixEmployeSelected].location = roomsId;
  document.getElementById(`employees-${roomsId}`).innerHTML +=
    createEmployeeImgCard(employees[indixEmployeSelected]);
  supprimerEmployeFromUnsigne(employeeId);
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

function removeFromZone(employeeCard) {
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].id === employeeCard.dataset.employeeId) {
      employees[i].location = null;
      console.log(employees[i]);
      break;
    }
  }
  employeeCard.remove();
}

// click button Assigner
document.querySelector(".rooms").addEventListener("click", (event) => {
  const assignBtn = event.target.closest(".btn-assign");
  if (assignBtn) {
    document.getElementById("selector-modal").classList.add("active");
    openZoneSelector(assignBtn.dataset.rooms);
    console.log(assignBtn.dataset.rooms);
  }

  const removeBtn = event.target.closest(".btn-remove-img");

  if (removeBtn) {
    // Get the parent employee card
    const employeeCard = removeBtn.closest(".employee-img-card");

    if (employeeCard) {
      // const employeeId = employeeCard.dataset.employeeId;
      // console.log("Removing employee:", employeeId);
      // removeFromZone(employeeId);
      removeFromZone(employeeCard);
    }
  }

  // if (event.target.classList.contains("btn-remove-img")) {
  //   const employeeCard = event.target.closest(".employee-img-card");
  //   if (employeeCard) {
  //     removeFromZone(employeeCard.dataset.employeeId);
  //   }
  // }

  // Handle remove button clicks
  // const employeeCard = event.target.closest(".employee-img-card");
  // const employeeCard = event.target.closest(".btn-remove-img");
  // if (employeeCard) {
  //   // removeFromZone(employeeCard.dataset.employeeId);
  //   removeFromZone(employeeCard);
  // }

  // const employeeCard = event.target.closest(".employee-img-card");
  // if (employeeCard) {
  //   openProfileModal(employeeCard);
  // }
});

// /* utility */
function uid() {
  return "id-" + Math.random().toString(36).slice(2, 9);
}

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

// function openProfileModal() {
//   document.getElementById("profile-modal").classList.add("active");
// }

// function closeProfileModal() {
//   document.getElementById("profile-modal").classList.remove("active");
// }

// document.getElementById("btn-close-modale").addEventListener("click", () => {
//     closeProfileModal();
// });

function remplireUnsigneAuto() {
  for (let i = 0; i < employees.length; i++) {
    if (!employees[i].location) {
      renderUnassigned(employees[i]);
      unassignedCountPlus();
    }
  }
}

function unassignedCountPlus() {
  const unassignedCountTxt = document.getElementById("unassigned-count");
  unassignedCountTxt.textContent = Number(unassignedCountTxt.textContent) + 1;
}

function unassignedCountMines() {
  const unassignedCountTxt = document.getElementById("unassigned-count");
  unassignedCountTxt.textContent = Number(unassignedCountTxt.textContent) - 1;
}
