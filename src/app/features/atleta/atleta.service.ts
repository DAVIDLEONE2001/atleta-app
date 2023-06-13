
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Atleta } from 'src/app/model/atleta';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root',
})
export class AtletaService {
  atletiDBMock: Array<Atleta> = [
    {
      id: 0,
      nome: 'Mario',
      cognome: 'Rossi',
      inAttivita: true,
      dataUltimaGara: new Date(),
      numeroMedaglieVinte: 2,
    },
    {
      id: 1,
      nome: 'Giovanni',
      cognome: 'Cipolla',
      inAttivita: true,
      dataUltimaGara: new Date(),
      numeroMedaglieVinte: 1,
    },
    {
      id: 2,
      nome: 'Mimmo',
      cognome: 'Carodone',
      inAttivita: true,
      dataUltimaGara: new Date(),
      numeroMedaglieVinte: 7,
    },
    {
      id: 3,
      nome: 'Pino',
      cognome: 'Daniele',
      inAttivita: false,
      dataUltimaGara: new Date('1990-01-01'),
      numeroMedaglieVinte: 5,
    },
    {
      id: 4,
      nome: 'Lorenzo',
      cognome: 'Cherubini',
      inAttivita: false,
      dataUltimaGara: new Date(),
      numeroMedaglieVinte: 5,
    },
  ];

  private atletaUrl = 'http://localhost:8080/api/atleta';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor( private http: HttpClient) {}

  private getNextId(): number {
    return this.atletiDBMock
      .map((atleta: Atleta) => atleta.id)
      .reduce((acc, cur) => {
        acc++;
        if (acc <= cur) {
          return acc;
        } else return acc--;
      }, 0);
  }

  getAtleti(): Observable<Array<Atleta>> {
    // return of(this.atletiDBMock);
    return this.http.get<Array<Atleta>>(this.atletaUrl)
    .pipe(
      catchError(this.handleError<Atleta[]>('getAtleti', []))
    );
  }

  addAtleta(atleta: Atleta): Observable<Atleta> {
    atleta.id = this.getNextId();
    this.atletiDBMock.push(atleta);
    return of(atleta);
  }

  removeAtleta(id: number): void {
    this.atletiDBMock = this.atletiDBMock.filter(
      (atleta: Atleta) => atleta.id !== id
    );
  }

  findById(id: number): Observable<Atleta | undefined> {
    return of(this.atletiDBMock.find((atleta: Atleta) => atleta.id === id));
  }

  editAppartamento(atleta: Atleta | undefined): Observable<Atleta> {
    if (!atleta) {
      throw new Error('Appartamento non trovato');
    }
    let atletaDirt: Atleta | undefined;
    this.findById(atleta.id).subscribe((atleta) => (atletaDirt = atleta));
    if (!atletaDirt) {
      throw new Error('Dispositivo non trovato');
    }
    let atletaUpdated = { ...atletaDirt, ...atleta };
    this.atletiDBMock.map((atleta: Atleta) => {
      if (atleta.id === atletaUpdated.id) {
        atleta = atletaUpdated;
      }
    });
    return of(atletaUpdated);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead


      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
