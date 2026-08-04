import './Styles/App.css';
import { Header } from './Components/Header';
import { Entry } from './Components/Entry';
import Data from './Data/Data.js'


function App() {

  const entry = Data.map((data) => (
    <Entry 
        key={data.id}
        entry={data}
        />
  ))

  return (
    <>
      <Header />
      {entry}
    </>
  );
}

export default App;
