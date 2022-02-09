import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
const [listings, setList] = useState([])
const [userSearchInput, setSearchInput] = useState("")

useEffect(() => {
  fetch("http://localhost:6001/listings")
  .then((response) => response.json())
  .then((data) => {
    setList(data);
  });
}, []);

function handleRemoveListing(id) {
  const newListings = listings.filter((listing) => listing.id !== id);
  setList(newListings);
}

function onSubmitSearch(searchTerm){
  setSearchInput(searchTerm)
}

  return (
    <div className="app">
      <Header onSubmitSearch={onSubmitSearch} />
      <ListingsContainer listings={listings} userSearchInput={userSearchInput} handleRemoveListing={handleRemoveListing}/>
    </div>
  );
}

export default App;
