import { useResource } from "./useResource"

export const UserInfo = ({ userId }) => {
    // with useResource custom hook we can load any data we want
    const user = useResource(`/users/${userId}`)
    // another example
    // const product = useResource(`/products/${productId}`)

    const { name, age, hairColor, hobbies } = user || {}

    return user ? (
        <>
        <h3>{name}</h3>
        <p>Age: {age} years</p>
        <p>Hair Color: {hairColor}</p>
        <h3>hobbies: </h3>
        <ul>
            {hobbies.map((hobby) =>{
                return <li key={hobby} >{hobby}</li>
            })}
        </ul>
        </>
    ) : <div>Loading...</div>
}