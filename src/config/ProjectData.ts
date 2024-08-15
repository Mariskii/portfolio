import type { ProjectData } from '../interfaces/project.interface';

export const projectData: ProjectData[] = [
    {
        title:'Slam Stats',
        description:'Proyecto web y android para visualizar estadísticas de jugadores de la NBA que cuenta con gestión de usuarios para almacenar los jugadores favoritos y datos del usuario. Este proyecto utiliza Angular e Ionic para el Frontend y Spring para el backedn, además de utilizar Karma and Jasmine para realizar el testing unitario.',
        images: [
            '/public/project_images/slam-stats/showcase-slam_stats-01.png',
            '/public/project_images/slam-stats/showcase-slam_stats-02.png',
            '/public/project_images/slam-stats/showcase-slam_stats-03.png',
        ],
        technologies:['Angular', 'Ionic', 'Spring', 'Spring Boot', 'Karma and Jasmine'],
        linksGitHub:[
            {
                title:'Repositorio Front',
                link:'https://github.com/Mariskii/SlamStats-ionic'
            },
            {
                title:'Repositorio Back',
                link:'https://github.com/Mariskii/SlamStatsAPI'
            }
        ]
    },
    {
        title:'Generate.md',
        description:'Proyecto web desarrollado con Angular para generar documentos markdown para la documentación de proyectos de software. Alguna de las funcionalidades de la web es la división del documento en componentes, reactividad al escribir y previsualización del documento.',
        images: [
            '/public/project_images/generademd/showcase-generate_md-01.png',
            '/public/project_images/generademd/showcase-generate_md-02.png',
            '/public/project_images/generademd/showcase-generate_md-03.png',
        ],
        technologies:['Angular','Angular Material','Bootstrap', 'Karma and Jasmine'],
        linksGitHub:[
            {
                title:'Repositorio',
                link:'https://github.com/Mariskii/Generate.md'
            },
        ],
        linkProject:'https://generate-md.vercel.app/home'
    },
    {
        title:'InfoFarms [Building]',
        description:'Trabajo para una empresa del sector agrario. Esta aplicación es un gestor de las plantaciones y los cultivos de la empresa, además de gestionar pedidos y facturación. Por otro la aplicación gestiona usuarios con sus respectivos roles para darles permisos o restringirles acceso, todo esto acompañado de un sistema de autenticación que funciona junto a JWTs.',
        images: [
            '/public/project_images/infofarms/showcase-infofarms-01.png',
            '/public/project_images/infofarms/showcase-infofarms-02.png',
            '/public/project_images/infofarms/showcase-infofarms-03.png',
            '/public/project_images/infofarms/showcase-infofarms-04.png',
        ],
        technologies:['Angular','Primeng','Tailwind', 'Karma and Jasmine', 'Spring', 'Spring Boot', 'Spring Security', 'JWT'],
        linksGitHub:[
            {
                title:'Repositorio',
                link:'https://github.com/Mariskii/InfoFarm-App'
            },
        ],
    }
];