import { React, Component } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { Home, Title, Content, Counter, Button, Form } from "./Style";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
    this.buttonAdd = this.buttonAdd.bind(this);
    this.buttonSub = this.buttonSub.bind(this);
  }
  buttonAdd(event) {
    this.setState({ value: this.state.value + 1 });
  }

  buttonSub(event) {
    // console.log("this.state.value", this.state > 0);
    // console.log("this.state.value", this.state);

    if (this.state.value > 0) {
      this.setState({ value: this.state.value - 1 });
    }
  }

  waitingTime() {
    let hour = 0;
    let time = this.state.value * 18;

    if (time > 60) {
      hour = Math.floor(time / 60);
      time = time % 60;
    }
    return `${hour} hour and ${time} minutes`;
  }

  render() {
    return (
      <div>
        <Title> Billu barber and salon</Title>
        <Home>
          <Content>
            <Form>
              <h3>
                <label>
                  No of barbers today :
                  <input
                    type="text"
                    style={{
                      border: "none",
                      backgroundColor: "#d5cfbd",
                      padding: "10px",
                      marginLeft: "15px",
                    }}
                  />
                </label>
                <input
                  type="submit"
                  value="Okay"
                  style={{
                    border: " 1px solid #d5cfbd",
                    padding: "10px",
                    cursor: "pointer",
                    marginLeft: "5px",
                  }}
                />
              </h3>
            </Form>
            <Counter>
              <h3> People in line : {this.state.value} </h3>
              <Button>
                <FontAwesomeIcon
                  onClick={this.buttonAdd}
                  icon={faPlus}
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "d5cfbd",
                    color: "7a6a53",
                  }}
                />
                <br />
                <FontAwesomeIcon
                  onClick={this.buttonSub}
                  icon={faMinus}
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "d5cfbd",
                    color: "7a6a53",
                  }}
                />
              </Button>
            </Counter>
            <h3> Your count in line : {this.state.value + 1}</h3>
            <h3> Ajha parkhine time : {this.waitingTime()} </h3>
          </Content>
        </Home>
      </div>
    );
  }
}

export default App;
