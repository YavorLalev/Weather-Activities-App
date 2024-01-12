import "./list.css";

export default function List({ activities }) {
  console.log("activities", activities);
  return (
    <ul>
      {activities.map((activity) => {
        return <li key={activity.id}>{activity.name}</li>;
      })}
    </ul>
  );
}
