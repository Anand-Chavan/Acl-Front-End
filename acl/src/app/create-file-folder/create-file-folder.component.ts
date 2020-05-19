import { Component, OnInit } from '@angular/core';
import { AclServiceService } from '../acl-service.service';
import { LoginPageComponent} from '../login-page/login-page.component';

@Component({
  selector: 'app-create-file-folder',
  templateUrl: './create-file-folder.component.html',
  styleUrls: ['./create-file-folder.component.css']
})
export class CreateFileFolderComponent implements OnInit {

  filefolderPath = "";
  filefolderName = "";
  filesOrFolderId = "";
  userId = "";
  sessionKey = "";

  constructor(public rest:AclServiceService,public getUser:LoginPageComponent) { }

  ngOnInit(): void {
  }

  getValue()
  {
    this.userId =  this.getUser.GetUser();
    this.sessionKey = this.getUser.GetSessionKey();
  	let post ='{"filefolderPath":"'+this.filefolderPath+'","filefolderName":"'+this.filefolderName+'","filesOrFolderId":"'+this.filesOrFolderId+'" ,"userId":"'+this.userId+'","sessionKey":"'+this.sessionKey+'"}';
  	 this.rest.createFileFolder(post).subscribe((data: {}) => {
        console.log(data);
        this.getUserdata(data)
      });
  }
  getUserdata(data)
  {

  }
}
