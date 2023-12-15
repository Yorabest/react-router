import {NavLink} from 'react-router-dom'

export const AppNav = () => {
    return (
        <nav>
            <ul>
            <li>
                <NavLink to='/react-homework-template'>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to='/react-homework-template/books'>
                    Books
                </NavLink>
                </li>
                </ul>
        </nav>
    )
}