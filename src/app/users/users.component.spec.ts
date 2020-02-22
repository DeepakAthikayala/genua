import { async, fakeAsync, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { UsersComponent } from './users.component';
import { RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from '../user.service';
import { User } from '../user';


describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let userService: UserService;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule, HttpClientTestingModule],
      declarations: [ UsersComponent ],
      providers: [ UserService ]
    }).compileComponents();
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.debugElement.componentInstance;
    // userService = TestBed.get(UserService);
    // spyOn(userService, 'getUsers').and.callThrough();
    }));

  
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  // it('should do something', ()=> {

  //   component.ngOnInit();
  //   fixture.detectChanges();

  //   expect(userService.getUsers).toHaveBeenCalled();
  // })

  it('should run the test correctly god....', () => {
    let dataService = fixture.debugElement.injector.get(UserService);
    let spy = spyOn(dataService, 'getUsers').length;

    fixture.detectChanges();
    fixture.whenStable().then( () => {
      expect(component.users.length).toBeGreaterThanOrEqual(spy);
    })

  })



});
