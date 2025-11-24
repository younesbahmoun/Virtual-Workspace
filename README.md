# **WorkSphere – Interactive Employee Workspace Management**

WorkSphere is a web application that allows real-time, visual, and interactive management of employees within a workspace.
It provides an intuitive interface where employees can be added, moved, or removed from specific zones while respecting role-based access rules.

---

## 🚀 **Features**

### 🔹 Employee Management

* Add new employees (Name, Role, Email, Phone, Photo URL).
* Add multiple professional experiences.
* Photo preview in real time.
* Validation using REGEX + date validation.

### 🔹 Interactive Workspace

* 6 workspace zones:

  * Conference Room
  * Reception
  * Server Room
  * Security Room
  * Staff Room
  * Archives
* Move employees between zones or back to “Unassigned Staff”.
* Zones highlight in red when required and empty.

### 🔹 Role-Based Access Restrictions

* **Reception →** Receptionists only
* **Server Room →** IT Technicians only
* **Security Room →** Security Agents only
* **Manager →** Access to all zones
* **Cleaning →** All zones except Archives
* **Others →** Free access except restricted zones

### 🔹 UI/UX

* Responsive design (Desktop & Mobile).
* Detailed employee profile modal.

---

## 🛠️ **Technologies Used**

* **HTML** — Base structure of the interface
* **CSS** — Modern, responsive styling
* **JavaScript** — Dynamic logic, validation, and interactions
* **Git & GitHub** — Version control and collaboration

---

## 📦 **Installation & Setup**

### 1. Clone the repository

```bash
git clone https://github.com/younesbahmoun/Virtual-Workspace
cd Virtual-Workspace
```

### 2. Open the project

Open **index.html** in your browser.

---

## 🧪 **How It Works**

* Add employees through the **Add New Worker** modal.
* Move them to a zone using zone “+” buttons.
* System automatically validates zone permissions.
* Click an employee to view the detailed profile.

---

## 📘 **Project Goals**

WorkSphere aims to simplify workspace organization through a visual, intuitive, and real-time system that centralizes employee management and enforces workplace rules.