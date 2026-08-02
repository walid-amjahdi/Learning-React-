import './Styles/App.css';
import { Header } from './Components/Header';
import { Entry } from './Components/Entry';

function App() {
  return (
    <>
      <Header />
      <Entry img={{
      src: "https://scrimba.com/links/travel-journal-japan-image-url",
      alt: "Mount Fuji"
    }}
    title="Mount Fuji"
    country="📍Japan"
    dates="12 Jan, 2021 - 24 Jan, 2021"
    text="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
  
    />
    </>
  );
}

export default App;
