import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMoshifyComponent } from './ngx-moshify.component';

describe('NgxMoshifyComponent', () => {
  let component: NgxMoshifyComponent;
  let fixture: ComponentFixture<NgxMoshifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxMoshifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxMoshifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
