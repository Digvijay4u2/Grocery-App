import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubProductPageComponent } from './sub-product-page.component';

describe('SubProductPageComponent', () => {
  let component: SubProductPageComponent;
  let fixture: ComponentFixture<SubProductPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubProductPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
