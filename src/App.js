import useLocalStorageState from "use-local-storage-state";
import "./App.css";
import Form from "./Components/Form/Form.js";
import { uid } from "uid";
import List from "./Components/List/List.js";
import { useState, useEffect } from "react";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const [weather, setWeather] = useState(null);

  const activityForGoodWeather = activities.filter((activity) => {
    return activity.isForGoodWeather === weather?.isGoodWeather;
  });

  async function getWeather() {
    const response = await fetch(
      "https://example-apis.vercel.app/api/weather/"
    );
    const data = await response.json();

    setWeather(data);
  }

  useEffect(() => {
    const interval = setInterval(getWeather, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  function handleAddActivity(newActivity) {
    setActivities([...activities, { ...newActivity, id: uid() }]);
  }

  function handleDeleteActivity(id) {
    setActivities(activities.filter((activity) => activity.id !== id));
  }
  return (
    <div className="app">
      <header>
        <span>
          {weather === null
            ? `Data is loading`
            : `${weather.condition}  ${weather.temperature}°`}
        </span>
      </header>
      <main className="app__main">
        <List
          activities={activityForGoodWeather}
          isGoodWeather={weather?.isGoodWeather}
          onDeleteActivity={handleDeleteActivity}
        />
        <Form onAddActivity={handleAddActivity} />
      </main>
    </div>
  );
}

export default App;
