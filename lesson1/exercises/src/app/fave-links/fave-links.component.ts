import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fave-links',
  templateUrl: './fave-links.component.html',
  styleUrls: ['./fave-links.component.css']
})
export class FaveLinksComponent implements OnInit {
  faveLinks = [
    'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 
    'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 
    'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  ];

  constructor() { }

  ngOnInit() {
  }

}
