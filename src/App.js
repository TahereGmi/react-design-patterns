import { SplitScreen } from "./SplitScreen";

const LeftHandComponent = ({ name }) => {
  return <h1 style={{ backgroundColor: "green" }}>{name} !</h1>
}

const RightHandComponent = ({ massege }) => {
  return <p style={{ backgroundColor: "red" }}>{massege} !</p>
}

function App() {
  return (
    <SplitScreen
      leftWeight={1}
      rightWeight={1}>
        <LeftHandComponent name="Shaun" />
        <RightHandComponent massege="Hello" />
    </SplitScreen>
  );
}

export default App;
