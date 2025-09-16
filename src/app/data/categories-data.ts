import { Category } from '../interfaces/category.interface';

export const CATEGORIES: Category[] = [
  {
    id: 'docs',
    name: 'Documentos',
    icon: 'bi-file-earmark-text',
    expanded: true,
    children: [
      {
        id: 'contratos',
        name: 'Contratos',
        icon: 'bi-folder',
        expanded: true,
        children: [
          {
            id: 'contrato-trabajo',
            name: 'Contratos de Trabajo',
            icon: 'bi-file-earmark',
            link: '/assets/projects/html/modelo1/index.html'
          }
        ]
      }
    ]
  }
];
