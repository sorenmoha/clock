import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  second = 0; 
  hour = 0;
  minute = 0;
  d!: Date; 

  ngOnInit() {
    setInterval(() => {
      this.d = new Date();
      this.second = this.d.getSeconds() * 6;
      this.minute = this.d.getMinutes() * 6;
      this.hour = this.d.getHours() * 30 + Math.round(this.minute / 12);
    }, 1000);
  }
}
