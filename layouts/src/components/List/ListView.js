import './list-style.css'

function ListView({products}) {
    return ( 
            <div className="list_card_block">
            {products.map((obj, index) =>(      
                <div className="list_item" key={index}>
                    <img className='img_list' src={obj.img}/>
                    <h2 className="list_product_name">{obj.name}</h2>
                    <h5 className="list_color">{obj.color}</h5>
                    <h4 className="list_price">${obj.price}</h4>
                    <button className="list_corz">ADD TO CART</button>
                </div>   
            ))}
        
        </div>
        
    )
};


export default ListView;
