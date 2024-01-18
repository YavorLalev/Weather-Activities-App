import "./list.css";

export default function List({ activities, isGoodWeather, onDeleteActivity }) {
  return (
    <>
      <h3>
        {isGoodWeather
          ? "🌞 It looks like a nice weather outside! Maybe you can:"
          : "☔️ The weather is not good today! Try one of the following activities:"}
      </h3>
      <ul>
        {activities.map((activity) => {
          return (
            <li key={activity.id} className={isGoodWeather ? "light" : "dark"}>
              {activity.name}
              <button
                type="button"
                className="delete-button"
                onClick={() => onDeleteActivity(activity.id)}
              >
                {" "}
                🆇
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
