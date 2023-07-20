import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderPaqueticoComponent } from './vender-paquetico.component';

describe('VenderPaqueticoComponent', () => {
  let component: VenderPaqueticoComponent;
  let fixture: ComponentFixture<VenderPaqueticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenderPaqueticoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VenderPaqueticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
