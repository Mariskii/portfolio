import type { ProjectData } from '../interfaces/project.interface';

export const projectData: ProjectData[] = [
    {
        title:'Slam Stats',
        description:'Proyecto web y android para visualizar estadísticas de jugadores de la NBA que cuenta con gestión de usuarios para almacenar los jugadores favoritos y datos del usuario. Este proyecto utiliza Angular e Ionic para el Frontend y Spring para el backedn, además de utilizar Karma and Jasmine para realizar el testing unitario.',
        images: [
            '/project_images/slam-stats/showcase-slam_stats-01.png',
            '/project_images/slam-stats/showcase-slam_stats-02.png',
            '/project_images/slam-stats/showcase-slam_stats-03.png',
        ],
        technologies:['Angular', 'Ionic', 'Spring', 'Spring Boot', 'Karma and Jasmine', 'PostreSQL'],
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
        title:'Urlino URL Shortener',
        description:'Proyecto web que consiste en un acortador de URLs totalmente escalable que implementa el OAuth2 de Github para guardar los datos y las urls de los usuarios. Las urls pueden ser creadas tanto con cuenta como sin cuenta, pero los usuarios podrán crear y editar sus propias URLs customizadas.',
        images: [
            '/project_images/urlino/showcase_urlino-01.png',
            '/project_images/urlino/showcase_urlino-02.png',
            '/project_images/urlino/showcase_urlino-03.png',
        ],
        technologies:['Angular', 'Spring', 'Spring Boot', 'OAuth2', 'Tailwind', 'Angular Material', 'Karma and Jasmine', 'MongoDB'],
        linksGitHub:[
            {
                title:'Repositorio Front',
                link:'https://github.com/Mariskii/Urlino-App'
            },
            {
                title:'Repositorio Back',
                link:'https://github.com/Mariskii/Urlino-Api'
            }
        ],
        linkProject: 'https://urlino.net'
    },
    {
        title:'Generate.md',
        description:'Proyecto web desarrollado con Angular para generar documentos markdown para la documentación de proyectos de software. Alguna de las funcionalidades de la web es la división del documento en componentes, reactividad al escribir y previsualización del documento.',
        images: [
            '/project_images/generademd/showcase-generate_md-01.png',
            '/project_images/generademd/showcase-generate_md-02.png',
            '/project_images/generademd/showcase-generate_md-03.png',
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
        description:'Trabajo para una empresa del sector agrario. Esta aplicación es un gestor de las plantaciones y los cultivos de la empresa, además de gestionar pedidos y facturación. Por otro lado la aplicación gestiona usuarios con sus respectivos roles para darles permisos o restringirles acceso, todo esto acompañado de un sistema de autenticación que funciona junto a JWTs.',
        images: [
            '/project_images/infofarms/showcase-infofarms-01.png',
            '/project_images/infofarms/showcase-infofarms-02.png',
            '/project_images/infofarms/showcase-infofarms-03.png',
            '/project_images/infofarms/showcase-infofarms-04.png',
        ],
        technologies:['Angular','Primeng','Tailwind', 'Karma and Jasmine', 'Spring', 'Spring Boot', 'Spring Security', 'JWT', 'PostreSQL'],
        linksGitHub:[
            {
                title:'Repositorio',
                link:'https://github.com/Mariskii/InfoFarm-App'
            },
        ],
    }
];