import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsistenciaprofePage } from './asistenciaprofe.page';

describe('AsistenciaprofePage', () => {
  let component: AsistenciaprofePage;
  let fixture: ComponentFixture<AsistenciaprofePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AsistenciaprofePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
