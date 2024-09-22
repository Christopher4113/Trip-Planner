import './Home.css';
import { Link } from 'react-router-dom';
import { CalendarDaysIcon,Building,CreditCard,Plane} from "lucide-react"

const Home = () => {
  return (
    <div className='main-screen'>
      <h1 className='neon-text'>Welcome to the Trip Management App</h1>
      <div className='o1'>
        <div className='option1'>
          <h2>Itnerary Planner</h2>
          <p>Plan your daily activities with ease</p>
          <CalendarDaysIcon className="h-12 w-12 mb-4" />
          <p>Organize your trip day by day. Add activities, set times, and keep everything in order.</p>
          <Link to="/trip-management">
              <button className="realistic-button">
                  Plan Itnerary
              </button>
          </Link>
        </div>
      </div>
      <div className='o2'>
        <div className='option2'>
          <h2>Hotel Manager</h2>
          <p>Keep track of your accommodations</p>
          <Building className="h-12 w-12 mb-4"></Building>
          <p>Manage your hotel bookings, compare prices, and store important reservation details.</p>
          <Link to="/hotel-management">
            <button className='realistic-button'>
              Manage Stay
            </button>
          </Link>
        </div>
      </div>
      <div className='o3'>
        <div className='option3'>
          <h2>Budget Manager</h2>
          <p>Stay on top of your travel expenses</p>
          <CreditCard className='h-12 w-12 mb-4'></CreditCard>
          <p>Set a budget for your trip to ensure you're not overspending.</p>
          <Link to="/budget-management">
            <button className='realistic-button'>
              Manage Budget
            </button>
          </Link>
        </div>
      </div>
      <div className='o4'>
        <div className='option4'>
        <h2>Travel Manager</h2>
          <p>Keep track of your transportation</p>
          <Plane className='h-12 w-12 mb-4'></Plane>
          <p>Manage your flights, car rentals and boat travels.</p>
          <Link to="/travel-management">
            <button className='realistic-button'>
              Manage Travel
            </button>
          </Link>
        </div>
      </div>
     
      
    </div>
  );
};

export default Home;
