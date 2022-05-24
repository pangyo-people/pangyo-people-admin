import React, { useState } from "react";
import "../css/Header.css";
import Organizations from "./Organizations";
import Events from "./Events";


function Admin() {
  let [page, setPage] = useState(0);

  const categorys = [
    { idx: "0", name: "Events" },
    { idx: "1", name: "Organization" },
  ];

  const categoryList = categorys.map((element, idx) => (
    <li
      className={`${page === idx ? "active" : ""}`}
      onClick={() => onClickHandler(idx)}
      key={idx}
    >
      {element.name}
    </li>
  ));

  const obj = {
    0: <Events />,
    1: <Organizations />,
  };
  const onClickHandler = (id) => {
    setPage(id);
  };

  return (
    <div>
      <header className="header">
        <div className="title" onClick={()=>{window.location.replace("/"); setPage(0);}}>
          Pangyo-people
          {/* <Link to="/">Pangyo-people</Link> */}
        </div>
      </header>

      <div className="container">
        <div className="category">
          <div className="org-category-list">
            <ul>{categoryList}</ul>
          </div>
        </div>
        {obj[page]}
      </div>
    </div>
  );
}

export default Admin;
