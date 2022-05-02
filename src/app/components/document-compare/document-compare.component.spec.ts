import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentCompareComponent } from './document-compare.component';

describe('DocumentCompareComponent', () => {
  let component: DocumentCompareComponent;
  let fixture: ComponentFixture<DocumentCompareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentCompareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
