import { useState } from "react";



export default function ScoreGame({numPlayers = 10, target = 5}){

    const scoreArray = new Array(numPlayers).fill(0)
    const [scores, setScores]  = useState(scoreArray)

    const increaseScore = (idx) =>{
          setScores((prevScores) =>{
            return prevScores.map((score, i) =>{
                if (i=== idx) return score + 1;
                return score;
            })
          })
    } 

    console.log(scores)

    const resetScores = ()=>{
        setScores(new Array(scores.length).fill(0))
    }

    

           
           
    return (
        <div>
            <ul>
                {scores.map((score, idx) =>{
                    return <li key={idx}>
                        Player{idx + 1}: {score} 
                        <button onClick={() =>increaseScore(idx)}>+1</button>
                        </li>
                }) }
            </ul>

            <button onClick={resetScores}>Reset</button>

           
            
        </div>
    )

}







