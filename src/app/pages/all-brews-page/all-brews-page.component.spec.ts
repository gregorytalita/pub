import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBrewsPageComponent } from './all-brews-page.component';

describe('AllBrewsPageComponent', () => {
  let component: AllBrewsPageComponent;
  let fixture: ComponentFixture<AllBrewsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllBrewsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBrewsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
