import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

import { User } from './user.model';
import { AuthData } from './auth-data.model';

@Injectable()

export class AuthService {
    // fake a userlogin
    authChange = new Subject<boolean>();
    /**
     * authChange = new Subject<boolean>();
     * rxjs-type event-emitter. ^
     * This is used to that we can inform
     * other parts of the app about changes
     * in the auth-status.
     * Regular Angular-event-emitters is only
     * used to create CustomEvents which is
     * emitted in components.
     */
    private user: User;

    constructor(private router: Router) { }
    registerUser(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 10000).toString()
        };
        this.authSuccessfully();
    }

    login(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 10000).toString()
        };
        console.log('AuthService: User ID nr:', this.user.userId, ' has logged in..');
        this.authSuccessfully();
    }

    logout() {
        this.user = null;
        this.authChange.next(false);
        this.router.navigate(['/login']);
    }

    getUser() {
        return { ...this.user };
    }

    isAuth() {
        return this.user != null;
    }

    private authSuccessfully() {
        this.authChange.next(true);
        this.router.navigate(['/training']);
    }
}
