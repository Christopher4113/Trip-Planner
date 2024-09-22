import {format} from "date-fns"
import {Travel} from "../types"
import { useState } from "react"
import './Travel.css'
type Props = {
    travel: Travel;
    onDeleteTravel: (id: string ) => void;
    onAddNoteTravel: (travelId: string, note: string) => void;
    onDeleteNoteTravel: (travelId:string, noteIndex: number) => void;
    index: number;
}


const TravelCard = ({travel,onDeleteTravel,onAddNoteTravel,onDeleteNoteTravel,index}:Props) => {
    const[newNote,setNewNote] = useState("")
    const handleAddNote = (travelId: string, note: string)  => {
        if(note.trim() !=="") {
            onAddNoteTravel(travelId,note.trim())
            setNewNote('');
        }
    };

    return (
    <div className="trip-card" key={index}>
    <h4>
    <span>{format(travel.startDate, "PPP")}-{format(travel.endDate, "PPP")}</span>
    <button className="before-button">
       From {travel.before}
    </button>
    <button className="after-button">
       To {travel.after}
    </button>
    <button className="departureTime-button">
        From {travel.departureTime}
    </button>
    <button className="arrivalTime-button">
        To {travel.arrivalTime}
    </button>
    <button className="transportation-button">
        {travel.transportation}
    </button>
    <button className="delete-button" onClick={() => onDeleteTravel(travel.id)}>
            Delete
    </button>
    </h4>
    <ul>
        {travel.notes.map((note, noteIndex) => (
        <li key={noteIndex} className="note">
            {note}{' '}
            <button className="delete-button" onClick={() => onDeleteNoteTravel(travel.id,noteIndex)}>
                x
            </button>
        </li>
    ))}
    </ul>
    <div className="note-form">
        <input type="text" className="note-input" value={newNote} onChange={(e) => setNewNote(e.target.value)} placeholder="Add a note"/>
        <button className="add-note-button" onClick={() => handleAddNote(travel.id,newNote)}>Add Note</button>
    </div>
    </div>
  );
}

export default TravelCard