import { AuthService } from './auth.service';
import { HttpInterceptor } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core'

@Injectable()
export class AuthInterseptorService implements HttpInterceptor {

    constructor(private injector: Injector) {
    }

    intercept(req , next) {
        var auth = this.injector.get(AuthService);
        var authRequest = req.clone({
            headers: req.headers.set('Authorization', 'token ' + auth.getToken())
        })
        return next.handle(authRequest)
    }
}