export interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    repoUrl?: string;
    liveUrl?: string;
}


export const projectsData: Project[] = [
    {
        id: 1,
        title: 'Relatório de Vendas com Power BI',
        description: 'Este repositório contém um relatório interativo de vendas desenvolvido através do Power BI. O projeto foi elaborado como desafio de projeto do Santander Bootcamp 2023 - Ciência de Dados com Python e é constituído pelos relatórios: Sales Report (página 1) e Report de Lucro Detalhado (página 2).',
        imageUrl: '/images/project1.png',
        repoUrl: 'https://github.com/LuuhMitre/relatorio_elegante_de_vendas_com_power_bi',

    },
    {
        id: 2,
        title: 'Disparador de E-mail',
        description: 'Este projeto foi desenvolvido com o intuito de solucionar o problema de envio de e-mails em massa, para um setor comercial. Com este script, foi possível reduzir o tempo de envio de 200 e-mails para menos que cinco minutos.',
        imageUrl: '/images/project2.png', // Imagem em public/images/
        repoUrl: 'https://github.com/LuuhMitre/email_sender',

    },

];