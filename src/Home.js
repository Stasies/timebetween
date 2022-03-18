import React, { useEffect, useRef, useState } from "react";
import { HomeContainer, HomeWrapper, HomeForm } from "./HomeElements";

const Home = () => {
  let seconds;
  let minutes;
  let hours;
  let days;
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");

  const timeBetween = () => {
    if (date1 && date2) {
      if (date2 > date1) {
        seconds = (new Date(date2) - new Date(date1)) / 1000;
      } else if (date1 > date2) {
        seconds = (new Date(date1) - new Date(date2)) / 1000;
      }
      minutes = seconds / 60;
      hours = minutes / 60;
      days = hours / 24;
      console.log(minutes, hours, days);
      console.log(date1.current);
    }
  };

  return (
    <HomeContainer>
      <h1>Сколько времени между датами</h1>
      <HomeWrapper>
        <h2>Выберите даты</h2>
        <HomeForm onSubmit={timeBetween()}>
          <div className="left">
            <input type="date" onChange={(a) => setDate1(a.target.value)} />
          </div>
          <div className="right">
            <input type="date" onChange={(a) => setDate2(a.target.value)} />
          </div>
        </HomeForm>
        {/* <button onClick={timeBetween()}>click</button> */}
        <div className="text">
          <p>
            Между этими датами {seconds ? seconds : 0} секунд,{" "}
            {minutes ? minutes : 0} минут, {hours ? hours : 0} часов или{" "}
            {days ? days : 0} {days === 1 ? "сутки" : "суток"}.
          </p>
        </div>
      </HomeWrapper>
    </HomeContainer>
  );
};

export default Home;
