import React, { useState } from 'react';

function Date() {
  const [showDate, setShowDate] = useState(false);

  const handleRadioChange = (event) => {
    setShowDate(event.target.value === 'yes');
  };

  return (
    <form>
      <label>
        <input
          type="radio"
          name="option"
          value="yes"
          onChange={handleRadioChange}
        />
        Show Date
      </label>
      <label>
        <input
          type="radio"
          name="option"
          value="no"
          onChange={handleRadioChange}
        />
        Hide Date
      </label>

      {showDate && (
        <div>
          <label htmlFor="dateInput">Select Date:</label>
          <input type="date" id="dateInput" name="date" />
        </div>
      )}
    </form>
  );
}

export default Date;
