import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoneComponent } from './workone.component';

describe('WorkoneComponent', () => {
  let component: WorkoneComponent;
  let fixture: ComponentFixture<WorkoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
