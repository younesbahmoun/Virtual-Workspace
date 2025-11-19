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

document.getElementById("add-form").addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(document.getElementById("emp-name").value.trim());
  // console.log(document.getElementById("emp-photo").value);
  console.log(document.getElementById("emp-email").value);
  console.log(document.getElementById("emp-phone").value);
  console.log(document.getElementById("emp-role").value);
  closeAddEmployeModal();
});

/* sample data */
// let employees = [
//   { id: uid(), name: 'Sara Reception', role: 'Receptionist', photo: 'https://i.pravatar.cc/150?img=5', email: 'sara@example.com', phone: '+212600333444', exp: [], location: null },
//   { id: uid(), name: 'Hamid Tech', role: 'Technician', photo: 'https://i.pravatar.cc/150?img=10', email: 'hamid@example.com', phone: '+212600555666', exp: [{ title: 'Sysadmin', company: 'ITCorp', years: '2y' }], location: null },
//   { id: uid(), name: 'Rachid Clean', role: 'Cleaning', photo: 'https://i.pravatar.cc/150?img=8', email: 'rachid@example.com', phone: '+212600777888', exp: [], location: null },
//   { id: uid(), name: 'Amina Sec', role: 'Security', photo: 'https://i.pravatar.cc/150?img=47', email: 'amina@example.com', phone: '+212600999000', exp: [], location: null },
// ];

// /* utility */
function uid() { return 'id-' + Math.random().toString(36).slice(2, 9); }
for (let i = 0; i < 10; i++) {
  // console.log(uid());
}

const infoRooms = [
  {
    id: "conference",
    name: "Salle de conference",
    capacity: 8,
    restricted: false,
  },
  {
    id: "reception",
    name: "Reception",
    capacity: 2,
    restricted: true,
    allowedRoles: ["Receptionniste"],
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
  { id: "staff",
    name: "Salle du personnel",
    capacity: 10,
    restricted: false
  },
  {
    id: "archives",
    name: "Salle darchives",
    capacity: 2,
    restricted: true,
    forbiddenRoles: ["Nettoyage"],
  },
];

let employees = {
  //   { id: uid(), name: 'Sara Reception', role: 'Receptionist', photo: 'https://i.pravatar.cc/150?img=5', email: 'sara@example.com', phone: '+212600333444', exp: [], location: null },
//   { id: uid(), name: 'Hamid Tech', role: 'Technician', photo: 'https://i.pravatar.cc/150?img=10', email: 'hamid@example.com', phone: '+212600555666', exp: [{ title: 'Sysadmin', company: 'ITCorp', years: '2y' }], location: null },
//   { id: uid(), name: 'Rachid Clean', role: 'Cleaning', photo: 'https://i.pravatar.cc/150?img=8', email: 'rachid@example.com', phone: '+212600777888', exp: [], location: null },
//   { id: uid(), name: 'Amina Sec', role: 'Security', photo: 'https://i.pravatar.cc/150?img=47', email: 'amina@example.com', phone: '+212600999000', exp: [], location: null },
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

function createEmploye(urlImage) {
  const img = document.createElement("img");
  img.setAttribute("src", `${urlImage}`);
}
