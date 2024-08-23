import { Component } from '@angular/core';
import { SplitButtonModule } from 'primeng/splitbutton';
import { PrimeIcons, MenuItem } from 'primeng/api';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SplitButtonModule,  
    
    
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
   items: Array<any> = [];


   ngOnInit(){
    this.items = [
      {
        label: 'new',
        icon: "",
      }
    ]
  
}

}

