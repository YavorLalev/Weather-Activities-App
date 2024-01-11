export default function Form({ onAddActivity }) {
  function handleEventSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const data = {
      name: form.elements.name.value,
      isForGoodWeather: form.elements.isForGoodWeather.checked,
    };
    onAddActivity(data);
    console.log(data);

    event.target.reset();
    event.target.elements.name.focus();
  }
  return (
    <form onSubmit={handleEventSubmit}>
      <h1>Add new Activity:</h1>
      <label htmlFor="name">Name:</label>
      <input id="name" name="name" />
      <label htmlFor="good-weather-activity">Good-weather activity:</label>
      <input
        type="checkbox"
        id="good-weather-activity"
        name="isForGoodWeather"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
