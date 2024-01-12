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
  const activityForGoodWeather = activities.filter((activity) => {
    return activity.isForGoodWeather === isGoodWeather;
  });

  function handleAddActivity(newActivity) {
    setActivities([...activities, { ...newActivity, id: uid() }]);
  }

  return (
    <div>
      <List activities={activityForGoodWeather} />
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
