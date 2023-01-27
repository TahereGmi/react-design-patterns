import { printProps } from "./printProps"
import { UserInfo } from './UserInfo'

const UserInfoWrapper = printProps(UserInfo)
function App() {
  return (
    // In printProps (Higher Order Component) we have these props in console.log
    <UserInfoWrapper a={1} b="Shaun" />
  );
}

export default App;
