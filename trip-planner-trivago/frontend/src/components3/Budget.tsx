import {format} from "date-fns"
import {Budget} from "../types"
import { useState } from "react"
import './Budget.css'

type Props = {
    budget: Budget;
    onDeleteBudget: (id: string) => void;
    index: number;
}


const BudgetCard = ({budget,onDeleteBudget,index}:Props) => {
  return (
    <div className="trip-card" key={index}>
        <h4>
            <span>{format(budget.startDate, "PPP")}-{format(budget.endDate, "PPP")}</span>
            <button className="country-button">
                {budget.country}
            </button>
            <button className="city-button">
                {budget.city}
            </button>
            <button className="budget-button">
                Budget: ${budget.cost}
            </button>
            <button className="delete-button" onClick={() => onDeleteBudget(budget.id)}>
                Delete
            </button>
        </h4>
    </div>
  );
}

export default BudgetCard