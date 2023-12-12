import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HorarioprofesorPage } from './horarioprofesor.page';

describe('HorarioprofesorPage', () => {
  let component: HorarioprofesorPage;
  let fixture: ComponentFixture<HorarioprofesorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HorarioprofesorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
