import { Component, inject, signal } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginFormInterface } from '../../core/interface/login.interface';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers:[AuthService]
})
export class LoginComponent {
  private fb = inject(NonNullableFormBuilder);
  private authService = inject(AuthService);

  public eyeOn = signal<boolean>(false);
  public loginForm:FormGroup<LoginFormInterface> =this.fb.group({
    username:['',Validators.required],
    password:['',Validators.required]
  })
 
  public changeVisibility():void{
    this.eyeOn.update((value)=>value = !value)
  }
  
  public send():void{
    if(this.loginForm.valid){
      const { username, password } = this.loginForm.controls;
      const userData: { username: string; password: string } = {
        username: username.value,
        password: password.value
      };

      this.authService.loginUser(userData).subscribe({
        next:(res)=>{
          console.log(res)
        }
      })
    }
  }
}
