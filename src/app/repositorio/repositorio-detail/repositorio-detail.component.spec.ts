import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositorioDetailComponent } from './repositorio-detail.component';

describe('RepositorioDetailComponent', () => {
  let component: RepositorioDetailComponent;
  let fixture: ComponentFixture<RepositorioDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepositorioDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RepositorioDetailComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
