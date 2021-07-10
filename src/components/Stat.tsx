import React from "react";

type props = {
  value: number;
  setValue: (value: number) => void;
  statName: string;
  pointsLeft: number;
};

function Stat({ value, setValue, statName, pointsLeft }: props) {
  return (
    <p>
      <button
        disabled={value < -4}
        onClick={() => {
          setValue(-1);
        }}
      >
        -
      </button>
      <span className="statPicker">
        {statName}:{value}
      </span>
      <button
        disabled={value + 1 > pointsLeft || (value < 0 && pointsLeft < 1)}
        onClick={() => {
          setValue(1);
        }}
      >
        +
      </button>
    </p>
  );
}

export default Stat;
