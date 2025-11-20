// function openProfileModal() {
//   document.getElementById("profile-modal").classList.add("active");
// }

// function closeProfileModal() {
//   document.getElementById("profile-modal").classList.remove("active");
// }

// document.getElementById("btn-add-employee").addEventListener("click", () => {
//     openProfileModal();
// });

// document.getElementById("btn-close-modale").addEventListener("click", () => {
//     closeProfileModal();
// });

// open and close modale add person
function openAddEmployeModal() {
  document.getElementById("add-modal").classList.add("active");
}

function closeAddEmployeModal() {
  document.getElementById("add-modal").classList.remove("active");
  document.getElementById("add-form").reset();
  document.getElementById("photo-preview").innerHTML = "";
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
  // currentZoneId = null;
}

document.getElementById("btn-close-modal-selector").addEventListener("click", () => {
    closeSelectorModal();
});

function closeAddModal() {
  document.getElementById("addModal").classList.remove("active");
  document.getElementById("emp-name").value = "";
  document.getElementById("emp-photo").value = "";
  document.getElementById("emp-email").value = "";
  document.getElementById("emp-phone").value = "";
  document.getElementById("photoPreview").innerHTML = "";
}

function addExperienceField() {
  const container = document.getElementById("experiences-container");
  const expDiv = document.createElement("div");
  expDiv.className = "experience-item";
  expDiv.innerHTML =
    '<input type="text" placeholder="Entreprise" class="exp-company"><input type="text" placeholder="Poste" class="exp-position"><input type="text" placeholder="Duree" class="exp-duration">';
  container.appendChild(expDiv);
}

document.getElementById("btn-add-exp").addEventListener("click", () => {
  addExperienceField();
  // document.getElementById("experiencesContainer").appendChild(document.querySelector(".experience-item").cloneNode(true));
});

// data tout employees in my app
const employees = {
  nonAssigne: [
    { id: uid(), name: "Sara Manager", role: "manager", photo: "https://i.pravatar.cc/150?img=5", email: "sara@example.com", phone: "+212600333444", exp: [], location: null },
    { id: uid(), name: "Hamid Tech", role: "it", photo: "https://i.pravatar.cc/150?img=10", email: "hamid@example.com", phone: "+212600555666", exp: [{ title: "Sysadmin", company: "ITCorp", years: "2y" }], location: null },
    { id: uid(), name: "Karim Security", role: "security", photo: "https://i.pravatar.cc/150?img=15", email: "karim@example.com", phone: "+212600777888", exp: [{ title: "Guard", company: "SecurCorp", years: "4y" }], location: null },
    { id: uid(), name: "Fatima Cleaning", role: "cleaning", photo: "https://i.pravatar.cc/150?img=8", email: "fatima@example.com", phone: "+212600999000", exp: [{ title: "Cleaner", company: "CleanPro", years: "1y" }], location: null },
    { id: uid(), name: "Ali Employee", role: "employee", photo: "https://i.pravatar.cc/150?img=20", email: "ali@example.com", phone: "+212600111222", exp: [{ title: "Developer", company: "TechSoft", years: "2y" }], location: null },
    { id: uid(), name: "Guest Person", role: "other", photo: "https://i.pravatar.cc/150?img=25", email: "guest@example.com", phone: "+212600333444", exp: [], location: null }
  ],
  conference: [
    { id: uid(), name: "Younes Manager", role: "manager", photo: "https://i.pravatar.cc/150?img=12", email: "younes@example.com", phone: "+212600111222", exp: [{ title: "Lead dev", company: "WorkSphere", years: "3y" }], location: "conference" }
  ],
  reception: [
    { id: uid(), name: "Lina Reception", role: "reception", photo: "https://i.pravatar.cc/150?img=3", email: "lina@example.com", phone: "+212600555666", exp: [{ title: "Receptionist", company: "Hotel Plaza", years: "2y" }], location: "reception" }
  ],
  server: [
    { id: uid(), name: "Tech IT", role: "it", photo: "https://i.pravatar.cc/150?img=7", email: "tech@example.com", phone: "+212600777888", exp: [{ title: "Network Admin", company: "DataCenter", years: "3y" }], location: "server" }
  ],
  security: [
    { id: uid(), name: "Guard Security", role: "security", photo: "https://i.pravatar.cc/150?img=18", email: "guard@example.com", phone: "+212600999000", exp: [{ title: "Security Agent", company: "SafeGuard", years: "5y" }], location: "security" }
  ],
  staff: [
    { id: uid(), name: "Regular Employee", role: "employee", photo: "https://i.pravatar.cc/150?img=30", email: "employee@example.com", phone: "+212600111333", exp: [{ title: "Analyst", company: "BusinessCorp", years: "2y" }], location: "staff" }
  ],
  archives: [
    { id: uid(), name: "Doc Manager", role: "manager", photo: "https://i.pravatar.cc/150?img=22", email: "doc@example.com", phone: "+212600444555", exp: [{ title: "Archivist", company: "DocStore", years: "4y" }], location: "archives" }
  ]
};


// console.log(employees["reception"][0].id);

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
    const duration = item.querySelector(".exp-duration").value;

    // Only add if at least one field has data
    // if (company || position || duration) {
    const exp = {
      title: position, // "Poste" = position/title
      company: company, // "Entreprise" = company
      years: duration, // "Duree" = years/duration
    };
    experienceEmploye.push(exp);
    // }
  }

  return experienceEmploye;
}

function showProfile(employe) {
  const content = document.getElementById("profile-content");
  
  // Vider le contenu d'abord
  content.innerHTML = '';
  
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
      <p>${employe.location ? employe.location : 'Non assigné'}</p>
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



// showProfile(employees["nonAssigne"][5]);

// function supprimeEmploye (employe) {
//   console.log(employe.dataset.employeId);

//   employe.remove();
// }
// Écouter les clics sur la liste parente
document.getElementById("unassigned-list").addEventListener("click", event => {
  console.log(event.currentTarget); // Toujours #unassigned-list (l'écouteur)
  // console.log(event.target.closest(".employee-card").dataset.employeId); // L'élément spécifique cliqué
  // event.target.closest(".employee-card").remove();
  // Trouver la carte employé cliquée
  // const employeeCard = event.target.closest('.employee-card');

  openAddEmployeModal();
  supprimeEmploye(event.target.closest(".employee-card"));
  // if (employeeCard) {
  //   const employeeId = employeeCard.dataset.employeeId;
  //   selectEmployee(employeeId);
  // }
});

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

function renderUnassigned(employe) {
  const list = document.getElementById("unassigned-list");
  list.innerHTML += createEmployeeCard(employe);
}

document.getElementById("add-form").addEventListener("submit", (event) => {
  event.preventDefault();

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
  employees["nonAssigne"].push(employe);
  // localStorage.setItem("rooms", JSON.stringify(employees));
  closeAddEmployeModal();
});

// let btnAssignSelected = null;

// // rooms
// const btnAssign = document.querySelectorAll(".btn-assign");

// for (let i = 0; i < btnAssign.length; i++) {
//   btnAssign[i].addEventListener("click", () => {
//     btnAssignSelected = btnAssign[i].dataset.rooms;
//     openZoneSelector(btnAssignSelected);
//   });
// }

// Fonction pour créer une carte image
function createEmployeeImgCard(employee) {
  return `
    <div class="employee-img-card" data-employee-id="${employee.id}">
      <img class="employee-img" src="${employee.photo}" alt="${employee.name}">
      <button class="btn-remove-img" onclick="removeFromZone('${employee.id}')">×</button>
    </div>
  `;
}

function addEmployeInRooms() {

}

function searchEmploye (idEmploye) {

}

function openZoneSelector(roomsId) {
  // document.getElementById("selector-modal").classList.add("active");
  const list = document.getElementById("selector-list");
  list.innerHTML = "";
  // let isEmployeFound = null;
  for (let i = 0; i < employees["nonAssigne"].length; i++) {
    for (let j = 0; j < roomsConfig[roomsId].allowedRoles.length; j++) {
      if (employees["nonAssigne"][i].role === roomsConfig[roomsId].allowedRoles[j]) {
        list.innerHTML += createEmployeeCard(employees["nonAssigne"][i]);
        break;
      }
    }
  }

  list.addEventListener("click", (event) => {
    console.log(event.target.closest(".employee-card"));
    const employAdded = event.target.closest(".employee-card");
    if (employAdded) {
      searchEmploye(employAdded.dataset.employeeId, employAdded.dataset.role);
      createEmployeeImgCard();
    }
  });

  // } else {
  //   list.innerHTML += `
  //     <p class="empty-message">Aucun employe disponible</p>
  //   `;
  // }
  // for (const rooms in employees) {
  //   if (employees[rooms].length) {
  //     // console.log(rooms);
  //     for (let i = 0; i < employees[rooms].length; i++) {
  //       if (employees[rooms][i].id === roomsId) {
  //         list.innerHTML += createEmployeeCard(employees[rooms][i]);
  //       }
  //     }
  //   }
  // }
}

// click button Assigner
document.querySelector(".rooms").addEventListener("click", (event) => {
  const assignBtn = event.target.closest(".btn-assign");

  if (assignBtn) {
    document.getElementById("selector-modal").classList.add("active");
    openZoneSelector(assignBtn.dataset.rooms);
    console.log(assignBtn.dataset.rooms);
    
  }
  // console.log(event.target.closest());

  // event.target.closest(".btn-assign");
});

// /* utility */
function uid() {
  return "id-" + Math.random().toString(36).slice(2, 9);
}
// function uid() { return Date.now(); }
// for (let i = 0; i < 10; i++) {
//   console.log(uid());
// }

const roomsConfig = {
  conference: {
    name: "Salle de conférence",
    capacity: 8,
    required: false,
    allowedRoles: ["manager", "cleaning", "other"]
  },
  reception: {
    name: "Réception", 
    capacity: 2,
    required: true,
    allowedRoles: ["manager", "reception", "cleaning"]
  },
  server: {
    name: "Salle des serveurs",
    capacity: 3, 
    required: true,
    allowedRoles: ["manager", "it", "cleaning"]
  },
  security: {
    name: "Salle de sécurité",
    capacity: 2,
    required: true,
    // cleaning pour maintenance
    allowedRoles: ["manager", "security", "cleaning"]
  },
  staff: {
    name: "Salle du personnel", 
    capacity: 10,
    required: false,
    // Tous autorisés
    allowedRoles: ["manager", "reception", "it", "security", "cleaning", "employee", "other"]
  },
  archives: {
    name: "Salle d'archives",
    capacity: 2,
    required: true,
    // NO cleaning, NO other
    allowedRoles: ["manager", "reception", "it", "security", "employee"]
  }
};
// console.log(roomsConfig.archives.allowedRoles[1]);


function createEmploye(urlImage) {
  const img = document.createElement("img");
  img.setAttribute("src", `${urlImage}`);
}

// let dat = "1999-08-15";
// console.log(Number(dat.split("-")[0]) === 1999);

// const now = new Date();

// const year = now.getFullYear();        // السنة
// let month = now.getMonth() + 1;        // الشهر (0-11) لذلك +1
// let day = now.getDate();

// console.log(typeof year);
// console.log(month);
// console.log(day);  