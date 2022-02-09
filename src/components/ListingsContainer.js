import React from "react";
import ListingCard from "./ListingCard";

// import ListingCard from "./ListingCard";

function ListingsContainer({ listings, handleRemoveListing, userSearchInput }) {

  console.log(userSearchInput)
  const handleSearch = listings.filter((listing) => 
  listing.description.toLowerCase().includes(userSearchInput.toLowerCase()))


const maplistings = handleSearch.map((list) => 
<ListingCard
key = {list.id}
list = {list}
handleRemoveListing={handleRemoveListing}
handlesearch = {handleSearch}
/>)



  return (
    <main>
      <ul className="cards">
        {maplistings}
      </ul>
    </main>
  );

  }
export default ListingsContainer;
