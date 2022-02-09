import React, { useState } from "react";



function ListingCard( {list, handleRemoveListing} ) {

  const [isFavorite, setFavorite] =useState(true);

  function handleFavoriteClick(){
    setFavorite ((isFavorite) => !isFavorite);

  }
 function handleDeleteClick(){
   //delete from data base
   fetch(`http://localhost:6001/listings/${list.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((r) => r.json())
      .then(() => handleRemoveListing(list.id));
  }
 
  

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={list.image} alt={list.description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button className= "emoji-button favorite active"onClick={handleFavoriteClick}>★</button>
        ) : (
          <button className="emoji-button favorite"onClick={handleFavoriteClick}>☆</button>
        )}
        <strong>{list.description}</strong>
        <span> · {list.location}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
