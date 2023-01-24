import { SplitScreen } from "./SplitScreen";

const LeftHandComponent = ({ name }) => {
  return <h1 style={{ backgroundColor: "green" }}>{name} !</h1>
}

const RightHandComponent = ({ massege }) => {
  return <p style={{ backgroundColor: "red" }}>{massege} !</p>
}

const people = [{
  name: 'Sara',
  age: '29',
  hairColor: 'brown',
  hobbies: ['sport', 'theater']
},
{
  name: 'Jane',
  age: '32',
  hairColor: 'black',
  hobbies: ['swimming', 'party']
},
{
  name: 'Jak',
  age: '38',
  hairColor: 'blond',
  hobbies: [, 'books']
}]

const products = [{
  name: 'Tv',
  price: '200$',
  escription: 'LED Screen, a great sale',
  rating: 4.5
},
{
  name: 'Runnig shoes',
  price: '100$',
  escription: 'Amazing running experience!',
  rating: 4.2
},
{
  name: 'Own',
  price: '60$',
  escription: 'Cooking problems finished! Be your own chef!',
  rating: 3.8
}]

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
