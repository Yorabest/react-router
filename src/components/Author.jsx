import { useLoaderData } from "react-router-dom"

export const Author =  () => {
     const {aboutAuthor} = useLoaderData()
    return <p>{aboutAuthor}</p>
}