import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerMobileComponent } from './player-mobile.component';

describe('PlayerMobileComponent', () => {
  let component: PlayerMobileComponent;
  let fixture: ComponentFixture<PlayerMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
