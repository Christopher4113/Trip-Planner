import {useState,useEffect} from "react"
import "./AddTripForm.css"
import { useCollection } from "@squidcloud/react";
import {Trip} from '../types';

function AddTrip() {
    const [city, setCity] = useState("")
    const [ country, setCountry] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate,setEndDate] = useState("");
    const [countries,setCountries] = useState([]);
    const tripsCollection = useCollection<Trip>("trips")

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all").then((response) => {
            if (response.ok) return response.json();
        }).then((data) => {
            const countryNames = data.map((country : any) => country.name.common)
            setCountries(countryNames)
        }).catch((error) => console.error(error))
    },[]);

    const addTrip = () => {
        const tripId = crypto.randomUUID();
        tripsCollection.doc(tripId).insert({
            id: tripId,
            country,
            city,
            startDate: new Date(startDate),
            endDate: new Date(endDate),
            notes: []
        }).then(() => {
            // Clear the form fields by resetting the state
            setCity("");
            setCountry("");
            setStartDate("");
            setEndDate("");
        }).catch((error) => {
            console.error("Error adding trip:", error);
        });
    };

    return <div className="trip-container">
        <h3>Add Trip</h3>
        <div className="trip-form">
            <select value = {country} onChange={(e) => setCountry(e.target.value)}>
                <option value="" disabled>Select Country</option>
                {countries.map((country) => 
                <option key={country} value = {country}>
                    {country}
                </option>
                )}
            </select>
            <input type="string" value={city} placeholder="city" onChange={(e) => setCity(e.target.value)}/>
            <input type = "date" value={startDate} onChange={(e) => setStartDate(e.target.value)}/>
            <input type = "date" value={endDate} onChange={(e) => setEndDate(e.target.value)}/>
            <button onClick={addTrip}>Add Trip</button>
        </div>
    </div>;
}

export default AddTrip