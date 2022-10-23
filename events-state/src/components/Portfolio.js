import React from 'react'


function Portfolio({filters}) {
    const [activeFilters, setActiveFilters] = React.useState(null);

    const onSelectFilters = (index) => {
        setActiveFilters(index);
      };

    return(
       <div>
           <div className="sort">
            <div className="sort__popup">
                <ul>
                {filters && filters.map((name, index) => (
                    <li className={activeFilters === index ? "active" : ''}
                    onClick = {()=> onSelectFilters(index)}
                    key ={`${name}_${index}`}>{name}
                    </li>
                    ))}
                </ul>
         </div> 
        </div>
       </div> 

    )               
};

export default Portfolio;