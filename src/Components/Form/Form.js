export default function Form({ onAddActivity }) {
  function handleEventSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onAddActivity(data);
  }
  return (
    <form onSubmit={handleEventSubmit}>
      <h1>Add new Activity:</h1>
      <label htmlFor="name">Name:</label>
      <input id="name" />
      <label htmlFor="good-weather-activity">Good-weather activity:</label>
      <input type="checkbox" id="good-weather-activity" />
      <button type="submit">Submit</button>
    </form>
  );
}
