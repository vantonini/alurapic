import { Injectable } from "@angular/core";
import { 
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpSentEvent,
  HttpHeaderResponse,
  HttpProgressEvent,
  HttpResponse,
  HttpUserEvent
} from "@angular/common/http";
import { Observable } from "rxjs";

import { LoadingService } from "./loading.service";
import { tap } from "rxjs/internal/operators/tap";


@Injectable({ providedIn: 'root' })
export class LoadingInterceptor implements HttpInterceptor { 

  constructor(
    private loadingService: LoadingService
    ) { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
    return next.handle(req)
    .pipe(tap(event => {
      if(event instanceof HttpResponse) {
        this.loadingService.stop();
      } else {
        this.loadingService.start();
      }
    }));
  }
}