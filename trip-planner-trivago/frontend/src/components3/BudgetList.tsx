import { Budget } from "../types"
import BudgetCard from "./Budget"
import './Budget.css';

type Props = {
    budgets: Budget[];
    onDeleteBudget: (id: string) => void;
}

const BudgetList = ({budgets,onDeleteBudget}:Props) => {
  return (
    <div className="trip-list-container">
        {budgets && budgets.map((budget,index) => <BudgetCard 
        key={index}
        budget={budget}
        index={index}
        onDeleteBudget={onDeleteBudget}
        />)}
    </div>
  )
}

export default BudgetList