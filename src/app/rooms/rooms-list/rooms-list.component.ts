import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { Room } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnChanges, OnDestroy {

  @Input() rooms: Room[] = [];
  @Input() comeTitle: string = '';
  @Output() selectedRoom = new EventEmitter<Room>();


  ngOnChanges(changes: SimpleChanges): void {
    // called when class or component has input value
    // and the input property has changed
    // console.log(changes);
    console.log(changes['comeTitle'] !== undefined ? changes['comeTitle'] : 'Title not changed');
    console.log(changes['rooms'] !== undefined ? changes['rooms'] : 'Rooms not changed');

    if (changes['comeTitle']) {
      this.comeTitle = changes['comeTitle'].currentValue.toUpperCase();
    }
  }

  selectRoom(room: Room) {
    this.selectedRoom.emit(room);
  }

  ngOnDestroy(): void {
    console.log('RoomsList component is destroyed');
  }
}
