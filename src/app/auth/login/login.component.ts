import { Component, inject, signal } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginFormInterface } from '../../core/interface/login.interface';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private fb = inject(NonNullableFormBuilder);

  public eyeOn = signal<boolean>(false);
  public loginForm:FormGroup<LoginFormInterface> =this.fb.group({
    login:['',Validators.required],
    password:['',Validators.required]
  })
 
  public changeVisibility():void{
    this.eyeOn.update((value)=>value = !value)
  }
  
  public send():void{
    console.log(this.loginForm);
  }
}
