import "./App.css";
import UserCard from "./components/user-card/user-card";
import { Route, Redirect, Switch } from "react-router-dom";
import UserInfo from "./components/user-info/user-info";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/user-list" component={UserCard} />
        <Route path="/user-info" render={(props) => <UserInfo {...props}/>}/>
        <Redirect to="/user-list" />
      </Switch>
    </div>
  );
}
export default App;
