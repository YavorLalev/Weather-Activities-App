import "./list.css";

export default function List({ activities, isGoodWeather }) {
  console.log("activities", activities);
  console.log("good Weather", activities.isGoodWeather);
  return (
    <>
      <h2>
        {isGoodWeather
          ? "When weather is good do this..."
          : "When weather is bad do this..."}
      </h2>
      <ul>
        {activities.map((activity) => {
          return <li key={activity.id}>{activity.name}</li>;
        })}
      </ul>
    </>
  );
}
