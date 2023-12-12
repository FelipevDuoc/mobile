import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsignaturaprofesorPage } from './asignaturaprofesor.page';

describe('AsignaturaprofesorPage', () => {
  let component: AsignaturaprofesorPage;
  let fixture: ComponentFixture<AsignaturaprofesorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AsignaturaprofesorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
