import React from 'react';

const PersonCard1 = (props) => {

    // const [varAge, setAge] = useState(props.age)

    // const increaseAge = () => {
    //     console.log("clicked");
    //     let newAge= varAge + 1
    //     setAge(newAge)
    // }

    return (
        <div>
        <h1>{props.lastName} , {props.firstName}</h1>
        <p>Age: {props.age}</p>
        <p>Hair Color: {props.hairColor}</p>

        
        </div>
    )



}
export default PersonCard1;