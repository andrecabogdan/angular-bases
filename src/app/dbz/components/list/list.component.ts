import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [{
  name: 'Trunks',
  power: 10
  }]

  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();

  deleteCharacterById(idCharacter?: string):void {
    if(!idCharacter) return;
    this.onDeleteId.emit(idCharacter);
  }
}
