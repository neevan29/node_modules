import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registered = false;
	submitted = false;
  userForm: FormGroup;
  user:any;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router)
  {
    /*this.http.get('http://localhost:3000/login').subscribe((data:any) => {
      this.user = data.user;
      console.log(this.user);
    }, error => {
        console.log("There was an error generating the proper GUID on the server", error);
    });*/
  }

  invalidUserName()
  {
  	return (this.submitted && this.userForm.controls.username.errors != null);
  }

  invalidPassWord()
  {
  	return (this.submitted && this.userForm.controls.password.errors != null);
  }

  ngOnInit()
  {
    localStorage.removeItem('currentUser');
  	this.userForm = this.formBuilder.group({
  		username: ['', Validators.required],
  		password: ['', [Validators.required, Validators.minLength(5), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]],
    });

  }

  onSubmit()
  {

    
  	this.submitted = true;
  		//let data: any = Object.assign({user: this.user}, this.userForm.value);

  		//this.http.post('http://localhost:3000/login', data).subscribe((data:any) => {
	      
        if($('#username').val()=='demo_scenai' && $('#password').val()=='12345678')
        {
          localStorage.setItem('currentUser', 'demo_scenai');
          this.router.navigate(['/dashboard']);
        }
        
	  
  		this.registered = true;
  	
  }

}
