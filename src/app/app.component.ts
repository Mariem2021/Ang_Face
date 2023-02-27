import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  myOtherSnap! : FaceSnap;
  myLastSnap! : FaceSnap;

  ngOnInit() {
    this.mySnap = new FaceSnap(
      'Archibald',
      'Ma meilleure amie depuis toute petite !',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      0
    );
    this.myOtherSnap = new FaceSnap (
      'Three Rock Mountain',
      'Un endroit magnifique',
      'https://th.bing.com/th/id/R.d7231b7be961f8713131d8470335a8ae?rik=apiEFlPN8eebeQ&riu=http%3a%2f%2fcdn.shopify.com%2fs%2ffiles%2f1%2f0019%2f9881%2f5268%2farticles%2fNature_et_zen.com_4_1024x1024.jpg%3fv%3d1528163013&ehk=6K92%2fCb3pOYe8SECCfl5WiHvg02aagV5C9dSuQ87NHg%3d&risl=&pid=ImgRaw&r=0',
      new Date(),
      0
  );
  
  this.myLastSnap = new FaceSnap (
      'Three Rock Mountain',
      'Un endroit magnifique',
      'https://th.bing.com/th/id/R.d7231b7be961f8713131d8470335a8ae?rik=apiEFlPN8eebeQ&riu=http%3a%2f%2fcdn.shopify.com%2fs%2ffiles%2f1%2f0019%2f9881%2f5268%2farticles%2fNature_et_zen.com_4_1024x1024.jpg%3fv%3d1528163013&ehk=6K92%2fCb3pOYe8SECCfl5WiHvg02aagV5C9dSuQ87NHg%3d&risl=&pid=ImgRaw&r=0',
      new Date(),
      0
  );
  }
}