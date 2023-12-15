import { App } from "components/App";
import { BookList } from "components/pages/BookList";
import { Home } from "components/pages/Home";
import { createBrowserRouter } from "react-router-dom";
import { fetchBooks, fetchBooksById } from "components/servise/fetchBooks";
import { NotFound } from "components/pages/NotFound";
import { Book } from "components/pages/Book";
import { Author } from "components/Author";

export const router = createBrowserRouter([
    {
        path: '/react-homework-template',
        element: <App />,
        errorElement: <NotFound/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: '/react-homework-template/books',
                element: <BookList />,
                loader: fetchBooks
            },
            {
                path: '/react-homework-template/books/:bookId',
                element: <Book />,
                loader: fetchBooksById,
                children: [
                    {
                        path: '/react-homework-template/books/:bookId/author',
                        element: <Author/>,
                        loader: fetchBooksById
                    }
                ]
            }
        ]
    }
])