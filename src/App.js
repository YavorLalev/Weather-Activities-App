import useLocalStorageState from "use-local-storage-state";
import "./App.css";
import Form from "./Components/Form/Form.js";
import { uid } from "uid";
import List from "./Components/List/List.js";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const isGoodWeather = true;
  activities.filter(() => {});

  function handleAddActivity(newActivity) {
    setActivities([...activities, { ...newActivity, id: uid() }]);
    console.log(activities);
  }

  return (
    <div>
      <List activities={activities} />
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
