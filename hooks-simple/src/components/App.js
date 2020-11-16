import React from "react";
import useModal from "../hooks/useModal";

const Example = () => {
  const { name, handleClick, open, modal, button } = useModal("amin");

  return (
    <div>
      <h1>{name}</h1>
      <button ref={button} onClick={handleClick}>
        open modal
      </button>
      {open && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.70)",
            zIndex: 100000000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            ref={modal}
            style={{ width: 300, height: 300, background: "#fff" }}
          >
            modal content
          </div>
        </div>
      )}
    </div>
  );
};

export default Example;

// const useState = (defaultValue) => {
//   let value = defaultValue;
//   const setValue = (newValue) => {
//     value = newValue;
//   }

//   return [value, setValue];
// }

// const [ name, setName ] = useState("");
