import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositorioListComponent } from './repositorio-list.component';

describe('RepositorioListComponent', () => {
  let component: RepositorioListComponent;
  let fixture: ComponentFixture<RepositorioListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepositorioListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RepositorioListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
