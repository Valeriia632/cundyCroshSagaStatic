import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPartidasComponent } from './tabla-partidas.component';

describe('TablaPartidasComponent', () => {
  let component: TablaPartidasComponent;
  let fixture: ComponentFixture<TablaPartidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaPartidasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaPartidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
