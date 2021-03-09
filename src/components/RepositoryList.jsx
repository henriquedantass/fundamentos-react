import { RepositoryItem } from "./RepositoryItem";

const repository = {
    name: 'unform',
    description: 'Forms in React',
    link: 'https://github.com/henriquedantass'
}

export function RepositoryList() {
    return (
        <section classaName="repository-list">
        <h1>Lista de repositórios</h1>
        <ul>
            <RepositoryItem repository = {repository}/>
            <RepositoryItem/>
            <RepositoryItem/>
            <RepositoryItem/>
            <RepositoryItem/>
        </ul>
        </section>
    )


}