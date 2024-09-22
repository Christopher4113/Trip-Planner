import { Travel } from "../types"
import TravelCard from "./Travel"
import './Travel.css';
type Props = {
    travels: Travel[];
    onDeleteTravel: (id: string) => void;
    onAddNoteTravel: (travelId: string, note: string) => void;
    onDeleteNoteTravel: (travelId:string, noteIndex: number) => void;
}
const TravelList = ({travels,onAddNoteTravel,onDeleteNoteTravel,onDeleteTravel}: Props) => {
  return (
    <div className="trip-list-container">
        {travels && travels.map((travel,index) => <TravelCard 
        key={index}
        travel={travel}
        index={index}
        onDeleteTravel={onDeleteTravel}
        onAddNoteTravel={onAddNoteTravel}
        onDeleteNoteTravel={onDeleteNoteTravel}
        />)}
    </div>
  )
}

export default TravelList