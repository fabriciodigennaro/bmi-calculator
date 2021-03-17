import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css'],
})
export class ResultadoComponent implements OnInit {
  bmi: number;
  result: string;
  intrerpretation: string;
  constructor(private route: ActivatedRoute) {
    this.result = '';
    this.intrerpretation = '';
    this.bmi = +route.snapshot.paramMap.get('value')!;
  }

  ngOnInit(): void {
    this.getResult();
  }

  getResult() {
    if(this.bmi >= 25) {
      this.result = 'Exceso de peso';
      this.intrerpretation = 'Para evitar problemas de salud y/o complicaciones mayores en el organismo. Es esencial abordar este estado con una dieta balanceada y ejercicio.';
    } else if (this.bmi >= 18.5) {
      this.result = 'Normal';
      this.intrerpretation = 'Bien. te encontrás con un peso saludable.';
    } else {
      this.result = 'Bajo peso';
      this.intrerpretation = 'La delgadez puede deberse a diversos factores, tales como genéticos y dietéticos. Independiente de su causa, es importante para tu bienestar mantener un peso saludable.';
    }
  }
}
