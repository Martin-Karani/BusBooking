import React, { useState } from "react";

function DatesBar() {
  const [date, setDate] = useState(new Date());
  console.log(date);
  return (
    <div>
      <p>11</p>
      <p>Feb</p>
      <p>Thurs</p>
    </div>
  );
}

export default DatesBar;
