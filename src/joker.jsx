import { useEffect, useState } from "react";

export default function Joker() {
    let [joke , setJoke] = useState({});
    const url = "https://official-joke-api.appspot.com/random_joke";

    const getNewJoke = async () => {
        let res = await fetch(url);
        let data = await res.json();
        setJoke({setup : data.setup , punchline: data.punchline});
    };

    useEffect(() => {
        async function getFirstJoke() {
        let res = await fetch(url);
        let data = await res.json();
        setJoke({setup : data.setup , punchline: data.punchline});
        }
        getFirstJoke();
    }, []);

    return(
        <div>
            <h2>Joke of the day !</h2>
            <h3>{joke.setup}</h3>
            <h3>{joke.punchline}</h3>
            <button onClick={getNewJoke}>New Joke</button>
        </div>
    )
}