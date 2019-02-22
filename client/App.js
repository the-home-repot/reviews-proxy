import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.randomize = this.randomize.bind(this);

    this.state = {
      product_id: Math.ceil(Math.random() * 100)
    };
  }

  randomize() {
    this.setState({ product_id: Math.ceil(Math.random() * 100) });
  }

  render() {
    localStorage.setItem("product_id", this.state.product_id);
    console.log(
      "product_id from local storage->",
      localStorage.getItem("product_id")
    );
    return (
      <div>
        <button onClick={this.randomize}>random item</button>
        <div style={outerWrap}>
          <div style={innerWrap}>
            {/* <Gallery id={this.state.product_id} style={gallery} /> */}
            <div id="photos" className="gallery" style={gallery} />
            <div className="overview" style={overview}>
              OVERVIEW
            </div>
          </div>
          <div id="similar-options" className="related" style={related} />
        </div>
        {/* <Reviews product_id={this.state.product_id} /> */}
        <div id="reviews" />
      </div>
    );
  }
}

const outerWrap = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "1150px"
};

const innerWrap = {
  display: "flex",
  justifyContent: "space-between"
};

const gallery = {
  maxWidth: "60%",
  height: "600px"
  // backgroundColor: "#cccccc",
  // border: "1px solid green",
  // color: "green"
};

const overview = {
  width: "40%",
  height: "600px",
  backgroundColor: "#cccccc",
  border: "1px solid red",
  color: "red"
};

const related = {
  height: "500px"
  // backgroundColor: "#cccccc",
  // border: "1px solid yellow",
  // color: "yellow"
};

ReactDOM.render(<App />, document.getElementById("app"));
