import React from "react";

class PluxApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailVisible: localStorage.getItem("emailVisible") || false
    };
    this.newRandomGreeting = this.newRandomGreeting.bind(this);
  }

  newRandomGreeting() {
    this.setState({
      emailVisible: true
    });
    localStorage.setItem("emailVisible", true);
    const greeting = document.getElementById("greeting");
    greeting.innerHTML = this.randomGreeting();
  }

  randomGreeting() {
    const pAdjectives = [
      "pålitelig",
      "passende",
      "pyntelig",
      "perfekt",
      "presis",
      "pragmatisk",
      "prangende",
      "produktiv",
      "prippen",
      "pusete",
      "praktisk",
      "pitoresk",
      "personlig",
      "pikant",
      "poetisk",
      "prikkfri",
      "presentabel",
      "pedantisk",
      "prisverdig",
      "påkostet",
      "punktlig",
      "profesjonell",
      "populær",
      "prekær"
    ];
    const lAdjectives = [
      "liten",
      "lønnsom",
      "lydig",
      "lovende",
      "lykkelig",
      "livlig",
      "lojal",
      "lattermild",
      "lekker",
      "lystig",
      "leken",
      "legitim",
      "lokkende",
      "luftig",
      "lydig",
      "lovende",
      "logisk",
      "liberal",
      "listig",
      "lindrende",
      "livsviktig",
      "lur",
      "lukrativ",
      "lærerik"
    ];
    const randomP = pAdjectives[Math.floor(Math.random() * pAdjectives.length)];
    const randomL = lAdjectives[Math.floor(Math.random() * lAdjectives.length)];
    return `${randomP} ${randomL} ux`;
  }

  render() {
    return (
      <div id="plux-app">
        <div id="greeting" role="button" onClick={this.newRandomGreeting}>
          {this.randomGreeting()}
        </div>
        <a
          href="mailto:hei@plux.no"
          className={`email ${this.state.emailVisible && "visible"}`}
        >
          hei@plux.no
        </a>
      </div>
    );
  }
}

export default PluxApp;
