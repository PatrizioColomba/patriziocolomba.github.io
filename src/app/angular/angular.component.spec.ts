import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularComponent } from './angular.component';

describe('AngularComponent', () => {
  let component: AngularComponent;
  let fixture: ComponentFixture<AngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should have as title 'patriziocolomba'`, () => {
    const fixture = TestBed.createComponent(AngularComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('patriziocolomba');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AngularComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.card span').textContent).toContain('patriziocolomba app is running!');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
