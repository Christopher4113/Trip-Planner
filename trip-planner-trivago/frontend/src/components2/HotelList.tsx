import { Hotel } from "../types"
import HotelCard from "./Hotel"
import './Hotel.css';

type Props = {
    hotels: Hotel[];
    onDeleteHotel: (id: string) => void;
    onAddNoteHotel: (tripId: string, note: string) => void;
    onDeleteNoteHotel: (tripId:string, noteIndex: number) => void;
}


const HotelList = ({hotels,onAddNoteHotel,onDeleteHotel,onDeleteNoteHotel}: Props) => {
  return (
    <div className="trip-list-container">
        {hotels && hotels.map((hotel,index) => <HotelCard 
        key={index}
        hotel={hotel}
        index={index}
        onDeleteHotel={onDeleteHotel}
        onAddNoteHotel={onAddNoteHotel}
        onDeleteNoteHotel={onDeleteNoteHotel}
        />)}
    </div>
  )
}

export default HotelList