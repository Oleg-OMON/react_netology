import React from 'react'


function Portfolio({filters, projects}) {
    const [activeFilters, setActiveFilters] = React.useState(null);
    

    const onSelectFilters = (name) => {
        setActiveFilters(name);
        };
      


    return(
       <div>
           <div className="sort">
            <div className="sort__popup">
                <ul>
                {filters && filters.map((name, index) => (
                    <li className={activeFilters === name ? "active" : ''}
                    onClick = {()=> onSelectFilters(name)}
                    key ={`${name}_${index}`}>{name}
                    </li>
                    ))}
                </ul>
                    {projects.map((obj, index) =>(      
                        <img src={activeFilters === 'All'? obj.img : 
                        activeFilters === obj.category? obj.img :null}
                        key={index}
                    />                    
                 ))}
         </div> 
         
        </div>
        
       </div> 

    )               
};

export default Portfolio;