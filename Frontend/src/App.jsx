import axios from 'axios';
import React, { useState, useEffect } from 'react';


function App() {
  const [passengers, setPassengers] = useState([ ]);

  const [search, setSearch] = useState('');
  useEffect(()=> {
    if(search.trim() !== ''){
      axios
      .get(`http://localhost:5050/api/passengers/search?name=${search}`)
      .then((res)=> {
        setPassengers(res.data);
      })
      .catch((err)=> console.error("Error Fetching Passengers:", err));

    }else{
      setPassengers([]);
    }
 
    }, [search]);
//  const filteredPassengers = passengers.filter((p)=>
//   p.name.toLowerCase().includes(search.toLocaleLowerCase())
//  )
 return (
  <div style={{padding: "1 rem", fontFamily: "Arial, sans-serif"}}>
    <h2>Titanic Passenger Search</h2>
    <input 
    type='text'
    value={search}
    onChange={(e)=> setSearch(e.target.value)}
    placeholder='Search Passenger...'
    style={{padding: "0.5rem", width: "300px", marginBottom: "1rem"}}
    />
    <ul>
      {passengers.length > 0 ? (
      passengers.map((p, index) => (
        <li key={index}>
          <strong>{p.name || "Unknown" }</strong> -Age: {p.age || "N/A"} -Status: {p.status || "N/A"} -Sex: {p.fare || "N/A"} -Pclass: {p.pclass || "N/A"} -Fare{p.fare ||"N/A"} -Cabin: {p.cabin || "N/A"}




        </li>
      ))
    ) : (
      <li>No passengers found.</li>
    )}
    </ul>
    
      </div>
 );
}

export default App;