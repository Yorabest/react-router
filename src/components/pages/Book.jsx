import { useLoaderData, useParams, useNavigate, Outlet, NavLink  } from "react-router-dom"

export function Book() {
    const {bookId} = useParams()
    const {image, title, author, description, rating} = useLoaderData();
    const goBack = useNavigate();
    return (
        <div className="thumb">
        <img src={image} alt="" />
        <h2>Book {bookId}</h2>
        <h1>{title} - {author}</h1>
        <p>{description}</p>
            <p>{rating}</p>
            <NavLink to={`/react-homework-template/books/${bookId}/author` }>More about author</NavLink>
            <Outlet/>
        <button type="button" onClick={()=>goBack(-1)}>Go back</button>
        </div>
    )
}