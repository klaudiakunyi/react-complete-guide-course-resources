import { useState } from "react";

export default function Player({ initialName, symbol }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);
    let buttonText = "Edit"
    let editablePlayerName = <span className="player-name">{initialName}</span>

    function handleEditClick() {
        setIsEditing((editing) => !editing); //with arrow function is dynamic ~async
        //setIsEditing(!isEditing);  don't update state on previous state like this!! bad
    }

    function handleChange(event) {
        setPlayerName(event.target.value)
    }

    if (isEditing) {
        editablePlayerName = <input type="text" value={playerName} required  onChange={handleChange}/>
        buttonText="Confirm"
    } else {
        editablePlayerName = <span className="player-name">{playerName}</span>
        buttonText = "Edit"
    }

    return (
    <li>
        <span className="player">
            {editablePlayerName}
            <span className="player-icon">{ symbol }</span>
        </span>
        <button onClick={handleEditClick}>{buttonText}</button>
    </li>
    );
}