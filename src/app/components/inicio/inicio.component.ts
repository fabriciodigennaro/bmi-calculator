import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  public age = 26;
  private weight = 61;
  height = 170;
  gender = '';


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  get getWeight(){
    return this.weight;
  }

  setWeight(weight: number){
    this.weight = weight;
  }

  changeHeight(event: any) {
    this.height = event.target.value
  }

  male() {
    this.gender = 'Male';
  }

  female() {
    this.gender = 'Female';
  }

  BMICalculate() {
    const BMI = this.weight / Math.pow(this.height/100, 2);
    this.router.navigate(['/resultado', BMI.toFixed(1)])
  }

}
