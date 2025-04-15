import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private http = inject(HttpClient);
  readonly url = 'https://icherniakov.ru/yt-course/auth/token';
  constructor() { }

  public loginUser(data:{ username: string; password: string }){
    const formData = new FormData();
    formData.append('username',data.username);
    formData.append('password',data.password)
    return this.http.post(this.url,formData)
  }
}
