import React from 'react';
import './listing-style.css'
import axios from 'axios';
import classNames from 'classnames';

function Listing () {
    const [etsy, setEtsy] = React.useState([]);


    React.useEffect(() => {
        axios.get('http://localhost:3000/items.json').then(({ data }) => {
          setEtsy(data.etsy);
        });
      }, []);

        return (
        <div className="item-list">
        {etsy && etsy.map((obj) => (
                obj.state != 'removed' ? 
                <div className="item" key={obj.listing_id}>
                    <div className="item-image">
                    <a href={obj.url}>
                            <img src={obj.MainImage ? obj.MainImage.url_570xN : console.log(obj)}></img>
                    </a>
                    </div>
                    <div className="item-details">
                    <p className="item-title">{obj.title ? (`${obj.title.length}` > 50 ? `${obj.title.substring(0, 50)}...` : obj.title) : null}</p>
                    <p className="item-price">{obj.currency_code}{obj.price}</p>
                    <p className={classNames("item-quantity", {
                                "level-low": obj.quantity <= 10,
                                "level-medium": 20 <= obj.quantity > 10,
                                "level-high": obj.quantity > 20,
                        })}>{obj.quantity} left</p>
                    </div>
                </div> : null
        ))}
        </div>
        )
    
};

export default Listing;