import 'dotenv/config';
import fetch from 'node-fetch';

const GITHUB_API_URL = 'https://api.github.com/user/repos';
const REPO_LIMIT = 5;

interface GitHubRepo {
    name: string;
    description: string | null;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
    updated_at: string;
}

type RepoDetails = {
    name: string;
    description: string;
    url: string;
    stars: number;
    forks: number;
    lastUpdated: string;
};

async function fetchGitHubRepos(): Promise<RepoDetails[]> {
    try {
        const response = await fetch(GITHUB_API_URL, {
            headers: {
                'Authorization': `Bearer ${process.env.GITHUB_SECRET}`,
                'Accept': 'application/vnd.github.v3+json',
                'X-GitHub-Api-Version': '2022-11-28'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const repos: GitHubRepo[] = await response.json() as GitHubRepo[]

        console.log(`Fetched ${repos.length} repositories. Displaying the first ${REPO_LIMIT}:`);

        const reposArray: RepoDetails[] = repos.slice(0, REPO_LIMIT).map((repo) => {
            return {
                name: repo.name,
                description: repo.description || "No description provided",
                url: repo.html_url,
                stars: repo.stargazers_count,
                forks: repo.forks_count,
                lastUpdated: new Date(repo.updated_at).toLocaleDateString()
            };
        });

        return reposArray;

    } catch (error) {
        if (error instanceof Error) {
            console.error('Error fetching repositories:', error.message);
        } else {
            console.error('An unknown error occurred');
        }

        // Return an empty array as a fallback
        return [];
    }
}

export default fetchGitHubRepos;
