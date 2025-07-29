export interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    repoUrl?: string;
    liveUrl?: string;
    powerBiUrl?: string;
    technologies: string[];
}


export const projectsData: Project[] = [
    {
        id: 1,
        title: 'Relatório de Vendas com Power BI',
        description: 'Neste projeto, transformei um conjunto de dados brutos de vendas em um dashboard analítico e interativo. Fui responsável por todo o processo de BI, desde a limpeza e tratamento dos dados com Power Query (ETL), passando pela modelagem de dados relacional, até a criação de KPIs e métricas de negócio com fórmulas DAX. O resultado é uma ferramenta que permite analisar a lucratividade por produto, identificar tendências de vendas e tomar decisões estratégicas baseadas em dados.',
        imageUrl: '/images/project1.png',
        repoUrl: 'https://github.com/LuuhMitre/relatorio_elegante_de_vendas_com_power_bi',
        technologies: ['powerbi'],

    },
    {
        id: 2,
        title: 'Disparador de E-mail',
        description: 'Desenvolvi uma solução de automação para resolver a ineficiência no envio de e-mails em massa para clientes. Utilizando Python e a biblioteca Pandas, o script lê uma base de contatos diretamente de uma planilha Excel, personaliza um template HTML com o nome de cada cliente e gerencia o envio em lote através de SMTP. O resultado foi a redução de uma tarefa manual de horas para menos de 5 minutos para 200 contatos, além de garantir uma comunicação personalizada e profissional. O projeto demonstra habilidades em manipulação de dados, automação de processos e construção de mensagens em formato MIME.',
        imageUrl: '/images/project2.png', // Imagem em public/images/
        repoUrl: 'https://github.com/LuuhMitre/email_sender',
        technologies: ['python', 'pandas', 'html5'],
    },
    {
        id: 3,
        title: 'Sales Analytics API & BI Dashboard',
        description: 'Uma solução de Business Intelligence completa, onde construí uma API RESTful de alta performance com FastAPI e Python para servir como backend para um dashboard de vendas interativo no Power BI. O projeto inclui um banco de dados PostgreSQL na nuvem, autenticação segura via API Key e foi totalmente implantado na plataforma Railway, demonstrando um pipeline de dados ponta-a-ponta.',
        imageUrl: '/images/project3.png', // Imagem em public/images/
        repoUrl: 'https://github.com/LuuhMitre/sales_analytics_service',
        powerBiUrl: 'https://app.powerbi.com/view?r=eyJrIjoiZjk0ZTYyYTYtMDY5Yi00ZmRmLWJmOGQtZTU1NDljZWI3ZGVmIiwidCI6IjVkYTBkNjk2LWM1MDEtNGNlNS1iNmNjLWI5OWI5MmIzY2NjMCJ9',
        technologies: ['python', 'fastapi', 'postgresql', 'powerbi'],
    },

];