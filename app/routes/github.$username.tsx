import { LoaderFunction, useLoaderData } from "remix";
import { GithubApi, GithubContainer, Repo } from "~/features/github";

export interface User {
    login: string
    avatar_url: string
    html_url: string
    bio: string
}

export interface LoaderData {
    user: User,
    repos: Repo
}

export const loader: LoaderFunction = async ({params}) => {
    return {
        user: await GithubApi.getGithubUser(params.username),
        repos: await GithubApi.getUserRepos(params.username)
    }
}

export default function() {
    const { user, repos } = useLoaderData()
    return <GithubContainer user={user} repos={repos} />
}
