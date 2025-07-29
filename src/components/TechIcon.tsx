// src/app/components/TechIcon.tsx

import {
    FaPython,
    FaDatabase,
    FaHtml5
} from 'react-icons/fa';
import {
    SiPandas,
    SiFastapi,
    SiPostgresql,
} from 'react-icons/si';

// Mapeamento de nomes para componentes de ícone
const iconMap: { [key: string]: React.ElementType } = {
    python: FaPython,
    pandas: SiPandas,
    html5: FaHtml5,
    fastapi: SiFastapi,
    postgresql: SiPostgresql,
    powerbi: FaDatabase, // Usando FaDatabase como proxy visual para Power BI
    database: FaDatabase,
};
interface TechIconProps {
    iconName: string;
    className?: string;
}

const TechIcon = ({ iconName, className }: TechIconProps) => {
    const IconComponent = iconMap[iconName.toLowerCase()];

    if (!IconComponent) {
        // Retorna nulo ou um ícone padrão se o nome não for encontrado
        return null;
    }

    return <IconComponent className={className} title={iconName} />;
};

export default TechIcon;