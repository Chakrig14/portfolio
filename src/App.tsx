import { useState } from "react";
import Login from "./Pages/Login/Login"

function App() {
  const [dateVal, setDate] = useState<number | string>('');
  const [age, setAge] = useState<string>('');
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  }

  const handleCalculate = () => {
    const today = new Date();
    const inputDate = new Date(dateVal);
    let year = today.getFullYear() - inputDate.getFullYear();
    let month = (today.getMonth() - inputDate.getMonth());
    let date = (today.getDate() - inputDate.getDate());
    if (date < 0) {
      month -= 1;
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      console.log(prevMonth);
      date += prevMonth.getDate();
    }
    if (month < 0) {
      year -= 1;
      month += 12
    }
    setAge(`${year} Years ${month} Months ${date} Days`);
  }

  return (
    <>
      <p>{age}</p>
      <input type='date' value={dateVal} onChange={handleDateChange} />
      <button onClick={handleCalculate}>Calculate</button>
      <Login />
    </>
  )
}

export default App
