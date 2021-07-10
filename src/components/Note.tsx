import React from "react";
type props = {
  value: string;
  setValue: (value: string) => void;
  name: string;
  longNote?: boolean;
};
function Note({ value, setValue, name, longNote }: props) {
  const [edit, setEdit] = React.useState(!longNote);
  return (
    <span className={`noteForm ${longNote ? "longNoteWrapper" : ""}`}>
      {edit && (
        <>
          <label htmlFor={name}>{name}:</label>
          {!longNote ? (
            <input
              id={name}
              onChange={(e) => {
                if (e.target.value === "enter") {
                  setEdit(false);
                }
                setValue(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.code === "Enter") {
                  setEdit(false);
                }
              }}
              value={value}
            ></input>
          ) : (
            <textarea
              className="longNote"
              id={name}
              onChange={(e) => {
                setValue(e.target.value);
              }}
              value={value}
            ></textarea>
          )}
          <button
            onClick={() => {
              setEdit(false);
            }}
          >
            save
          </button>
        </>
      )}
      {!edit && (
        <>
          <span className="">
            <pre>
              <h4>{name}:</h4>
              {value}
            </pre>
          </span>
          <button
            onClick={() => {
              setEdit(true);
            }}
          >
            edit
          </button>
        </>
      )}
    </span>
  );
}
export default Note;
