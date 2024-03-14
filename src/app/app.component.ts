import { Component } from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulartest';

  show = false;

  openpopup(){
    this.show = true;
  }

  closepopup(){
    this.show=false
  }

  constructor(private router: Router){}

  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }
}
