# Restaurant Listing Project

## Description

This project involves creating a responsive web interface that allows users to list, filter, and view details of restaurants from a JSON file. The application utilizes JavaScript (XHR) to dynamically fetch and display restaurant data, allowing for searching by name and filtering by specialty and rating. The project is designed to practice using responsive design techniques and JavaScript for dynamic content rendering.

## Technologies Used

- **HTML5**: Structure and layout of the pages
- **CSS3**: Styling and media queries for responsive design
- **JavaScript (XHR)**: Fetching and displaying restaurant data from the `restaurants.json` file
- **JSON**: Storage of restaurant data

## Features

- **Restaurant List**: Displays restaurants in card format with logo, name, specialty, rating, and a "Details" button.
- **Restaurant Details**: Clicking the "Details" button shows more information about the restaurant on a new page.
- **Search by Name**: Allows users to search for restaurants by their name.
- **Filter by Specialty and Rating**: Users can filter restaurants based on their specialty and rating.
- **Responsive Design**: The interface adapts to different screen sizes using media queries.

## Installation and Usage

1. **Clone the project**:

    ```bash
    git clone https://github.com/your-profile/restaurant-listing.git
    ```

2. **Navigate to the project directory**:

    ```bash
    cd restaurant-listing
    ```

3. **Open `index.html`** in your browser to view the restaurant listing page.

4. **The project structure includes**:
   - `index.html` - The main page displaying the list of restaurants.
   - `restaurant-details.html` - The page that displays detailed information about a specific restaurant.
   - `styles.css` - The stylesheet for styling the pages.
   - `script.js` - The JavaScript file to handle fetching and rendering the restaurant data.
   - `restaurants.json` - The file containing the restaurant data.

## Restaurant JSON Structure

The `restaurants.json` file contains the following structure for each restaurant:

```json
[
    {
        "ID": 1,
        "Nom": "Restaurant A",
        "Adresse": "123 Main St, City",
        "Spécialité": "Italian",
        "Note": 4.5,
        "Logo": "logo-a.png",
        "Horaires": {
            "Lundi": "9:00 - 21:00",
            "Mardi": "9:00 - 21:00",
            "Mercredi": "9:00 - 21:00",
            "Jeudi": "9:00 - 21:00",
            "Vendredi": "9:00 - 22:00",
            "Samedi": "9:00 - 22:00",
            "Dimanche": "10:00 - 20:00"
        },
        "Téléphone": "0123456789"
    },
    ...
]
```

## Project Design and Layout

### Page Layout

- **Home Page**:
    - Displays a list of restaurants in a card format.
    - Each card shows the restaurant's logo, name, specialty, rating, and a "Details" button.
    - Includes a search bar for searching by restaurant name.
    - Filter options for specialty and rating.

- **Restaurant Details Page**:
    - Displays detailed information about a specific restaurant, including its address, specialty, hours of operation, and contact information.

### Responsiveness

- The layout adjusts to different screen sizes (mobile, tablet, desktop) using **media queries**.

## Competencies Developed

- **Responsive Web Design**: Implemented responsive design using CSS media queries.
- **Dynamic Web Applications**: Used JavaScript and XHR to dynamically load and display restaurant data from a JSON file.
- **UI/UX Design**: Created an intuitive and user-friendly interface for browsing and filtering restaurant data.

## Duration of the Project

📅 **5 days**
