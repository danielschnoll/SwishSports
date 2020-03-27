import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwishHeaderComponent } from './swish-header.component';

describe('SwishHeaderComponent', () => {
  let component: SwishHeaderComponent;
  let fixture: ComponentFixture<SwishHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwishHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwishHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
