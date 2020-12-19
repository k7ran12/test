import { Component, ViewChild } from '@angular/core';
import {Renderer2, ElementRef } from '@angular/core';




export interface Tile {
  color: string;
  cols: number;
  rows: number;
  hora: string;
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba3';

  items = [];

  constructor(private rd: Renderer2,private el: ElementRef) {}

 

 
  onClick(hora, item, i){    

    //console.log(item); 
    //this.rd.setStyle(item, 'background-color', '#000080'); 
    this.items.push(i);
    console.log(this.items);

   
    }

   

    hacerReserva(){
      alert("reserva "+ this.items);
      
      for(var i = 0;i < this.items.length; i++){
        console.log(this.items[i] + " "+ this.tiles[this.items[i]].hora)
        this.tiles[this.items[i]].color = 'reservado';
      }
      this.items = [];
      
    }

    
    tiles: Tile[] = [
      {hora: '08:00', cols: 1, rows: 1, color: 'libre'},
      {hora: '08:30', cols: 1, rows: 1, color: 'libre'},
      {hora: '09:00', cols: 1, rows: 1, color: 'reservado'},
      {hora: '09:30', cols: 1, rows: 1, color: 'libre'},
      {hora: '10:00', cols: 1, rows: 1, color: 'libre'},
      {hora: '10:30', cols: 1, rows: 1, color: 'libre'},
      {hora: '11:00', cols: 1, rows: 1, color: 'libre'},
      {hora: '11:30', cols: 1, rows: 1, color: 'libre'},
      {hora: '12:00', cols: 1, rows: 1, color: 'libre'},
      {hora: '12:30', cols: 1, rows: 1, color: 'libre'},
      {hora: '13:00', cols: 1, rows: 1, color: 'libre'},
      {hora: '13:30', cols: 1, rows: 1, color: 'libre'},
      {hora: '14:00', cols: 1, rows: 1, color: 'libre'},
      {hora: '14:30', cols: 1, rows: 1, color: 'libre'},
      {hora: '15:00', cols: 1, rows: 1, color: 'libre'},
      {hora: '15:30', cols: 1, rows: 1, color: 'libre'},
      {hora: '16:00', cols: 1, rows: 1, color: 'libre'},
      {hora: '16:30', cols: 1, rows: 1, color: 'libre'},
      {hora: '17:00', cols: 1, rows: 1, color: 'libre'},
      {hora: '17:30', cols: 1, rows: 1, color: 'libre'},
      {hora: '18:00', cols: 1, rows: 1, color: 'libre'},
      {hora: '19:30', cols: 1, rows: 1, color: 'libre'},
      {hora: '20:00', cols: 1, rows: 1, color: 'libre'},
      {hora: '20:30', cols: 1, rows: 1, color: 'libre'},
      {hora: '21:00', cols: 1, rows: 1, color: 'libre'},
      {hora: '21:30', cols: 1, rows: 1, color: 'libre'},
      {hora: '22:00', cols: 1, rows: 1, color: 'libre'},
    ];

}


