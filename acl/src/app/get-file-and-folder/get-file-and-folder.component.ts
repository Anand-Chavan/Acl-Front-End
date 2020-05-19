import { Component, OnInit } from '@angular/core';
import { AclServiceService } from '../acl-service.service';
import { LoginPageComponent} from '../login-page/login-page.component';

@Component({
  selector: 'app-get-file-and-folder',
  templateUrl: './get-file-and-folder.component.html',
  styleUrls: ['./get-file-and-folder.component.css']
})
export class GetFileAndFolderComponent implements OnInit {

  showTable = false;
  filefolderPath = "";
  userId = "";
  sessionKey = "";

  displayedColumns=['filePath','fileName','FileOrDirectory','Id','permission','operation'];
  dataSource=[];


  constructor(public rest:AclServiceService,public getUser:LoginPageComponent) { }

  ngOnInit(){
      
      this.getValue();

  	
  }

   getUserdata(data)
  {
      let array=Object.values(data.data);
      console.log(array);
      let MArray=[];

    
      for(var i=0;i<array.length;i++)
      {
         let doSome = ""
         if(array[i][4] == 'r')
         {
            doSome = 'visibility';
         }
         else
         {
            doSome = 'edit';
         }

         let field = {'filePath':array[i][0],'fileName':array[i][1],'FileOrDirectory':array[i][2],'Id':array[i][3],'permission':array[i][4],'operation':doSome};
         MArray.push(field)
      }
      this.dataSource = MArray;
      console.log(this.dataSource[0]);
      console.log(typeof(this.dataSource));
  }

  performOperation(index)
  {
    console.log(typeof(this.dataSource[index]['fileName']));
    if(this.dataSource[index]['permission']=='r')
      window.alert('File open for only reading');
    else
      window.alert('File open for only editing');

  }

  getValue()
  {
    this.userId =  this.getUser.GetUser();
    this.sessionKey = this.getUser.GetSessionKey();
    console.log(this.sessionKey,this.userId);
    let post = '{"userId":"'+this.userId+'" ,"sessionKey":"'+this.sessionKey+'"}';
    this.rest.getFileFolder(post).subscribe((data: {}) => {
        console.log(data);
        this.getUserdata(data)
      });
    this.showTable = true;
  }

  changePermission(index)
  {
      let post = '{"filefolderPath":"'+this.dataSource[index]['filePath']+'","filefolderName":"'+this.dataSource[index]['fileName']+'","filesOrFolderId":"'+this.dataSource[index]['FileOrDirectory']+'" ,"useridOrGroupId":"'+this.dataSource[index]['Id']+'","sessionKey":"abcd","whocallToChange":"sagar","permissionValue":"r"}'
      this.rest.changePermission(post).subscribe((data: {}) => {
        console.log(data);
        // this.getUserdata(data)
      });
  }

}
