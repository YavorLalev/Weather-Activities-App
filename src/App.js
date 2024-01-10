import { useState } from "react";
import "./App.css";
import Form from "./Components/Form/Form.js";

function App() {
  const [activities, setActivities] = useState([]);

  function handleAddActivity(newActivity) {
    setActivities([...activities, newActivity]);

    console.log();
  }

  return (
    <div>
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
