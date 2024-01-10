export default function Form({ onAddActivity }) {
  return (
    <form>
      <h1>Add new Activity:</h1>
      <label htmlFor="name">Name:</label>
      <input id="name"></input>
      <label htmlFor="good-weather-activity">Good-weather activity:</label>
      <input type="checkbox" id="good-weather-activity" />
      <button type="submit">Submit</button>
    </form>
  );
}
