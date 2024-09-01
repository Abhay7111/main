import React, { useState } from 'react';

function Date() {
  const [showDate, setShowDate] = useState(false);

  const handleRadioChange = (event) => {
    if (event.target.value === 'yes') {
      setShowDate(true);
    } else {
      setShowDate(false);
    }
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
