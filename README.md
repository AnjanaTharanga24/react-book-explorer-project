# Book Explorer

Book Explorer is a web application built using React and Bootstrap that allows users to search for books through the Google Books API. The application provides a seamless interface to browse books and view their details in a modal.

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

## Error Handling

- If no `imageLinks` or `description` are available for a book, the application provides appropriate fallbacks:
  - Default placeholder image.
  - "No description available" message.
- If there are too many requests to the Google Books API, the error is logged to the console for debugging.

## Future Enhancements

- Add pagination to handle large search result sets.
- Improve error handling and user feedback for API rate limits (e.g., display a message to the user).
- Implement user authentication and save favorite books.
- Add advanced search filters (e.g., by author, publication date).

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [Google Books API](https://developers.google.com/books/docs/v1/getting_started) for providing book data.
- [Bootstrap](https://getbootstrap.com/) for responsive UI components.
- [FontAwesome](https://fontawesome.com/) for icons.

