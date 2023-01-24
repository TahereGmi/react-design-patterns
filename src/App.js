import { CurrentUserLoader } from "./CurrentUserLoader"
import { UserLoader } from "./UserLoader"
import { UserInfo } from "./UserInfo"
import { ResourceLoader } from "./ResourceLoader"
import { ProductInfo } from './ProductInfo'
import { DataSource } from './DataSource'
import axios from 'axios'


const getServerData = url => async () => {
  const response = await axios.get(url)
  return response.data
}

const getLocalStorageData = key => () => {
  return localStorage.getItem(key)
}

const Text = ({ message }) => {
  <h1>{message}</h1>
}

function App() {
  return (
    <>
    <h1>CurrentUserLoader</h1>
    <CurrentUserLoader>
      <UserInfo />
    </CurrentUserLoader>
    <h1>UserLoader</h1>
    <UserLoader userId={'987'}>
      <UserInfo />
    </UserLoader>
    <h1>ResourceLoader</h1>
    <ResourceLoader resourceUrl={'/users/123'} resourceName={'user'}>
      <UserInfo />
    </ResourceLoader>
    <ResourceLoader resourceUrl={'/products/1234'} resourceName={'product'}>
      <ProductInfo />
    </ResourceLoader>
    <h1>DataSource</h1>
    <DataSource getDataFunc={getServerData('/users/123')} resourceName="user">
      <UserInfo/>
    </DataSource>
    <DataSource getDataFunc={getLocalStorageData('message')} resourceName="user">
      <Text />
    </DataSource>
    </>
  );
}

export default App;
