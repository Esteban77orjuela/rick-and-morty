import imageRickMorty from "./img/WhatsApp Image 2023-05-18 at 8.38.46 PM.jpeg";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        <img src={imageRickMorty} alt="Rick & Morty" className='img-home'/> 
      </header>
    </div>
  );
}

export default App;
