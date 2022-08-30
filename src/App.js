import RouterPath from "./router";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useRecoilValue } from "recoil";
import { userName } from "./store";
import { userOld } from "./store";

function App() {
  const userNavName = useRecoilValue(userName);
  const userNavOld = useRecoilValue(userOld);
  return (
    <Router>
      <Navbar nama={userNavName} umur={userNavOld} />
      <RouterPath />
    </Router>
  );
}

export default App;
