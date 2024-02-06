import React, { useEffect, useState } from "react";

const Calendar = () => {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  const [yearChoice, setYearChoice] = useState([2024, 2025, 2026]);
  const [monthYearIndex, setMonthYearIndex] = useState([
    today.getMonth(),
    yearChoice[0],
  ]);
  const [dayName, setDayName] = useState(["", ""]);
  const [firstDay, setFirstDay] = useState();
  const [secondDay, setSecondDay] = useState();
  const [arrayDays, setArrayDays] = useState([]);

  useEffect(() => {
    const currentMonth = today.toLocaleDateString().split("/")[1][1];
    const currentYear = today.getFullYear();
    const maxYear = currentYear + 2;
    setYearChoice([currentYear, currentYear + 1, maxYear]);
    setMonthYearIndex([currentMonth - 1, yearChoice[0]]);
  }, []);

  const month = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Aout",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];
  let nbrMonth = 30;

  useEffect(() => {
    if (secondDay < firstDay) {
      let dayChange = secondDay;
      setSecondDay(firstDay);
      setFirstDay(dayChange);
    }
    totalPrice()
  }, [secondDay]);

  useEffect(() => {
    let year = new Date().getFullYear();
    switch (monthYearIndex[0]) {
      case 0:
        nbrMonth = 31;
        break;
      case 1:
        nbrMonth = year % 4 == 0 ? 29 : 28;
        break;
      case 2:
        nbrMonth = 31;
        break;
      case 3:
        nbrMonth = 30;
        break;
      case 4:
        nbrMonth = 31;
        break;
      case 5:
        nbrMonth = 30;
        break;
      case 6:
        nbrMonth = 31;
        break;
      case 7:
        nbrMonth = 31;
        break;
      case 8:
        nbrMonth = 30;
        break;
      case 9:
        nbrMonth = 31;
        break;
      case 10:
        nbrMonth = 30;
        break;
      case 11:
        nbrMonth = 31;
        break;

      default:
        break;
    }
    const daysArray = Array.from({ length: nbrMonth }, (_, index) => index + 1);
    setArrayDays(daysArray);
  }, [monthYearIndex[0]]);

  const removeDate = () => {
    setFirstDay("");
    setSecondDay("");
    dayName[1].style.backgroundColor = "";
    dayName[1].style.color = "";
    dayName[0].style.backgroundColor = "";
    dayName[0].style.color = "";
  };

  const colorReservation = (e) => {
    const day = e.target;

    if (firstDay && secondDay) {
      removeDate();
    }

    if (!firstDay) {
      if (day.classList.contains("disabled")) {
        console.log("afficher paragraphe");
      } else {
        const startDateDay = new Date(
          monthYearIndex[1],
          monthYearIndex[0],
          day.textContent
        );
        setFirstDay(startDateDay);
        setDayName([day, dayName[1]]);
      }
    } else if (firstDay && !secondDay) {
      if (day.classList.contains("disabled")) {
        console.log("afficher paragraphe");
      } else {
        const lastDateDay = new Date(
          monthYearIndex[1],
          monthYearIndex[0],
          day.textContent
        );
        setSecondDay(lastDateDay);
        setDayName([dayName[0], day]);
      }
    }
  };

  const colorDateBetween = (day) => {
    const dayCompare = new Date(monthYearIndex[1], monthYearIndex[0], day);
    const dayYear = dayCompare.getFullYear();
    const dayMonth = dayCompare.getMonth();
    const dayDate = dayCompare.getDate();

    if (firstDay) {
      const dayStartYear = firstDay.getFullYear();
      const dayStartMonth = firstDay.getMonth();
      const dayStart = firstDay.getDate();
      if (dayMonth === dayStartMonth && dayDate === dayStart && dayYear === dayStartYear) {
        return ["#141342", "white"];
      } else if (secondDay) {
        const dayEndYear = secondDay.getFullYear();
        const dayEndMonth = secondDay.getMonth();
        const dayEnd = secondDay.getDate();
        if ((dayMonth === dayEndMonth && dayDate === dayEnd &&dayYear ===dayEndYear) || (dayCompare > firstDay && dayCompare < secondDay)) {
          return ["#141342", "white"];
        }else{
          return ["" , ""]
        }
      }else {
        return ["", ""];
      }

    } else {
      return ["", ""];
    }
  };

  const monthYearIndexDown = () => {
    let currentMonth = monthYearIndex[0];
    let currentYear = monthYearIndex[1];
    if (currentMonth == 0) {
      if (currentYear == yearChoice[0]) {
        currentMonth = 0;
        currentYear = yearChoice[0];
      } else {
        currentMonth = 11;
        currentYear -= 1;
        document.getElementById("yearSelect").value = currentYear;
      }
    } else {
      currentMonth -= 1;
    }
    return [currentMonth, currentYear];
  };
  const monthYearIndexUp = () => {
    let currentMonth = monthYearIndex[0];
    let currentYear = monthYearIndex[1];
    if (currentMonth == 11) {
      if (currentYear == yearChoice[2]) {
        currentMonth = 11;
        currentYear = yearChoice[2];
      } else {
        currentMonth = 0;
        currentYear += 1;
        document.getElementById("yearSelect").value = currentYear;
      }
    } else {
      currentMonth += 1;
    }
    return [currentMonth, currentYear];
  };

  const transformDate = (date) => {
    if (date) {
      return date.toLocaleDateString();
    } else {
      return today.toLocaleDateString();
    }
  };

  const totalPrice=()=>{
    const pricePernight=280
    const night=(secondDay-firstDay)/1000/360/24/3600

    console.log(night);
  }

  return (
    <div className="calendar-container">
      <div className="calendar">
        <h2 className="title">Choisissez dès maintenant vos dates !</h2>
        <div className="choice-month">
          <div className="month">
            <h2 className="month-text">{month[monthYearIndex[0]]}</h2>
          </div>
          <select
            className="year-select"
            id="yearSelect"
            onChange={(e) =>
              setMonthYearIndex([monthYearIndex[0], e.target.value])
            }
          >
            <option value="an" disabled style={{ backgroundColor: "#485a4f" }}>
              année
            </option>
            <option value={yearChoice[0]}>{yearChoice[0]}</option>
            <option value={yearChoice[1]}>{yearChoice[1]}</option>
            <option value={yearChoice[2]}>{yearChoice[2]}</option>
          </select>
          <div className="btn-choice-month">
            <div
              className="img"
              onClick={() => setMonthYearIndex(monthYearIndexDown())}
            >
              <img src="./assets/img/angle-up-solid (1).svg" alt="" />
            </div>
            <div
              className="img"
              onClick={() => setMonthYearIndex(monthYearIndexUp())}
            >
              <img src="./assets/img/angle-up-solid (1).svg" alt="" />
            </div>
          </div>
        </div>
        <div className="calendar-date">
          {arrayDays.map((day) => (
            <div
              className={`day ${
                new Date(monthYearIndex[1], monthYearIndex[0], day) < tomorrow
                  ? "disabled"
                  : ""
              }`}
              key={day}
              onClick={colorReservation}
              style={{
                backgroundColor: colorDateBetween(day)[0],
                color: colorDateBetween(day)[1],
              }}
            >
              {day}
            </div>
          ))}
        </div>
        <div className="btn-reserve">
          <button>Réservez</button>
          <div className="text-reserve">
            <p>
              du <span> {transformDate(firstDay)} </span> au{" "}
              <span>{transformDate(secondDay)}</span>{" "}
            </p>
            <p>
              prix: <span>432$</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
