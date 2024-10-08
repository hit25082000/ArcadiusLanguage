import { inject, Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, deleteUser, getAuth, sendEmailVerification, sendPasswordResetEmail, signInWithCredential, signInWithCustomToken, signInWithEmailAndPassword, updateCurrentUser, updateEmail, updatePassword, updateProfile, User, user } from '@angular/fire/auth';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth: Auth = inject(Auth);
  user$ = user(this.auth);
  userSubscription: Subscription;

  constructor() {
    this.userSubscription = this.user$.subscribe((aUser: any | null) => {
     console.log(aUser);
    })
  }

  getCurrentUser(){
    return this.auth.currentUser;
  }

  async register(email : string,password : string){
    var userCredential = await createUserWithEmailAndPassword(this.auth, email, password)

    return sendEmailVerification(userCredential.user)
  }

  login(email : string,password : string){
    return signInWithEmailAndPassword(this.auth,email, password);
  }

  logout(){
    this.auth.signOut()
  }

  passwordReset(email : string){
    sendPasswordResetEmail(this.auth, email)
    .then(() => {
      // Password reset email sent!
      // ..
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  }

  isLoggedIn(): boolean {
    return !!this.auth.currentUser;
  }

  ngOnDestroy() {
    this.auth.signOut()
  }
}
