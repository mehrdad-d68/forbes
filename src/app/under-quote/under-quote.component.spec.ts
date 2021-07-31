import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderQuoteComponent } from './under-quote.component';

describe('UnderQuoteComponent', () => {
  let component: UnderQuoteComponent;
  let fixture: ComponentFixture<UnderQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderQuoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
