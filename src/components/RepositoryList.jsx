import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';
import { useEffect, useState } from "react";

//https://api.github.com/users/henriquedantass/repos


const repository = {
    name: 'unform',
    description: 'Forms in React',
    link: 'https://github.com/henriquedantass'
}

export function RepositoryList() {
    
    const [repositories, setRepositories] = useState([]);
     
    useEffect(()=>{
        fetch('https://api.github.com/users/henriquedantass/repos')
        .then (response => response.json())
        .then (data => setRepositories(data))

    }, []);
    
    return (
        <section className="repository-list">
        <h1>Lista de repositórios</h1>
        <ul>
            {repositories.map(repository => { return <RepositoryItem key={repository.name} repository = {repository}/>})}
        </ul>
        </section>
    )


}