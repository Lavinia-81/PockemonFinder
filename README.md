# Pokémon Finder
HTML • CSS • JavaScript • PokeAPI — Early API Integration Project  
Live Demo: https://lavinia-81.github.io/PockemonFinder/

A simple and responsive Pokémon search application built using vanilla JavaScript, HTML, and CSS, powered by the public PokeAPI.
This project was created early in my learning journey to explore how APIs work, how to fetch external data, and how to render dynamic content in the browser.

---

## Overview
Pokémon Finder allows users to search for Pokémon by name or ID, retrieve real‑time data from the PokeAPI, and display essential details such as:
- official artwork
- weight
- basic stats (depending on implementation)

This project demonstrates foundational API concepts such as:
- making HTTP requests
- handling JSON responses
- updating the DOM dynamically
- managing loading/error states
- building a clean and responsive UI

---

## Features
### Search Functionality
- Search Pokémon by name (e.g., “pikachu”)
- Search Pokémon by ID (e.g., “25”)
- Case‑insensitive search

### Dynamic Rendering
- Display Pokémon official artwork
- Display weight and basic details
- Clean card‑based layout

### API Integration (PokeAPI)
- Fetch data from https://pokeapi.co/api/v2/pokemon/{id or name}
- Parse JSON responses
- Handle errors (invalid Pokémon names/IDs)
- Real‑time updates without page reload

### UI & Design
- Responsive layout
- Simple and intuitive interface
- CSS‑based styling

---

## Project Structure
```
PockemonFinder/
│
├── index.html        # Main interface
├── style.css         # Styling and layout
├── app.js            # API calls and dynamic rendering
│
└── README.md         # Documentation
```
A minimal and clear structure ideal for learning API integration.

---

## How to Use
- Open index.html in your browser.
- Enter a Pokémon name or ID in the search field.
- Click Search.
- The application will display:
  - Pokémon image
  - Weight
  - Additional details (if implemented)
- If the Pokémon does not exist, an error message will appear.

---

## Installation
Clone the repository:
```
git clone https://github.com/Lavinia-81/PockemonFinder.git
cd PockemonFinder
```
Open the application:
```open index.html```

Or simply double‑click the file.

---

## Key Concepts Demonstrated
API Fundamentals
- Fetch API
- REST endpoints
- JSON parsing
- Error handling
- Asynchronous JavaScript (async/await or .then())

Front‑End Logic
- DOM manipulation
- Event listeners
- Dynamic content rendering
- Input validation

UI/UX
- Responsive design
- Clean layout
- User‑friendly interactions

---

## Purpose of This Project
Pokémon Finder represents one of your earliest API‑based projects.

It helped you understand:
- how to fetch and display external data
- how REST APIs work
- how to structure small front‑end applications
- how to build dynamic UI components
- how to handle asynchronous operations

It remains in your portfolio as a milestone in your progression from beginner to advanced front‑end and full‑stack development.

---

## Contributions
Contributions are welcome.
Feel free to fork the repository and submit a pull request.
