# 🌎 Around The U.S.

A responsive social-style web application built with **HTML5, CSS3, and Vanilla JavaScript**, focused on DOM manipulation, component-based architecture, API interaction, and clean user interface behavior.

This project demonstrates core frontend engineering skills without relying on frameworks. The goal is to show strong JavaScript fundamentals, organized code structure, responsive design, and real-world UI patterns such as popups, form validation, loading states, and asynchronous API requests.

---

## 🚀 Features

✅ Edit profile information dynamically

✅ Update user avatar

✅ Load user data from an external API

✅ Load image cards from an external API

✅ Add custom image cards

✅ Like and unlike cards

✅ Delete cards from the interface

✅ Display loading feedback while forms are submitting

✅ Open image preview modal

✅ Modal interactions:

* Close with overlay click
* Close with `ESC` key
* Close with dedicated close button

✅ Responsive layout for multiple screen sizes

✅ Form handling and validation

✅ Organized CSS architecture using BEM

---

## 🧠 Technical Highlights

This project was built to reinforce important frontend concepts used in real-world applications.

### DOM Manipulation

* Dynamic rendering of cards
* Interactive UI updates without page reload
* Event-driven behavior
* User feedback during asynchronous operations

### API Integration

* Fetching user profile data from the server
* Updating profile information through API requests
* Updating the user avatar
* Loading cards from the API
* Creating new cards through the API
* Handling likes, dislikes, and card deletion

### Object-Oriented JavaScript

The project uses ES6 classes to separate responsibilities and keep the code more maintainable.

Examples of responsibilities include:

* `Api` — handles server communication
* `Card` — creates and manages individual cards
* `FormValidator` — controls form validation behavior
* `Popup` — manages base popup behavior
* `PopupWithForm` — handles form-based popups
* `PopupWithImage` — handles image preview popups
* `Section` — renders groups of items
* `UserInfo` — manages user profile information

### Component-Based Structure

* Reusable UI logic
* Separation of responsibilities
* Modular JavaScript files
* Modular CSS organization using BEM methodology

### Modal Management

* Encapsulated open/close logic
* Overlay interaction handling
* Keyboard accessibility with `Escape` support
* Dedicated popup classes for different popup behaviors

### Responsive Design

* Flexible layout for different screen sizes
* CSS media queries
* Mobile-friendly adjustments

### User Experience Improvements

* Form validation before submission
* Disabled/active button states
* Loading button text such as `Saving...`
* Immediate visual feedback after successful actions

---

## 🛠️ Tech Stack

* HTML5
* CSS3
* JavaScript ES6+
* ES Modules
* Object-Oriented Programming
* REST API integration
* BEM Methodology
* Normalize.css

No frontend frameworks were used. This project was intentionally built with pure JavaScript to strengthen the fundamentals behind modern frontend development.

---

## 📂 Project Structure

```text
web_project_around_pt/
│
├── src/
│   ├── blocks/              # Component CSS files using BEM
│   ├── components/          # JavaScript classes
│   ├── images/              # Images and icons
│   ├── pages/               # Main page styles
│   ├── scripts/             # Main JavaScript entry point
│   ├── utils/               # Constants and shared configuration
│   └── vendor/              # External styles/fonts
│
├── index.html               # Main HTML file
└── README.md
```

---

## ▶️ How to Run

### Clone the repository

```bash
git clone <repository-url>
```

### Open the project folder

```bash
cd web_project_around_pt
```

### Run the project

Open `index.html` in your browser.

No build step is required.

---

## 🎯 What This Project Demonstrates

This project demonstrates my ability to:

* Build an interactive web interface from scratch
* Work with Vanilla JavaScript and ES6 modules
* Use object-oriented programming in frontend development
* Communicate with an external API
* Handle asynchronous operations with user feedback
* Create reusable UI components
* Validate forms on the client side
* Manage popup behavior and event handling
* Structure CSS using BEM methodology
* Build responsive layouts for different devices

---

## 📌 Current Improvement Opportunities

This project is functional, but there are still areas that can be improved as part of continued development:

* Improve error messages shown directly to the user
* Refactor delete confirmation into a dedicated confirmation popup class
* Review event listener management for long-term maintainability
* Improve accessibility attributes for modals and form errors
* Add smoother animations and transitions
* Add automated tests for key components
* Improve environment/config handling for API credentials

---

## 👨‍💻 Author

**Higor Souza**
Software Engineer | Full Stack Developer

---

## 💡 Final Note

Around The U.S. is a frontend project focused on mastering the fundamentals behind modern web applications. It shows how interactive, API-driven interfaces can be built with clean structure, reusable JavaScript classes, responsive design, and no frontend framework dependency.

The project is still evolving, but it already represents important real-world frontend skills: component thinking, API communication, DOM control, validation, and user-focused interaction design. 🚀
