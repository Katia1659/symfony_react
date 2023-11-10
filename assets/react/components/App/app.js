import React, { useEffect, useState } from "react";
import { async } from "regenerator-runtime";

const App = () => {
    const [poste, setPoste] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(
        () => { fetchDatas() }, []);

    const fetchDatas = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users/1/todos",
                {
                    Headers: { 'Accept': 'application/json' }
                }).then(r => r.json())
            setPoste(response)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    };
    return (
        <div>
            <h1>Hello LE MONDE !</h1>
            {loading && <h1>Chargement ...</h1>}
            {!loading && <ul>
                {poste.map((item) => <li key={item.id}>{item.title}</li>)}
                {/* {poste.map((post) => {<li key= {post.id}> titre : {post.title}</li>})} */}
            </ul>}
        </div>
    );
}
export default App;