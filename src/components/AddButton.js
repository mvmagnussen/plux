import React from "react";

class AddButton extends React.Component {
  render() {
    return <button onClick={() => alert("dude")}>Add button</button>;
  }
}

export default AddButton;
