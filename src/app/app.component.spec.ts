import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
    });

    fixture = TestBed.createComponent(AppComponent);
  });

  it('should render a message with the name', () => {
    fixture.detectChanges();

    const name = fixture.componentInstance.name;
    const h1: HTMLElement = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(h1.innerText).toContain(name);
  });
});
