import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JwtService } from '../services';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor(private jwtService: JwtService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
// Lấy chiều cao của cửa sổ trình duyệt
var windowHeight = window.innerHeight;
var windowWidtch = window.innerWidth;
    const token = this.jwtService.getToken();

    if (token) {
      headersConfig['Authorization'] = `Token ${token}`; 
    }
    headersConfig['SizeScreen']=windowHeight+"x"+windowWidtch
    const request = req.clone({ setHeaders: headersConfig });
    return next.handle(request);
  }
}
