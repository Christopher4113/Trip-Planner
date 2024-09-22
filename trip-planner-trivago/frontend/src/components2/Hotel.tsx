import {format} from "date-fns"
import {Hotel} from "../types"
import { useState } from "react"
import './Hotel.css'
type Props = {
    hotel: Hotel;
    onDeleteHotel: (id: string ) => void;
    onAddNoteHotel: (hotelId: string, note: string) => void;
    onDeleteNoteHotel: (hotelId:string, noteIndex: number) => void;
    index: number;
}
const HotelCard = ({hotel,onAddNoteHotel,onDeleteHotel,onDeleteNoteHotel,index}: Props) => {
    const[newNote,setNewNote] = useState("")

    const handleAddNote = (hotelId: string, note: string) => {
        if(note.trim() !=="") {
            onAddNoteHotel(hotelId,note.trim())
            setNewNote('');
        }
    };

  return (
    <div className="trip-card" key={index}>
    <h4>
        <span>{format(hotel.startDate, "PPP")}-{format(hotel.endDate, "PPP")}</span>
        <button className="country-button">
            {hotel.country}
        </button>
        <button className="city-button">
            {hotel.city}
        </button>
        <button className="cost-button">
            Cost: ${hotel.cost}
        </button>
        <button className="hotelName-button">
            Hotel: {hotel.hotelName}
        </button>
        <button className="location-button">
            Address: {hotel.location}
        </button>
        <button className="delete-button" onClick={() => onDeleteHotel(hotel.id)}>
            Delete
        </button>
    </h4>
    <ul>
        {hotel.notes.map((note, noteIndex) => (
        <li key={noteIndex} className="note">
            {note}{' '}
            <button className="delete-button" onClick={() => onDeleteNoteHotel(hotel.id,noteIndex)}>
                x
            </button>
        </li>
    ))}
    </ul>
    <div className="note-form">
        <input type="text" className="note-input" value={newNote} onChange={(e) => setNewNote(e.target.value)} placeholder="Add a note"/>
        <button className="add-note-button" onClick={() => handleAddNote(hotel.id,newNote)}>Add Note</button>
    </div>
</div>
);

}

export default HotelCard