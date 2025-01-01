# Book Explorer

Book Explorer is a web application built using React and Bootstrap that allows users to search for books through the Google Books API. The application provides a seamless interface to browse books and view their details in a modal.

# ScreenShots

![Screenshot 2025-01-01 111658](https://github.com/user-attachments/assets/e6227924-8cbf-42f8-9e1c-72ca111f52ea)

![Screenshot 2025-01-01 111738](https://github.com/user-attachments/assets/ad452437-3fab-47ee-80eb-dd8935fc2617)

## Features

- Search for books using the Google Books API.
- Display a list of books based on the search query.
- View detailed information about a selected book in a modal.
- Responsive design using Bootstrap.

## Technologies Used

- **Frontend:** React, Bootstrap, Axios
- **API:** Google Books API
- **Styling:** CSS

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/book-explorer.git
   cd book-explorer
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Add your Google Books API Key:**
   - Replace `YOUR_API_KEY` in the `Home` component's `handleSearch` function with your actual Google Books API key.

4. **Run the application:**
   ```bash
   npm start
   ```

5. **Access the application:**
   Open your browser and navigate to `http://localhost:3000`.

## Project Structure

```
book-explorer/
├── public/
│   └── images/      # Images used in the application
├── src/
│   ├── components/  # Reusable React components
│   │   ├── Header.jsx
│   │   ├── DisplayBooks.jsx
│   │   └── ModalBody.jsx
│   ├── pages/       # Page-level components
│   │   └── Home.jsx
│   ├── css/         # Styling files
│   │   └── style.css
│   └── App.js       # Main application component
├── package.json     # Project dependencies and scripts
└── README.md        # Project documentation
```

## Key Components

### Header
- Provides the search bar for users to input their queries.
- Triggers the `handleSearch` function to fetch books.

### DisplayBooks
- Displays a list of books based on the search results.
- Each book is displayed as a card with a clickable image and title.
- Clicking a card opens a modal with detailed book information.

### ModalBody
- Displays detailed information about the selected book, including its title, cover image, and description.
- Handles cases where certain data fields (e.g., `imageLinks` or `description`) might be missing.



## Acknowledgments

- [Google Books API](https://developers.google.com/books/docs/v1/getting_started) for providing book data.
- [Bootstrap](https://getbootstrap.com/) for responsive UI components.
- [FontAwesome](https://fontawesome.com/) for icons.

