import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AtletaService } from '../atleta.service';
import { Atleta } from 'src/app/model/atleta';
import { Router } from '@angular/router';

@Component({
  selector: 'atl-atleta-create',
  templateUrl: './atleta-create.component.html',
  styleUrls: ['./atleta-create.component.css']
})
export class AtletaCreateComponent {

  atleta : Atleta = {id: 0, nome: '', cognome: '', inAttivita: false, dataUltimaGara: undefined, numeroMedaglieVinte: 0}
  errorMessage: string = "";

  constructor(private atletaService : AtletaService,private router : Router) {}
  save(atletaForm: NgForm): void {
    if (atletaForm.valid) {
      this.atletaService.addAtleta(this.atleta).subscribe({
        next: atletaItem => this.atleta = atletaItem,
        complete: () => this.router.navigate([`atleta/list`], { queryParams: { confirmMessage: 'Operazione effettuata correttamente.' } })
      });
    } else
      this.errorMessage = 'Attenzione! Operazione fallita! Il form non è stato validato';
  }
  getTodayDate(): string {
    return new Date().toISOString().split('T')[0];
  }
}
