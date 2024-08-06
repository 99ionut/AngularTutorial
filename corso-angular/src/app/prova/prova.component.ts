import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrl: './prova.component.css'
})
export class ProvaComponent implements OnInit{

cani = [{nome: 'roger', razza: 'golden', descrizione: 'aaaeqe qweqe q'}]

isDisabled = false
  
//casting specifico sarebbe piu giusto
readInput(e: Event){
  console.log((<HTMLInputElement>e.target).value);
}

//casting any funziona sempre
clicked(e: any){
  console.log("clicked");
  console.log(e);
  this.isDisabled = true;
}

constructor() {
  console.log("construttore");
}


ngOnInit(): void {
  console.log("ngOnInit");
}



}
