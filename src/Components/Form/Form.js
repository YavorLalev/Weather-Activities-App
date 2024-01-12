import "./form.css";

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

    form.reset();
    form.name.focus();
  }
  return (
    <form className="form" onSubmit={handleEventSubmit}>
      <h2>Add new Activity:</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
      </div>
      <div>
        <label htmlFor="good-weather-activity">Good-weather activity:</label>
        <input
          type="checkbox"
          id="good-weather-activity"
          name="isForGoodWeather"
        />
      </div>
      <button className="button" type="submit">
        Submit
      </button>
    </form>
  );
}
