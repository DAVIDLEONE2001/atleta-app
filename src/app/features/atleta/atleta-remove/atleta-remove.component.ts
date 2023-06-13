import { Component } from '@angular/core';
import { Atleta } from 'src/app/model/atleta';

@Component({
  selector: 'atl-atleta-remove',
  templateUrl: './atleta-remove.component.html',
  styleUrls: ['./atleta-remove.component.css']
})
export class AtletaRemoveComponent {

  atletaRemove?: Atleta;


}
