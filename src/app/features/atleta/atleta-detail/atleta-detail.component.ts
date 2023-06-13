import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Atleta } from 'src/app/model/atleta';
import { AtletaService } from '../atleta.service';

@Component({
  selector: 'atl-atleta-detail',
  templateUrl: './atleta-detail.component.html',
  styleUrls: ['./atleta-detail.component.css']
})
export class AtletaDetailComponent implements OnInit {

  atletaDetail?: Atleta;

  constructor(
    private activatedRoute: ActivatedRoute,
    private atletaService: AtletaService
  ) {}

  ngOnInit(): void {
    this.atletaService.findById(
      Number(this.activatedRoute.snapshot.paramMap.get('id'))
    ).subscribe(atlObs => (this.atletaDetail = atlObs));
  }

}
