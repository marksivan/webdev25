export default function Player({number}){

    const [score, setScore] = useState(0)

    const increaseScore = () =>{
        setScore(score + 1)
    }

    return (
        <div>
            <li>
                <ol> Player {number}:</ol>

            </li>

            <p>{score}</p>
            <button onClick={increaseScore}>+1</button>

        </div>
    )

    

}