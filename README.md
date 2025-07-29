# Country Info Finder

A simple web app that lets you search for and display detailed information about any country using the REST Countries API.

---

## Features

- Search any country by name (exact match)
- Displays the following information:
  - Country Name
  - Flag
  - Capital City
  - Region
  - Population
  - Currency
  - Languages
- Custom support for unrecognized states like Somaliland
- Responsive and user-friendly interface

---

## Technologies Used

- HTML, CSS, JavaScript (Fetch API)
- REST Countries API
- Node.js + Express (optional for backend server)
- Docker (Nginx for static hosting or Node.js for server)

---

## Running Locally (Without Docker)

1. Clone or download the repository  
2. Open `index.html` directly in your web browser

> **Note:** Some browsers restrict API calls from local files. In that case, use a local server (e.g., VS Code Live Server extension) or run with Node.js server.

---

## Running with Node.js Server (Optional)

1. Install dependencies:  
   ```bash
   npm install