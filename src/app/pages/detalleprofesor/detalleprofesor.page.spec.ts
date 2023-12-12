import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleprofesorPage } from './detalleprofesor.page';

describe('DetalleprofesorPage', () => {
  let component: DetalleprofesorPage;
  let fixture: ComponentFixture<DetalleprofesorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetalleprofesorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
