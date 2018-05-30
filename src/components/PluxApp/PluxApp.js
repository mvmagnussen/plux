import React from "react";

class PluxApp extends React.Component {
  render() {
    return (
      <div className="plux-app">
        <button onClick={() => alert("Plux dude")}>PLUX</button>
      </div>
    );
  }
}

export default PluxApp;
