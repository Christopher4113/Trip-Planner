import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import './App.css';
import AddTrip from './components/AddTripForm';
import TripList from './components/TripList';
import { useCollection, useQuery } from '@squidcloud/react';
import { Trip, Hotel, Budget, Travel } from './types';
import AskAI from './components/AskAI';
import AddHotelForm from './components2/AddHotelForm';
import HotelList from './components2/HotelList';
import AddBudgetFrom from './components3/AddBudgetFrom';
import BudgetList from './components3/BudgetList';
import AddTravelForm from './components4/AddTravelForm';
import TravelList from './components4/TravelList';
import Login from './Login';


function App() {
  // Trip collection and query
  const tripCollection = useCollection<Trip>("trips");
  const trips = useQuery(tripCollection.query());

  // Hotel collection and query
  const hotelCollection = useCollection<Hotel>("hotels");
  const hotels = useQuery(hotelCollection.query());

  //Budget collection and query
  const budgetCollection = useCollection<Budget>("budgets");
  const budgets = useQuery(budgetCollection.query());

  //Travel collection and query
  const travelCollection = useCollection<Travel>("travels");
  const travels = useQuery(travelCollection.query());

  // Helper function to find a hotel by id
  const findHotel = (id: string) => {
    return hotels.data?.find((hotel) => hotel.data.id === id);
  };

  // Helper function to find a trip by id
  const findTrip = (id: string) => {
    return trips.data?.find((trip) => trip.data.id === id);
  };

  //Helper function to find a budget by id
  const findBudget = (id: string) => {
    return budgets.data?.find((budget) => budget.data.id === id);
  };
  
  //Helper function to find a travel by id
  const findTravel = (id: string) => {
    return travels.data?.find((travel) => travel.data.id === id);
  }

  // Trip functions
  const onDelete = (id: string) => {
    const trip = findTrip(id);
    if (trip) trip.delete();
  };

  const onAddNote = (tripId: string, note: string) => {
    const trip = findTrip(tripId);
    if (!trip) return;
    const notes = trip.data.notes;
    notes.push(note);
    trip.update({ notes });
  };

  const onDeleteNote = (tripId: string, noteIndex: number) => {
    const trip = findTrip(tripId);
    if (!trip) return;
    const notes = trip.data.notes;
    trip.update({
      notes: notes.filter((_, index) => index !== noteIndex),
    });
  };

  // Hotel functions
  const onDeleteHotel = (id: string) => {
    const hotel = findHotel(id);
    if (hotel) hotel.delete();
  };

  const onAddNoteHotel = (hotelId: string, note: string) => {
    const hotel = findHotel(hotelId);
    if (!hotel) return;
    const notes = hotel.data.notes;
    notes.push(note);
    hotel.update({ notes });
  };

  const onDeleteNoteHotel = (hotelId: string, noteIndex: number) => {
    const hotel = findHotel(hotelId);
    if (!hotel) return;
    const notes = hotel.data.notes;
    hotel.update({
      notes: notes.filter((_, index) => index !== noteIndex),
    });
  };
  //Budget functions
  const onDeleteBudget = (id: string) => {
    const budget = findBudget(id);
    if (budget) budget.delete();
  };
  //Travel functions
  const onDeleteTravel = (id: string) => {
    const travel = findTravel(id);
    if (travel) travel.delete();
  };

  const onAddNoteTravel = (travelId: string, note: string) => {
    const travel = findTravel(travelId);
    if (!travel) return;
    const notes = travel.data.notes;
    notes.push(note);
    travel.update({ notes });
  };

  const onDeleteNoteTravel = (travelId: string, noteIndex: number) => {
    const travel = findTravel(travelId);
    if (!travel) return;
    const notes = travel.data.notes;
    travel.update({
      notes: notes.filter((_, index) => index !== noteIndex),
    });
  };

  return (
    <Router>
      <Routes>
        {/* Home page will load first */}
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />

        {/* Route to the trip management page */}
        <Route
          path="/trip-management"
          element={
            <div className="card">
              <AskAI />
              <AddTrip />
    
                <TripList
                  trips={trips.data.map((trip) => trip.data)}
                  onDelete={onDelete}
                  onAddNote={onAddNote}
                  onDeleteNote={onDeleteNote}
                />
        
            </div>
          }
        />

        {/* Route to the hotel management page */}
        <Route
          path="/hotel-management"
          element={
            <div className="card2">
              <AskAI />
              <AddHotelForm />
              
                <HotelList
                  hotels={hotels.data.map((hotel) => hotel.data)}
                  onDeleteHotel={onDeleteHotel}
                  onAddNoteHotel={onAddNoteHotel}
                  onDeleteNoteHotel={onDeleteNoteHotel}
                />
          
            </div>
          }
        />

        {/* Placeholder for budget management */}
        <Route
          path="/budget-management"
          element={
            <div className="card3">
              <AskAI />
              <AddBudgetFrom />
              <BudgetList 
              budgets={budgets.data.map((budget) => budget.data)}
              onDeleteBudget={onDeleteBudget}
              />
            </div>
          }
        />
        <Route
          path="/travel-management"
          element={
            <div className="card4">
              <AskAI />
              <AddTravelForm/>
              <TravelList 
                travels={travels.data.map((travel) => travel.data)}
                onDeleteTravel={onDeleteTravel}
                onAddNoteTravel={onAddNoteTravel}
                onDeleteNoteTravel={onDeleteNoteTravel}
              />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
