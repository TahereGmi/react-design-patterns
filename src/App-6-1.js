import { RecursiveComponent } from "./RecursiveComponent";

const nestedData = {
  a: 1,
  b: {
    b1: 4,
    b2: {
      b23: 'Hello'
    },
    b3: {
      b31: {
        message: 'Hi'
      },
      b32: {
        message: 'Hi'
      }
    }
  },
  c: {
    c1: 2,
    c2: 3
  }
}

function App() {
  return (
    <RecursiveComponent data={nestedData} />
  );
}

export default App;
