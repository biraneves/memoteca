import { Component } from '@angular/core';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.scss'],
})
export class ListThoughtsComponent {
  listThoughts = [
    {
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem vero unde fugiat voluptatum nihil quo excepturi eius doloremque corporis harum nulla, repudiandae expedita possimus voluptas itaque? Illo itaque rem molestias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem vero unde fugiat voluptatum nihil quo excepturi eius doloremque corporis harum nulla, repudiandae expedita possimus voluptas itaque? Illo itaque rem molestias.',
      author: 'Angular',
      model: 'model3',
    },
    {
      content: 'Passo informações para o componente filho',
      author: 'Componente pai',
      model: 'model3',
    },
    {
      content: 'Minha propriedade é decorada com @Input',
      author: 'Componente filho',
      model: 'model2',
    },
  ];
}
