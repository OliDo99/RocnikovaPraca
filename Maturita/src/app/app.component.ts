import { Component,OnInit } from '@angular/core';
import { CommonModule,NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule,HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
     RouterOutlet,
     HttpClientModule,
     CommonModule,
     NgFor,
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.getData()

  }
  title = 'Maturita';
  url= "http://localhost:5000"
  phones=[]
  constructor(private http: HttpClient) {}
  getData(){
    this.http.get(this.url +"/getData")
    .subscribe((data:any) => {
      this.phones= data.data;
      
    })
  }

}
