import "./App.css";
import Address from "./Component/Profile/Address";
import FullName from "./Component/Profile/FullName";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";

function App() {
  return (
    <div className="App">
      <div className="profile">
        <div className="profile__img">
          <ProfilePhoto></ProfilePhoto>
        </div>
        <div className="profile__content">
          <FullName></FullName>
          <Address></Address>
        </div>
      </div>
    </div>
  );
}

export default App;
