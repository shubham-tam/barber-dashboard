import styled from "styled-components";
import "./App.css";

const Home = styled.section`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  border-radius: 20px;
`;

const Title = styled.section`
  font-size: 2.8rem;
  font-weight: 640;
  text-align: center;
  margin-top: 270px;
  color: #7a6a53;
`;

const Content = styled.section`
  margin-top: 40px;
  font-size: 1.1rem;
  text-align: center;
  // color: #7a6a53;
  color: #948c75;
`;

function App() {
  return (
    <div>
      <Title> Billu barber and salon</Title>
      <Home>
        {" "}
        <Content>
          <h3> People in line :</h3>
          <h3> Your count : {}</h3>
          <h3> Ajha parkhine time : </h3>
        </Content>
        {/* <div> Contact No : </div> */}
      </Home>
    </div>
  );
}

export default App;
