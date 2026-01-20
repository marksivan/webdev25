
import Property from './Property';

function PropertyList({properties= []}){

    return (
        <div className='propertyList'>
            {properties.map((p) =>{
                return <Property {...p} key={p.id}/>
            })
            }
        </div>
    )




}

export default PropertyList;