import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloWorld';
  myColor = 'rgb(25,200,89)';
  myClass = 'PURPLE'
  changeColor():void{
    if (this.myClass=='PURPLE'){
      this.myClass = 'GREEN'
      this.myColor = 'green';
    } else {
      this.myClass = 'PURPLE'
      this.myColor = 'purple';
    }
  }
}
