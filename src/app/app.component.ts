import { Component, AfterViewInit, ViewChild, OnDestroy} from '@angular/core';
import {ParentComponent} from "./parent/parent.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnDestroy{
  title = 'lifecycleHooks';


  @ViewChild(ParentComponent) child: ParentComponent | undefined
  ngAfterContentInit(): void {
  }

  ngAfterViewInit(): void {
    console.log(this.child);

  }

  ngOnDestroy(): void {

  }

}
