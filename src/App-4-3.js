import { printProps } from "./printProps"
import { UserInfo } from './UserInfo'
import { withUser } from "./withUser";

const UserInfoWithLoader = withUser(UserInfo, '123')

function App() {
  return (
    // Loading data in withUser (Higher Order Component)
    <UserInfoWithLoader />
  );
}

export default App;
