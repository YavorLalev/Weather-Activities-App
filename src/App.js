import { useState } from "react";
import "./App.css";
import Form from "./Components/Form/Form.js";
import uid from "uid";

function App() {
  const [activities, setActivities] = useState([]);

  function handleAddActivity(newActivity) {
    setActivities([...activities, { ...newActivity, id: uid() }]);
  }

  return (
    <div>
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
