import React, {useState} from "react";

const ExpenseTitleAmount = (props) => {
    // const title = props.title;

    const [title, setTitle] = useState(props.title)
    const handler = () => {
        setTitle('Updated');
        console.log(title);
    }

    return (
        <div>
            <div>
                <h2>{title}</h2>
            </div>
        <button onClick={handler}>Change Title</button>
        </div>
    )
}

export default ExpenseTitleAmount;