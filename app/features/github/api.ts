import invariant from "tiny-invariant"
import { Repo } from "./types"

export const getGithubUser = async (username?: string) => {
    invariant(username, 'Please provide a username')
    const res = await fetch(`https://api.github.com/users/${username}`)

    const { login, avatar_url, html_url, bio } = await res.json()

    return  { login, avatar_url, html_url, bio }
}

export const getUserRepos = async (username?: string) => {
    invariant(username, 'Please provide a username')
    const res = await fetch(`https://api.github.com/users/${username}/repos`)

    return (
        await res.json())
            .map(
            (
                {
                    id,
                    full_name,
                    stargazers_count,
                    html_url,
                    language,
                    name
                }: Repo
            ) =>(
        {
            id,
            full_name,
            stargazers_count,
            html_url,
            language,
            name
        }
        )
    )
}

export const getCommits = async (repoName?: string) => {
    invariant(repoName, 'Please provide a repoName')
    const res = await fetch(`https://api.github.com/repos/${repoName}/commits`)

    return await res.json()
}
