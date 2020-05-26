import { Component, OnInit } from '@angular/core';
import { razas } from '../razas.model';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  search:string="";

  arr = ["gato", "perro", "iguana", "conejo", "pájaro"]

}
