import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  @Input() name;
  @Input() image = '1.webp';
  @Input() playerActive: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
