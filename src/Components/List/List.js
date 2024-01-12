import "./list.css";

export default function List({ activities }) {
  console.log("activities", activities);
  return (
    <>
      <h2>
        {activities.isForGoodWeather === false ? (
          <h2>When weather is good do this...</h2>
        ) : (
          <h2>When weather is bad do this...</h2>
        )}
      </h2>
      <ul>
        {activities.map((activity) => {
          return <li key={activity.id}>{activity.name}</li>;
        })}
      </ul>
    </>
  );
}
