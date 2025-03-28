import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-content',
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{

  photoCover:string = "https://aventurasnahistoria.com.br/media/uploads/2025/02/isaac-newton-capa.jpg"
  contentTitle:string = "Isaac Newton"
  contentDescription :string = "Fisíco."
  
  constructor() { }

  ngOnInit(): void {
  }

}
