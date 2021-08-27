import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Best Photos Ever (To Me [in my humble opinion])';
  image1 = 'https://upload.wikimedia.org/wikipedia/commons/8/88/Stereographic_projection_in_3D.svg';
  image2 = 'https://upload.wikimedia.org/wikipedia/commons/8/88/Stereographic_projection_in_3D.svg';
  image3 = 'https://upload.wikimedia.org/wikipedia/commons/8/88/Stereographic_projection_in_3D.svg';

  constructor() { }

  ngOnInit() {
  }

}