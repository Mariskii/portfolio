export interface ProjectData  {
    title: string,
    description: string
    images: string[],
    technologies: string[],
    linksGitHub: GithubLink[],
    linkProject?: string
}

export interface GithubLink {
    title: string,
    link: string
}