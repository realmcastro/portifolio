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
  
   
   ngOnInit(){
    
  
}

fillbutton(){
  console.log("passou");
  const button = document.querySelector('.fill-button') as HTMLElement;
  button?.addEventListener('click', ()=>{
  button.classList.toggle('clicked');

 });
}
}