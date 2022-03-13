import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HelloComponent
      ],
    });

    fixture = TestBed.createComponent(AppComponent);
  });

  it('should create the app', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it(`should have a hello component`, () => {
    const hello = fixture.debugElement.query(By.css('hello'));
    expect(hello).toBeTruthy();
  });

  it('should render a message with the name', () => {
    fixture.detectChanges();

    const name = fixture.componentInstance.name;
    const h1: HTMLElement = fixture.debugElement.query(By.css('hello')).nativeElement.querySelector('h1');
    expect(h1.innerText).toContain(name);
  });
});
