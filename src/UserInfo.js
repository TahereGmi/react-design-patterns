import { useCurrentUser } from "./useCurrentUser"
export const UserInfo = () => {
    const user = useCurrentUser()

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