import "./App.css";
import Viewer from "./components/Viewer";
import { AccessToken } from "./utils/AccessToken";
function App() {
  AccessToken();
  return (
    <>
      <Viewer></Viewer>
    </>
  );
}

export default App;
