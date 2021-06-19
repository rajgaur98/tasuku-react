import './App.css';
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {fab} from "@fortawesome/free-brands-svg-icons"
import Home from './components/Home/Home';

library.add(fas, fab);

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
