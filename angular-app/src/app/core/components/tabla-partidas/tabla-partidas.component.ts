import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tabla-partidas',
  templateUrl: './tabla-partidas.component.html',
  styleUrls: ['./tabla-partidas.component.css']
})
export class TablaPartidasComponent implements OnInit {
  partidas: any[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://cundycroshapi.azurewebsites.net/cundy').subscribe((data: any) => {
      this.partidas = data.partidas;
    }, err => {
      console.log(err.message);
    }, () => {
      console.log('completed');
    });
  }
}

