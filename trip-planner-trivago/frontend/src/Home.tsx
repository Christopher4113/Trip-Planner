import './Home.css';
import { Link } from 'react-router-dom';
import { CalendarDaysIcon} from "lucide-react"

const Home = () => {
  return (
    <div className='main-screen'>
      <h1 className='neon-text'>Welcome to the Trip Management App</h1>
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
  );
};

export default Home;
