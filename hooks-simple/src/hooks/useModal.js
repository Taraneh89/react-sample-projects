import { useEffect, useRef, useState } from "react";

const useModal = (customName = "taraneh") => {
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);

  // useRef retruns an object that has current peroperty.
  // example: { current: <div>Hellothere</div> }
  const modal = useRef(null);
  const button = useRef(null);

  useEffect(() => {
    // componentDidMount
    // this.setState({name: "taraneh"})
    setName(customName);
    // من اینو مینویسم چون میخام بهت کابرد componentWillUnmount رو بگم
    window.addEventListener("click", handleOutClick);
    return () => {
      // componentWillUnmount
      window.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    // componentDidUpdate
    console.log(name);
  }, [name]);

  const handleClick = () => {
    // this.setState({ open: true });
    setOpen(true);
  };

  const handleOutClick = (e) => {
    if (button.current.contains(e.target)) return;
    if (modal.current && modal.current.contains(e.target)) return;
    // this.setState({ open: false });
    setOpen(false);
  };

  return { name, handleClick, open, modal, button };
};

export default useModal;
