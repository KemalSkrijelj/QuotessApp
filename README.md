# QuotesApp
QuotesApp is a simple React application that allows users to browse, add, and manage quotes. The application features user-friendly pagination, like/dislike buttons for each quote, and persistence of added quotes even after a page reload. The app is also equipped with a modal that displays upon successful login and when new quotes are added.

## Table of Contents
- Features
- Installation
- Usage
- Contributing
-License
- Features
## View Quotes: Browse through a list of inspirational quotes.
## Add Quotes: Add new quotes via a simple input form.
## Like/Dislike Quotes: Interact with quotes using like and dislike buttons.
## Pagination: Quotes are paginated for easier navigation.
## Persistence: Added quotes persist even after a page reload.
## Modal on Login: A modal displays upon successful login.
## Prevent Duplicates: Duplicate quotes are detected and managed appropriately.

# Installation

1. Clone the repository:
git clone https://github.com/kemalskrijelj/QuotessApp.git
2. Navigate to the project directory:
cd QuotessApp
3. Install dependencies:
npm install
4. Start the development server:
npm start
Open your browser and navigate to http://localhost:3000 to view the app.

# Key Components
QuoteList: Displays a list of quotes with pagination.
AddQuoteForm: A form to add new quotes to the list.
QuoteItem: Represents a single quote with like/dislike functionality.
Modal: Shows a modal upon successful login and when new quotes are added.
Price Handling
For users coming from an outlet, only the priceWithDiscount is displayed in the cart.

## Managing Quotes
The application fetches quotes from a server and ensures that no duplicates are added.
Upon adding a new quote, the application checks to prevent duplicates and displays a modal if a new quote is successfully added.
Contributing
Contributions are welcome! Please follow these steps:

# Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes and commit them (git commit -m 'Add some feature').
Push to the branch (git push origin feature-branch).
Open a Pull Request.

