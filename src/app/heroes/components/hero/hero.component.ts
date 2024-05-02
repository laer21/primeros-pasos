import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'Batman';
  public age: number = 35;

  get capitalizedName(): string{
    return this.name.toUpperCase()
  }

  getHeroDescription(): string{
    return `${this.name} - ${this.age}`
  }

  changeName(): void{
    this.name = 'Spiderman'
  }

  changeAge(): void{
    this.age = 20
  }

  reset(): void{
    this.name = 'Batman';
    this.age = 35;
  }
}
