import { RegularList } from "./RegularList";
import { SmallPersonListItem } from "./people/SmallPersonListItem";
import { LargePersonListItem } from "./people/LargePersonListItem";
import { SmallProductsListItem } from "./products/SmallProductsListItem";
import { LargeProductsListItem } from "./products/LargeProductsListItem";

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
  description: 'LED Screen, a great sale',
  rating: 4.5
},
{
  name: 'Runnig shoes',
  price: '100$',
  description: 'Amazing running experience!',
  rating: 4.2
},
{
  name: 'Own',
  price: '60$',
  description: 'Cooking problems finished! Be your own chef!',
  rating: 3.8
}]

function App() {
  return (
    <>
      <RegularList 
        items={people}
        resourceName="person"
        itemComponent={SmallPersonListItem}
      />
      <RegularList 
        items={people}
        resourceName="person"
        itemComponent={LargePersonListItem}
      />
      <RegularList 
        items={products}
        resourceName="product"
        itemComponent={SmallProductsListItem}
      />
       <RegularList 
        items={products}
        resourceName="product"
        itemComponent={LargeProductsListItem}
      />
    </>
  );
}

export default App;
