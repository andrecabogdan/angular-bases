import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroesList:string[] = ["Ironman", "Spiderman", "Barman"];
  public deletedHero?: string;

  deleteLastHero():void {
    this.deletedHero = this.heroesList.pop();
  }
}
