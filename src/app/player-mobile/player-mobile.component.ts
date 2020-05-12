import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-player-mobile',
  templateUrl: './player-mobile.component.html',
  styleUrls: ['./player-mobile.component.scss']
})
export class PlayerMobileComponent implements OnInit {
  @Input() name;
  @Input() playerActive: boolean = false;
  @Input() image = '1.webp';


  constructor() { }

  ngOnInit(): void {
  }

}
