import {
  Component, OnInit, OnChanges, SimpleChanges, Input, DoCheck
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {

  constructor() {
  }
  @Input() name: string = '';
  @Input() obj: any
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    console.log(this.name)
    console.log(this.obj)
    }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    console.log(this.obj,'from Docheck')
  }

  // @HostListener('document:click', ['$event'])
  // onClick(event: any) {
  //   console.log('clicked Me', event)
  // }
}
