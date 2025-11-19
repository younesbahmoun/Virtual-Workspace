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

const employees = {
  //   { id: uid(), name: 'Sara Reception', role: 'Receptionist', photo: 'https://i.pravatar.cc/150?img=5', email: 'sara@example.com', phone: '+212600333444', exp: [], location: null },
  //   { id: uid(), name: 'Hamid Tech', role: 'Technician', photo: 'https://i.pravatar.cc/150?img=10', email: 'hamid@example.com', phone: '+212600555666', exp: [{ title: 'Sysadmin', company: 'ITCorp', years: '2y' }], location: null },
  nonAssigne: [],
  conference: [
    // {
    //   id: uid(),
    //   name: "Younes Bahmoon",
    //   role: "Manager",
    //   photo: "https://i.pravatar.cc/150?img=12",
    //   email: "younes@example.com",
    //   phone: "+212600111222",
    //   exp: [
    //     {
    //       title: "Lead dev",
    //       company: "WorkSphere",
    //       years: "3y",
    //     },
    //   ],
    //   location: null,
    // },
  ],
  server: [],
  security: [],
  reception: [],
  staff: [],
  archives: [],
};

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

// function supprimeEmploye (employe) {
//   console.log(employe.dataset.employeId);

//   employe.remove();
// }

function showProfile(employe) {
  const content = document.getElementById("profileContent");
  content.innerHTML += `
    <div style="text-align:center;">
      <img src="${employe.photo}" class="profile-avatar">
      <div class="profile-name">younes</div>
      <div class="profile-role">Technicien IT</div>
    </div>
    <div class="info-item">
      <h4>Email</h4>
      <p>younes@gmail.com</p>
    </div>
    <div class="info-item">
      <h4>Téléphone</h4>
      <p>0606060606</p>
    </div>
    <div class="info-item">
      <h4>Localisation</h4>
      <p>Non assigné</p>
    </div>
    <div class="experiences-display">
      <h4>Expériences</h4>
      <div class="exp-item">
        <h5>ooo</h5>
        <p>ooo</p><small>ooo</small>
      </div>
      <div class="exp-item">
        <h5>ppp</h5>
        <p>ppp</p><small>ppp</small>
      </div>
    </div>
  `;
}
// Écouter les clics sur la liste parente
document
  .getElementById("unassigned-list")
  .addEventListener("click", (event) => {
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

function renderUnassigned(employe) {
  const list = document.getElementById("unassigned-list");
  list.innerHTML += `
    <div class="employee-card">
      <div class="employee-card-content">
          <img src="${employe.photo}" class="employee-avatar"  alt="Profile picture of ${employe.name}">
          <div class="employee-info">
              <h3>${employe.name}</h3>
              <p>${employe.role}</p>
          </div>
      </div>
    </div>
  `;
}

document.getElementById("add-form").addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(experiencesEmploye());

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
  console.log(employees);
  // localStorage.setItem("rooms", JSON.stringify(employees));
  closeAddEmployeModal();
});


function openZoneSelector(zoneId) {
  document.getElementById("selector-modal").classList.add("active");
}
let btnAssignSelected = null;

// rooms
const btnAssign = document.querySelectorAll(".btn-assign");

for (let i = 0; i < btnAssign.length; i++) {
  btnAssign[i].addEventListener("click", () => {
    btnAssignSelected = btnAssign[i].dataset.rooms;
    openZoneSelector(btnAssignSelected);
  });
}

// /* utility */
function uid() {
  return "id-" + Math.random().toString(36).slice(2, 9);
}
// function uid() { return Date.now(); }
// for (let i = 0; i < 10; i++) {
//   console.log(uid());
// }

const infoRooms = [
  {
    id: "conference",
    name: "Salle de conference",
    capacity: 8,
    restricted: false,
  },
  {
    id: "server",
    name: "Salle des serveurs",
    capacity: 3,
    restricted: true,
    allowedRoles: ["Technicien IT"],
  },
  {
    id: "security",
    name: "Salle de securite",
    capacity: 2,
    restricted: true,
    allowedRoles: ["Agent de securite"],
  },
  {
    id: "reception",
    name: "Reception",
    capacity: 2,
    restricted: true,
    allowedRoles: ["Receptionniste"],
  },
  { id: "staff", name: "Salle du personnel", capacity: 10, restricted: false },
  {
    id: "archives",
    name: "Salle darchives",
    capacity: 2,
    restricted: true,
    forbiddenRoles: ["Nettoyage"],
  },
];

for (let i = 0; i < infoRooms.length; i++) {
  console.log(infoRooms[i].id);
  // console.log(employees[i]);
}

console.log("--------------");

// for (const rooms in employees) {
//   console.log(rooms);
// }

function createEmploye(urlImage) {
  const img = document.createElement("img");
  img.setAttribute("src", `${urlImage}`);
}

// let dat = "1999-08-15";
// console.log(Number(dat.split("-")[0]) === 1999);
