import { LoaderFunction } from "@remix-run/server-runtime"
import { useLoaderData } from "remix"
import { getCommits } from "~/features/github/api"

export const loader: LoaderFunction = async ({params}) => {
    return await getCommits(params.repoName)
}

//TODO - no video quatro ele arruma o not found (404)

// export default function() {
//     const { repoName } = useLoaderData()
//     return <h1>{ repoName }</h1>
// }