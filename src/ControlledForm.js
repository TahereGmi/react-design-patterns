import { useState, useEffect } from "react"
export const ControlledForm = () => {
    const [nameInputError, setNameInputError] = useState('')
    const [name, setName ] = useState('')
    const [age, setAge ] = useState()
    const [hairColor, setHairColor ] = useState('')

    useEffect(() => {
        if(name.length < 2) {
            setNameInputError('Name must be two or more character!')
        } else {
            setNameInputError('')
        }
    }, [name])

    return (
        <form>
            {nameInputError && <p>{nameInputError}</p>}
            <input 
                name="name" 
                type="text" 
                placeholder="Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
            />
            <input 
                name="age" 
                type="number" 
                placeholder="Age" 
                value={age} 
                onChange={(e) => setAge(e.target.value)}
            />
            <input 
                name="Hair Color" 
                type="text" 
                placeholder="Hair Color" 
                value={hairColor} 
                onChange={(e) => setHairColor(e.target.value)}
            />
            <button
                type="submit"
            >
                Submit
            </button>
        </form>
    )
}