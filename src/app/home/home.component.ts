import { Component, OnInit } from '@angular/core';
import { uuid } from 'uuidv4';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Title: string = 'KConnect'
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  createRoom(){
    console.log('create Room');
    this.router.navigate([`/${uuid()}`]);
    
  }

}
