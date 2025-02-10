import { Component } from '@angular/core';
import { UserInterface } from 'Modules/main/Interfaces/UserInterface';
import { UserService } from 'Modules/main/Services/user.service';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  users : UserInterface[] = [] as UserInterface[];
  displayedUsers : UserInterface[] = [] as UserInterface[];
  userFilter :string = '';
  constructor(private _userService: UserService){}

  userFilterChange(val : string){
    debounceTime(500);
    this.userFilter = val;
    console.log(this.userFilter);
    // this.displayedUsers = this.users.filter(e=> e.name === ev.value);
  }

  ngOnInit(){
    this._userService.getAllUsers().subscribe(res=>{
      this.users = res as UserInterface[];
      this.displayedUsers = res as UserInterface[];
    })
  }
}
