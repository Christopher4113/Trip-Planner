import "./AddBudgetForm.css";
import { useCollection } from "@squidcloud/react";
import {Budget} from '../types';
import {useState,useEffect} from "react"

const AddBudgetFrom = () => {
    const [cost, setCost] = useState("");
    const [city,setCity] = useState("")
    const [country, setCountry] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate,setEndDate] = useState("");
    const [countries,setCountries] = useState([]);
    const budgetCollection = useCollection<Budget>("budgets")

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all").then((response) => {
            if (response.ok) return response.json();
        }).then((data) => {
            const countryNames = data.map((country: any) => country.name.common)
            setCountries(countryNames)
        }).catch((error) => console.error(error))
    },[]);

    const addBudget = () => {
        const budgetId = crypto.randomUUID();
        const parsedCost = parseFloat(cost);

        if (isNaN(parsedCost)) {
            console.error("Invalid cost value");
            return;
        }
        budgetCollection.doc(budgetId).insert({
            id: budgetId,
            country,
            city,
            cost: parsedCost,
            startDate: new Date(startDate),
            endDate: new Date(endDate)
        }).then(() => {
            setCity("");
            setCountry("");
            setStartDate("");
            setEndDate("");
            setCost("");
        }).catch((error) => {
            console.error("Error adding hotel: ",error)
        });
    };



  return (
    <div className="trip-container">
        <h3>Add Budget</h3>
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
            <input type="number" value={cost} placeholder="Enter Budget" onChange={(e) => setCost(e.target.value)}/>
            <input type = "date" value={startDate} onChange={(e) => setStartDate(e.target.value)}/>
            <input type = "date" value={endDate} onChange={(e) => setEndDate(e.target.value)}/>
            <button onClick={addBudget}>Add Budget</button>
        </div>
    </div>
  );
}

export default AddBudgetFrom