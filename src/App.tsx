import React from "react";
import "./App.css";
import Stat from "./components/Stat";
import Note from "./components/Note";
const COOKIENAME = "ccsb0.2.0";
function getStatCost(value: number): number {
  if (value === 0) {
    return 0;
  } else if (value < 0) {
    return value * 1;
  } else return value + getStatCost(value - 1);
}

function setCookie(cname: string, cvalue: string, exdays: number) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname: string) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function App() {
  const [points, setPoints] = React.useState(25); //TODO levels
  const [currentPoints, setCurrentPoints] = React.useState(0);
  const [level, setLevel] = React.useState(1); //TODO levels

  const [physicalDefense, setPhysicalDefense] = React.useState(5);
  const [mentalDefense, setMentalDefense] = React.useState(5);
  const [health, setHealth] = React.useState(5);

  const [precision, setPrecision] = React.useState(0);
  const [power, setPower] = React.useState(0);

  const [wits, setWits] = React.useState(0);
  const [wisdom, setWisdom] = React.useState(0);

  const [speed, setSpeed] = React.useState(0);
  const [stamina, setStamina] = React.useState(0);

  // add super power stats here later

  const [jobSkill, setJobSkill] = React.useState(0);
  const [jobSkill2, setjobSkill2] = React.useState(0);

  const [job, setJob] = React.useState("");
  const [name, setName] = React.useState("");
  const [items, setItems] = React.useState(
    `$5 in ones
watch
housing
`
  );
  function formatDataToSave(): string {
    return JSON.stringify({
      precision: precision,
      power: power,
      wits: wits,
      wisdom: wisdom,
      speed: speed,
      stamina: stamina,
      jobSkill: jobSkill,
      jobSkill2: jobSkill2,
      job: job,
      name: name,
      items: items,
    });
  }
  React.useLayoutEffect(() => {
    const stats = JSON.parse(getCookie(COOKIENAME));
    console.dir(stats);
    if (stats) {
      setPrecision(stats.precision);
      setPower(stats.power);
      setWits(stats.wits);
      setWisdom(stats.wisdom);
      setSpeed(stats.speed);
      setStamina(stats.stamina);
      setJobSkill(stats.jobSkill);
      setjobSkill2(stats.jobSkill2);
      setName(stats.name);
      setJob(stats.job);
      setItems(stats.items);
    }
  }, []);

  React.useEffect(() => {
    setCurrentPoints(
      getStatCost(precision) +
        getStatCost(power) +
        getStatCost(wits) +
        getStatCost(wisdom) +
        getStatCost(speed) +
        getStatCost(stamina) +
        getStatCost(jobSkill) +
        getStatCost(jobSkill2)
    );
  }, [precision, power, wits, wisdom, speed, stamina, jobSkill, jobSkill2]);

  React.useEffect(() => {
    setHealth(
      stamina + Math.ceil((wisdom * 5) / 8) + Math.ceil((power * 5) / 8) + 4
    );
  }, [stamina, wisdom, power]);
  React.useEffect(() => {
    setMentalDefense(5 + Math.ceil(wits / 2) + Math.floor(speed / 2));
  }, [speed, wits]);
  React.useEffect(() => {
    setPhysicalDefense(5 + Math.ceil(precision / 2) + Math.floor(speed / 2));
  }, [speed, precision]);

  return (
    <div className="App">
      <span className="topBar">
        <span className="pointsLeft">
          {currentPoints} points used out of {points} total
        </span>
        <span className="defence">
          <div>Physical Defense:{physicalDefense}</div>
          <div>Mental Defense: {mentalDefense}</div>
          <div>Health: {health}</div>
        </span>
        <span className="Save">
          <button
            onClick={() => {
              setCookie(COOKIENAME, formatDataToSave(), 13);
            }}
          >
            Save Character
          </button>
        </span>
      </span>
      <div className="stats">
        <span className="physical">
          <h3>Physical stats</h3>
          <Stat
            value={precision}
            statName="Precision"
            setValue={(mod: number) => {
              setPrecision(precision + mod);
            }}
            pointsLeft={points - currentPoints}
          />
          <Stat
            value={power}
            statName="Power"
            setValue={(mod: number) => {
              setPower(power + mod);
            }}
            pointsLeft={points - currentPoints}
          />
        </span>
        <span className="mental">
          <h3>Mental stats</h3>
          <Stat
            value={wits}
            statName="Wits"
            setValue={(mod: number) => {
              setWits(wits + mod);
            }}
            pointsLeft={points - currentPoints}
          />
          <Stat
            value={wisdom}
            statName="Wisdom"
            setValue={(mod: number) => {
              setWisdom(wisdom + mod);
            }}
            pointsLeft={points - currentPoints}
          />
        </span>
        <span className="inherent">
          <h3>Inherent stats</h3>
          <Stat
            value={speed}
            statName="Speed"
            setValue={(mod: number) => {
              setSpeed(speed + mod);
            }}
            pointsLeft={points - currentPoints}
          />
          <Stat
            value={stamina}
            statName="Stamina"
            setValue={(mod: number) => {
              setStamina(stamina + mod);
            }}
            pointsLeft={points - currentPoints}
          />
        </span>
      </div>
      <div className="bottom">
        <span className="powers">
          <h3>Powers</h3>
          <p>Not available for this game.</p>
        </span>
        <div className="job">
          <h3>Job stats</h3>
          <Note name="Job" setValue={setJob} value={job} />
          <Stat
            value={jobSkill}
            statName="Primary Profession Skill"
            setValue={(mod: number) => {
              setJobSkill(jobSkill + mod);
            }}
            pointsLeft={points - currentPoints}
          />
          <Stat
            value={jobSkill2}
            statName="Secondary Profession Skill"
            setValue={(mod: number) => {
              setjobSkill2(jobSkill2 + mod);
            }}
            pointsLeft={points - currentPoints}
          />
        </div>
        <span className="notes">
          <h3>Notes</h3>
          <Note name="Name" setValue={setName} value={name} />
          <Note name="Items" setValue={setItems} value={items} longNote />
        </span>
      </div>
    </div>
  );
}

export default App;
