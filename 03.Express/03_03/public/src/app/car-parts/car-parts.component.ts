import {Component} from '@angular/core';
import {CarSerice} from "../shared/car.service";
import {Hero} from "../shared/hero.model";

/**
 * Created by kitri12 on 2017-05-17.
 */

@Component({
  selector: 'car-parts',
  template: `
    <h2>My Heroes 프라미스 버전</h2>
    <div *ngIf="heroes">
      <ul *ngFor="let hero of heroes">
        <li>{{hero.id}} 번 {{hero.name}} 영웅</li>
      </ul>
    </div>
    <button type="button" (click)="btnClicked()">눌러주세요</button>
    <button type="button" (click)="postClicked()">포스트방식</button>
  `,
})
export class CarPartsComponent {
  heroes: Hero[] = [];
  constructor(private carService: CarSerice) {
  }

  btnClicked(): void {
    //this.carService.getCars().subscribe(data => this.heroes = data);
    this.carService.getCarsWithPromise().then(data => this.heroes = data);
  }

  postClicked(): void {
    this.carService.getNewHero().subscribe(data => this.heroes = data);
  }
}
