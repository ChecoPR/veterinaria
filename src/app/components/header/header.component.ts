import { Component, OnInit, ViewEncapsulation, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EventEmitter } from 'protractor';
import { razas } from '../razas.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  
})
export class HeaderComponent implements OnInit {

  constructor() { 
    console.log("Componente header creado")
  }

  ngOnInit(): void {
  }

  search:string="";
  razas: razas[] = [{nombre:'perro'}, {nombre:'gato'}, {nombre:'conejo'}, {nombre:'iguana'}];
 
}
