QuotesApp
QuotesApp is a simple React application that allows users to browse, add, and manage quotes. The application features user-friendly pagination, like/dislike buttons for each quote, and persistence of added quotes even after a page reload. The app is also equipped with a modal that displays upon successful login and when new quotes are added.

Table of Contents
Features
Installation
Usage
Contributing
License
Features
View Quotes: Browse through a list of inspirational quotes.
Add Quotes: Add new quotes via a simple input form.
Like/Dislike Quotes: Interact with quotes using like and dislike buttons.
Pagination: Quotes are paginated for easier navigation.
Persistence: Added quotes persist even after a page reload.
Modal on Login: A modal displays upon successful login.
Prevent Duplicates: Duplicate quotes are detected and managed appropriately.
Installation
Clone the repository:
bash
Копирај кȏд
git clone https://github.com/yourusername/QuotesApp.git
Navigate to the project directory:
bash
Копирај кȏд
cd QuotesApp
Install dependencies:
bash
Копирај кȏд
npm install
Usage
Start the development server:
bash
Копирај кȏд
npm start
Open your browser and navigate to http://localhost:3000 to view the app.
Key Components
QuoteList: Displays a list of quotes with pagination.
AddQuoteForm: A form to add new quotes to the list.
QuoteItem: Represents a single quote with like/dislike functionality.
Modal: Shows a modal upon successful login and when new quotes are added.
Price Handling
For users coming from an outlet, only the priceWithDiscount is displayed in the cart.

Managing Quotes
The application fetches quotes from a server and ensures that no duplicates are added.
Upon adding a new quote, the application checks to prevent duplicates and displays a modal if a new quote is successfully added.
Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes and commit them (git commit -m 'Add some feature').
Push to the branch (git push origin feature-branch).
Open a Pull Request.
License
This project is licensed under the MIT License. See the LICENSE file for details.


Login page in which you have two inputs (username, password) and a submit button.
Users you can login with:

    {
        username: "fazi",
        password: "1234",
    },
    {
        username: "pera",
        password: "1234",
    },
    {
        username: "mika",
        password: "1234",
    },
    {
        username: "zika",
        password: "1234",
    }

### Make Login request

    Post http://localhost:8000/sessions

### Request body:

    {
        "username":"zika",
        "password": "1234"
    }

### Request response:

    {
        "accessToken": "yuim98oq-e275-45a2-bc2e-b3098036d655"
    }

## 2. Add Logout button on the quotes page

## 3. Create logout logic on the logout button

# Requests that require access token in the header:

    GET http://localhost:8000/tags

    GET http://localhost:8000/quotes

    GET http://localhost:8000/quotes/:id

    POST http://localhost:8000/quotes

    POST http://localhost:8000/quotes/:id/upvote

    DELETE http://localhost:8000/quotes/:id/upvote

    POST http://localhost:8000/quotes/:id/downvote

    DELETE http://localhost:8000/quotes/:id/downvote

#Example of the request that uses an accessToken:

    const accessToken = "yuim98oq-e275-45a2-bc2e-b3098036d655";
    useEffect(() => {
    axios
      .get("http://localhost:8000/quotes", {
        headers: { Authorization: "Bearer " + accessToken },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log);
    }, []);

## Other instructions can be found in the Test.pdf file inside the Repository.
