import { Component, OnInit ,Input} from '@angular/core';
import {  AclServiceService } from '../acl-service.service';
import { LoginPageComponent} from '../login-page/login-page.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  uName = "";
  userId = "";
  password = "";
  userType  = "";
  sessionKey = "";
  userAccess = true;

  @Input() receivedParentMessage: string;

  constructor(public rest:AclServiceService,public getUser:LoginPageComponent) { }

  ngOnInit(): void {
  }



  getValue()
  {

      // this.userId =  this.getUser.GetUser();
      this.sessionKey = this.getUser.GetSessionKey();
      console.log(this.userId);
  		let post='{"uName":"'+this.uName+'","userId":"'+this.userId+'","password":"'+this.password+'","userType":"'+this.userType+'","sessionKey":"'+this.sessionKey+'"}'
  		console.log(post);
  		this.rest.createUser(post).subscribe((data: {}) => {
        console.log(data);
      });
      window.alert("User Created Successfully");


  }

  
}
