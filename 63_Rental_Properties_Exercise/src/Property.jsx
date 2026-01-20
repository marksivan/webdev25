

import './Property.css'

export default function Property({id, name, price, rating}){

    return (
        <div className="property">
            <h2>{name}</h2>
            <h3>{price}</h3>
            <h4>${rating} a night</h4>


        </div>
    )



}