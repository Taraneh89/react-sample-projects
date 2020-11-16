import React from "react";

class Example extends React.Component {
  state = {
    name: "",
    open: false,
  };

  componentDidMount() {
    this.setState({ name: "taraneh" });
    // من اینو مینویسم چون میخام بهت کابرد componentWillUnmount رو بگم
    window.addEventListener("click", this.handleOutClick);
  }

  componentDidUpdate() {
    console.log(this.state.name);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.handleClick);
  }

  handleClick = () => {
    this.setState({ open: true });
  };

  handleOutClick = (e) => {
    if (this.button.contains(e.target)) return;
    if (this.modal && this.modal.contains(e.target)) return;
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button ref={(ref) => (this.button = ref)} onClick={this.handleClick}>
          open modal
        </button>
        {this.state.open && (
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
              ref={(ref) => (this.modal = ref)}
              style={{ width: 300, height: 300, background: "#fff" }}
            >
              modal content
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Example;
