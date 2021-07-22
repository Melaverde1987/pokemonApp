import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonDetailsComponent } from './pokemon-details.component';

import { RouterTestingModule } from '@angular/router/testing'; //testing


describe('PokemonDetailsComponent', () => {
  let component: PokemonDetailsComponent;
  let fixture: ComponentFixture<PokemonDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ PokemonDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //my test
  it("should create evolution", () => {
    let id = 3;
    component.getEvolution(id);
    expect(component.getEvolution).toBeTruthy();
    expect(component.getEvolution.length).toBeGreaterThanOrEqual(1);
  });
});
