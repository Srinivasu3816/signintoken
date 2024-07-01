
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  
  http=inject(HttpClient);
  router=inject(Router);
signObj:any={
  "EmailId": "",
  "Password": ""
}

solve(){
this.http.post("https://freeapi.miniprojectideas.com/api/User/Login",this.signObj).subscribe((res:any)=>{
  if(res.result){
    alert('user logged in Successfully');
    localStorage.setItem('angular18token',res.data.token);
    this.router.navigateByUrl('dashboard');
  }else{
    alert(res.message);
  }
})
}
}
