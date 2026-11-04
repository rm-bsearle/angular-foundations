import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatalogComponenet } from './catalog.componenet';

describe('CatalogComponenet', () => {
  let component: CatalogComponenet;
  let fixture: ComponentFixture<CatalogComponenet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogComponenet]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CatalogComponenet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
