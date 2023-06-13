import { Component, OnInit } from '@angular/core';
import { Atleta } from 'src/app/model/atleta';
import { AtletaService } from '../atleta.service';

@Component({
  selector: 'atl-atleta-list',
  templateUrl: './atleta-list.component.html',
  styleUrls: ['./atleta-list.component.css']
})
export class AtletaListComponent implements OnInit{

  listaAtleti? : Array<Atleta>

  constructor(private atletaService : AtletaService){}
  ngOnInit(): void {

    this.atletaService.getAtleti().subscribe(i=> this.listaAtleti =i)

  }

}
