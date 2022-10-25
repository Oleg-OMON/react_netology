import './card-style.css'


function CardsView({products}) {
    return (
        <div>
            <div className="card_block">
            {products.map((obj, index) =>(      
                <div className="card" key={index}>
                    <h2 className="product_name">{obj.name}</h2>
                    <h5 className="color">{obj.color}</h5>
                    <img src={obj.img}/>
                    <h4 className="price">{obj.price}</h4>
                    <button className="corz">ADD TO CART</button>
                </div>   
            ))}
        </div>
        </div>
        
    )
};


export default CardsView;