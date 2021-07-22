import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonListComponent } from './pokemon-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'; //testing
import { NgxPaginationModule } from 'ngx-pagination';

beforeEach(() => TestBed.configureTestingModule({
  imports: [HttpClientTestingModule]
}));

describe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ NgxPaginationModule ],
      declarations: [ PokemonListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    //fixture = TestBed.createComponent(PokemonListComponent);
    expect(component).toBeTruthy();
  });

  it("getAllPokemons", () => {
    expect('getAllPokemons').toBeDefined();
  });

  //my test
  it("should create a list of pokemons", () => {
    component.getAllPokemons();
    expect(component.getAllPokemons).toBeDefined();
  });
});