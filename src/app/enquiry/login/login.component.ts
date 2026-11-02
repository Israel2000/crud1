import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../../services/common/common.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userLogin: any = {
    userName: '',
    password: ''
  };

  router = inject(Router);
  commonService = inject(CommonService);
  
  onLogin() {
    // Implement login logic here
    if(this.userLogin.userName == "admin" && this.userLogin.password == "112244") {
      // check if the user is an admin logging in
      localStorage.setItem('enquiryApp', this.userLogin.userName);
      this.commonService.onLogin$.next(this.userLogin.userName);
      this.router.navigateByUrl('/status');
    } else {
      alert("Invalid username or password");
    }
  }

}
