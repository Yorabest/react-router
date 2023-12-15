import {useLoaderData, NavLink, useNavigate, useSearchParams} from 'react-router-dom'

export const BookList = () => {
    const books = useLoaderData();
    const goBack = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const par = searchParams.get('title') ?? '';

const updateQueryString = (title) =>{
        const nextParams = title !== "" ? { title } : {};
        setSearchParams(nextParams)
    }



    const booksFilter = books.filter(({title})=>title.toLowerCase().includes(par.toLowerCase()))
    

    return <div>
        <input type='text' value={par} onChange={(e) => updateQueryString(e.target.value)} ></input>
        <h1>BookList</h1>
                <ul className="bookList">
            {booksFilter.map(({ id, title, author }) => (
                <li key={id}>
                    <NavLink to={`/react-homework-template/books/${id}`}>{id} - {title} - {author}</NavLink>
                </li>
            ))}
        </ul>
        <button type="button" onClick={()=>goBack(-1)}>Go back</button>
     </div>
}