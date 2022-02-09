import React from "react";
import Search from "./Search";

function Header( {onSubmitSearch} ) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSubmitSearch={onSubmitSearch} />
    </header>
  );
}

export default Header;
