import './Styles/App.css';
import { Header } from './Components/Header';
import { Entry } from './Components/Entry';
import Data from './Data/Data.js'


function App() {

  const entry = Data.map((data) => (
    <Entry 
        img={data.img}
        title={data.title}
        country={data.country}
        dates={data.dates}
        text={data.text} 
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
