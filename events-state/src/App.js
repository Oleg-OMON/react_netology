import './App.scss';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Portfolio 
        filters={["All", "Websites", "Flayers", "Business Cards"]}/>
      </header>
    </div>
  );
}

export default App;
