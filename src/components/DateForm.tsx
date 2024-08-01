import React from "react";
import "../index.css"; // Import the CSS file

interface DateFormProps {
  selectedDate: string;
  onDateChange: (newDate: string) => void;
}

const DateForm: React.FC<DateFormProps> = ({ selectedDate, onDateChange }) => {
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onDateChange(event.target.value);
  };

  return (
    <div className="dateFormContainer">
      <h1>Explore the Universe with APOD API</h1>
      <p>
        Dive into the cosmos with the Astronomy Picture of the Day API. Fetch
        stunning space imagery and rich metadata for your chosen date.
      </p>
      <form className="dateForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="date" className="dateLabel">
          Pick a date and embark on a celestial journey:
        </label>
        <input
          type="date"
          id="date"
          value={selectedDate}
          onChange={handleDateChange}
          className="dateInput"
        />
      </form>
    </div>
  );
};

export default DateForm;
