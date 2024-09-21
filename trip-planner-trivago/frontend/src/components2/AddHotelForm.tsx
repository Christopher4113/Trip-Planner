import "./AddHotelForm.css";
import { useCollection } from "@squidcloud/react";
import {Hotel} from '../types';
import {useState,useEffect} from "react"

const AddHotelForm = () => {
    const [hotelName,setHotelName] = useState("");
    const [location,setLocation] = useState("");
    const [cost,setCost] = useState("")
    const [city,setCity] = useState("")
    const [country, setCountry] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate,setEndDate] = useState("");
    const [countries,setCountries] = useState([]);
    const hotelCollection = useCollection<Hotel>("hotels")

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all").then((response) => {
            if (response.ok) return response.json();
        }).then((data) => {
            const countryNames = data.map((country: any) => country.name.common)
            setCountries(countryNames)
        }).catch((error) => console.error(error))
    },[]);
    const addHotel = () => {
        const hotelId = crypto.randomUUID();
        const parsedCost = parseFloat(cost); // Convert the cost to a number

        if (isNaN(parsedCost)) {
            console.error("Invalid cost value");
            return; // Prevent submission if cost is not a valid number
        }
        hotelCollection.doc(hotelId).insert({
            id: hotelId,
            country,
            city,
            cost: parsedCost,
            hotelName,
            location,
            startDate: new Date(startDate),
            endDate: new Date(endDate),
            notes: []
        }).then(() => {
            setCity("");
            setCountry("");
            setStartDate("");
            setEndDate("");
            setCost("");
            setHotelName("");
            setLocation("");
        }).catch((error) => {
            console.error("Error adding hotel: ",error)
        });
    };



  return (
    <div className="trip-container">
        <h3>Add Hotel</h3>
        <div className="trip-form">
            <select value={country} onChange={(e) => setCountry(e.target.value)}>
                <option value="" disabled>Select Country</option>
                {countries.map((country) => 
                <option key={country} value = {country}>
                    {country}
                </option>
                )}
            </select>
            <input type="string" value={city} placeholder="city" onChange={(e) => setCity(e.target.value)}/>
            <input type="number" value={cost} placeholder="Enter cost" onChange={(e) => setCost(e.target.value)}/>
            <input type="string" value={hotelName} placeholder="Enter Hotel Name" onChange={(e) => setHotelName(e.target.value)} />
            <input type="string" value={location} placeholder="Enter Address" onChange={(e) => setLocation(e.target.value)} />
            <input type = "date" value={startDate} onChange={(e) => setStartDate(e.target.value)}/>
            <input type = "date" value={endDate} onChange={(e) => setEndDate(e.target.value)}/>
            <button onClick={addHotel}>Add Hotel</button>
        </div>
    </div>
  );
}

export default AddHotelForm