import { Component, OnInit ,Input} from '@angular/core';
import { AclServiceService } from '../acl-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginSuccess=false;
  firstLogin = true;
  username = "";
  password = "";
  user="abc";
  userId= "abc";
  adminEnable=true;
  userArray = [];
  count=0;
  logoutState =  false;
  dataSource = [];
  icon = [];
  change = false;
  changeButtonEnable = false;
  groups=[];
  getEnable=false;
  putEnable=false;
  delEnable=false;
  postEnable=false;
  mainEnable=false;
  fileFolderEnale=false;
  createEnable = false;
  mappingEnable = false;
  goLogin = false;

  
  constructor(public rest:AclServiceService,private router: Router) { }

  ngOnInit(): void {

    this.rest.getAllUserInfo().subscribe((data: {}) => {
        console.log(data);
        this.getUserdata(data)
      });



  }


  GetMethod()
  {
    console.log("GET");
    this.getEnable = true;
    this.putEnable  = false;
    this.postEnable =false;
    this.delEnable = false;
    this.fileFolderEnale = false;
    this.createEnable = false;
    this.change = false;
    this.changeButtonEnable = false;
    this.mappingEnable = false;
  }

  postMethod()
  {
    console.log("POST");
    this.getEnable = false;
    this.putEnable  = false;
    this.postEnable =true;
    this.delEnable = false;
    this.fileFolderEnale = false;
    this.createEnable = false;
    this.change = false;
    this.changeButtonEnable = false;
    this.mappingEnable = false;
  }

  putMethod()
  {
    console.log("PUT");
    this.getEnable = false;
    this.putEnable  = true;
    this.postEnable =false;
    this.delEnable = false;
    this.fileFolderEnale = false;
    this.createEnable = false;
    this.change = false;
    this.changeButtonEnable = false;
    this.mappingEnable = false;
  }

  deleteMethod()
  {
    console.log("DELETE");
    this.getEnable = false;
    this.putEnable  = false;
    this.postEnable =false;
    this.delEnable = true;
    this.fileFolderEnale = false;
    this.createEnable = false;
    this.change = false;
    this.changeButtonEnable = false;
    this.mappingEnable = false;
  }



  getUserdata(data)
  {
      let array=Object.values(data.data);
      this.userArray=[];
      this.icon=[];
      for(var i=0;i<array.length;i++)
      {
          this.userArray.push(array[i][0]);
          // this.count++;
      }

      console.log(array);
      let MArray = [];
      let icons=[];
      for(var i=0;i<array.length;i++)
      {
         let field = {'userName':array[i][0],'userId':array[i][1],'password':array[i][2],'userType':array[i][3]};
         MArray.push(field);
         if(array[i][3] == 's')
            icons.push('portrait');
         else
            icons.push('keyboard_arrow_up');
      }
      this.icon = icons;
      this.dataSource = MArray;
      // console.log(this.dataSource['userType']);

  }

  getUser(user,i)
  {
    this.user=user;

   console.log(this.dataSource[i]['userName'],this.dataSource[i]['userType']);
      if(this.dataSource[i]['userType'] == 's')
        {
           this.adminEnable=true; 
        }
        else
        {
          this.adminEnable=false;
        }
    this.userId = this.dataSource[i]['userId'];

  }

  getItem()
  {
    this.goLogin = true;
        this.rest.getAllUserInfo().subscribe((data: {}) => {
        console.log(data);
        this.getUserdata(data)
      });
  }


  logout()
  {
      this.rest.logout().subscribe((data: {}) => {
        console.log(data);
        this.getUserdata(data)
      });


      this.logoutState = true;

      this.router.navigate(['/app']);
  }

  fileAndFolder()
  {
    this.getEnable = false;
    this.putEnable  = false;
    this.postEnable =false;
    this.delEnable = false;
    this.fileFolderEnale = true;
    this.createEnable = false;
    this.change = false;
    this.changeButtonEnable = false;
    this.mappingEnable = false;
  }

  createContent()
  {
    this.getEnable = false;
    this.putEnable  = false;
    this.postEnable =false;
    this.delEnable = false;
    this.fileFolderEnale = false;
    this.createEnable = true;
    this.change = false;
    this.changeButtonEnable = false;
    this.mappingEnable = false;
  }

  changePermission()
  {
    this.getEnable = false;
    this.putEnable  = false;
    this.postEnable =false;
    this.delEnable = false;
    this.fileFolderEnale = false;
    this.createEnable = false;
    this.change = true;
    this.changeButtonEnable = false;
    this.mappingEnable = false;
  }

  getGroupItem()
  {
      this.rest.getGroupInfo(this.userId).subscribe((data: {}) => {
        console.log(data);
        this.getGroupdata(data)
      });
  }
 
  getGroupdata(data)
  {
      let array=Object.values(data.data);
      let temp=[];
      for(var i=0;i<array.length;i++)
      {
          temp.push(array[i][0]);
      }
      this.groups = temp;
  }

  getGroup(item,i)
  {

  }

  mapping()
  {
    this.getEnable = false;
    this.putEnable  = false;
    this.postEnable =false;
    this.delEnable = false;
    this.fileFolderEnale = false;
    this.createEnable = false;
    this.change = false;
    this.changeButtonEnable = false;
    this.mappingEnable = true;
  }

}
