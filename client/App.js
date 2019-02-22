import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.randomize = this.randomize.bind(this);

    this.state = {
      product_id: Math.ceil(Math.random() * 100)
    };
  }

  randomize() {
    this.setState({ product_id: Math.ceil(Math.random() * 100) });
  }

  onClick(e) {
    // this function will be passed down to Tony's component
    // when a related item is clicked
    //  grab that product's id and set the 'global' state with it

    // example code: will need to be updated based on Tony's architecture

    this.setState({ product_id: e.target.id });
  }

  render() {
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
        <Reviews product_id={this.state.product_id} />
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
