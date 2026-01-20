

function Slots(props){
    
    const values = props.values;
    let same_values = true;

    for(let i = 0; i < values.length-1; i++){
        if (values[i] !== values[i+1]){
            same_values = false;
            break;
        }
    }

    const fontColor = same_values? "green": "red";
    // const message = same_values? <p color="fontColor">You win</p>  <p>Congrats!!</p> : <p color="fontColor">You lose</p>
    const message =  same_values? (
        <>
        <p style = {{color: fontColor}}>You win</p>
        <p>Congrats!!</p>
        </>
    ): (
        <p style={{ color: fontColor}}> You lose</p>
    )

    return(
        <div>
          <p>{values.join(" ")}</p>
          {message}

        </div>
    )



}

export default Slots;