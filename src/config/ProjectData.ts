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
        technologies:['Angular', 'Ionic', 'Spring', 'Karma and Jasmine'],
        linkGitHub:''
    }
];