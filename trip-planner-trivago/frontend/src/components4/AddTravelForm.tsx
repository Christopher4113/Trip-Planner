import "./AddTravelForm.css";
import { useCollection } from "@squidcloud/react";
import {Travel} from '../types';
import {useState} from "react"
const AddTravelForm = () => {
    const [startDate, setStartDate] = useState("");
    const [endDate,setEndDate] = useState("");
    const [before, setBefore] = useState("")
    const [after,setAfter] = useState("");
    const [departureTime, setDepartureTime] = useState("")
    const [arrivalTime, setArrivalTime] = useState("");
    const [transportation, setTransportation] = useState("");
    const travelCollection = useCollection<Travel>("travels");

    const addTravel = () => {
        const travelId = crypto.randomUUID();
        const depart = departureTime.toString();
        const arrive = arrivalTime.toString();

        if (typeof depart !== 'string' || typeof arrive !== 'string') {
            console.error("Invalid depart value")
            return;
        }
        travelCollection.doc(travelId).insert({
            id: travelId,
            startDate: new Date(startDate),
            endDate: new Date(endDate),
            before,
            after,
            departureTime: depart,
            arrivalTime: arrive,
            transportation,
            notes: []
        }).then (() => {
            setStartDate("");
            setEndDate("");
            setBefore("");
            setAfter("");
            setDepartureTime("");
            setArrivalTime("");
            setTransportation("");
        }).catch((error) => {
            console.error("Error adding travels: ", error)
        });
    };
  return (
    <div className="trip-container">
        <h3>Add Travel</h3>
        <div className="trip-form">
        <input type="string" value={before} placeholder="Departing City" onChange={(e) => setBefore(e.target.value)} />
        <input type="string" value={after} placeholder="Arriving City" onChange={(e) => setAfter(e.target.value)} />
        <input type="time" value={departureTime} placeholder="Departing Time" onChange={(e) => setDepartureTime(e.target.value)} />
        <input type="time" value={arrivalTime} placeholder="Arriving Time" onChange={(e) => setArrivalTime(e.target.value)} />
        <input type="string" value={transportation} placeholder="Mode of Transportation" onChange={(e) => setTransportation(e.target.value)} />
        <input type = "date" value={startDate} onChange={(e) => setStartDate(e.target.value)}/>
        <input type = "date" value={endDate} onChange={(e) => setEndDate(e.target.value)}/>
        <button onClick={addTravel}>Add Travel</button>
        </div>
    </div>
  )
}

export default AddTravelForm