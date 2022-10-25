import './App.css';
import CardsView from './components/Cards/CardsView';
import ListView from './components/List/ListView';
import React from 'react';
import axios from 'axios';

  
function App() {
  const [products, setProducts] = React.useState([]);
  const [icon, setIkon] = React.useState('view_list')

  React.useEffect(() => {
    axios.get('http://localhost:3000/products.json').then(({ data }) => {
      setProducts(data.products);
    });
  }, []);
  
  
    
  const onSwitch = () => {
    if (icon === 'view_list'){
      setIkon('view_module');
    } if(icon === 'view_module') {
      setIkon('view_list');
    }
  }

  return (
    <div className="App">
      <button className="material-icons" 
      onClick = {()=> onSwitch()}
      >{icon}</button>
      {icon==='view_list'? <CardsView products={products}/> : <ListView products={products}/>}
    </div>
  );
}

export default App;
