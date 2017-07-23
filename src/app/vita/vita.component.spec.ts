import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VitaComponent } from './vita.component';

describe('VitaComponent', () => {
  let component: VitaComponent;
  let fixture: ComponentFixture<VitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
