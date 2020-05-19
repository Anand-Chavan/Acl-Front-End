import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { AclServiceService } from '../acl-service.service';
import { LoginPageComponent} from '../login-page/login-page.component';

@Component({
  selector: 'app-mapping',
  templateUrl: './mapping.component.html',
  styleUrls: ['./mapping.component.css']
})
export class MappingComponent implements OnInit {

  groups=[];
  users=[];
  newUser=[];
  selectedGroup ="";
  selectedUser =""; 
  userId = "";
  sessionKey = "";
  spinnerEnable = false;

  constructor(private _snackBar: MatSnackBar,public rest:AclServiceService,public getUser:LoginPageComponent) { }

  ngOnInit(): void 
  {

  	    this.rest.getAllUserInfo().subscribe((data: {}) => {
        console.log(data);
        this.getUserdata(data)
      });

  	   this.rest.getAllGroup().subscribe((data: {}) => {
        console.log(data);
        this.getGroupdata(data)
      });  

  }

  getUserdata(data)
  {
	  	// console.log(data);
	  	let array=Object.values(data.data);
	  	console.log(array);
	    for(var i=0;i<array.length;i++)
		{
			this.users.push(String(array[i][1]));
		}
  }

  getGroupdata(data)
  {
		// console.log(data);
		let array=Object.values(data.data);
		console.log(array);
	    for(var i=0;i<array.length;i++)
		{
			this.groups.push(String(array[i][1]));
		}
   }


  getValue()
  {
  		this.userId =  this.getUser.GetUser();
        this.sessionKey = this.getUser.GetSessionKey()
	  	let message = "Success";
	  	let action = "Done";
	  	console.log(this.selectedUser);
	  	console.log(this.selectedGroup);

	  	let post = '{"userId":"'+this.selectedUser+'","groupName":"'+this.selectedGroup+'","sessionKey":"'+this.sessionKey+'"}';
	  	this.rest.addUserIntoGroup(post).subscribe((data: {}) => {
	        console.log(data);
	      }); 
	  	 
	  	 this._snackBar.open(message, action, {
	      duration: 2000,
	    });


  }

  fetchGroupName(name)
  {
  	 this.rest.GetUserIdUsingGroupName(name).subscribe((data: {}) => {
        console.log(data);
        this.getNeedData(data)
      }); 
  }

  getNeedData(data)
  {
  		console.log(data);
  		let array=Object.values(data.data)
  		let checkArray = [];
		console.log(array);
	    for(var i=0;i<array.length;i++)
		{
			checkArray.push(String(array[i][0]));
		}
		console.log(checkArray);
		for(var i=0;i<checkArray.length;i++)
		{
			var index = this.users.indexOf(checkArray[i]);
			if (index >= 0) {
			  this.users.splice( index, 1 );
			}
		}
		console.log(this.users);
  }



}
