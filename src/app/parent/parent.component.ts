import {Component, OnInit, AfterContentInit, ContentChild, ElementRef} from '@angular/core';
import {ChildComponent} from "../child/child.component";


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterContentInit {

  name: string = "Joe";
  obj: any = {
    name: 'Ann'
  };

  @ContentChild('usa') contentUsa: ElementRef | undefined;
  @ContentChild('arm') contentArm: ElementRef | undefined;
  @ContentChild(ChildComponent) childComponent: ContentChild | undefined;

  constructor() {
  }

  ngAfterContentInit(): void {
    console.log(this.contentUsa, 'contentUsa')
    console.log(this.contentArm, 'contentArm')
  }

  ngOnInit(): void {
  }

  changeRef() {
    this.obj.name = "Jiana"
  }

}

