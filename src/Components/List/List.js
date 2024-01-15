import "./list.css";

export default function List({ activities, isGoodWeather, onDeleteActivity }) {
  // // function badWeather() {
  //   if(isGoodWeather === false) {
  //     return
  //   }
  // }

  return (
    <>
      <h2>
        {isGoodWeather
          ? "It looks like a nice weather outside! Maybe you can:"
          : "The weather is not good today! Try one of the following activities:"}
      </h2>
      <ul>
        {activities.map((activity) => {
          return (
            <li key={activity.id}>
              {activity.name}
              <button
                type="button"
                className="delete-button"
                onClick={() => onDeleteActivity(activity.id)}
              >
                {" "}
                🗑️
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
