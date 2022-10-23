import './App.scss';
import React from 'react';
import axios from 'axios';
import Portfolio from './components/Portfolio';

function App() {
  const [projects, setProjects] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:3000/items.json').then(({ data }) => {
      setProjects(data.items);
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <Portfolio 
        filters={["All", "Websites", "Flayers", "Business Cards"]}
        projects={projects} />
      </header>
    </div>
  );
}

export default App;
