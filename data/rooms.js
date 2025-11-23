export const roomsConfig = {
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