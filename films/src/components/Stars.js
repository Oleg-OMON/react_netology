import Star from './Star'


function Stars({count}) {
    return (
        <ul className="card-body-stars u-clearfix">
            { count !== 0 && count <= 5 && !isNaN(count) ? 
            [...Array(count)].map((item, index) => <Star key={index} /> ) : null} 
        </ul>
    )

    
};

export default Stars;