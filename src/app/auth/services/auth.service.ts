import { inject, Injectable, signal } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, user, User } from '@angular/fire/auth';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth: Auth = inject(Auth);
  private isAdminSubject = new BehaviorSubject<boolean>(false);
  isAdmin$ = this.isAdminSubject.asObservable();
  user$ = user(this.auth);
  isLoggedIn$: Observable<boolean>;
  currentUser = signal<User | undefined>(undefined)

  constructor() {
    this.isLoggedIn$ = this.user$.pipe(map(user => !!user));
    this.user$.subscribe(user => this.checkAdminStatus(user?.email));

    this.user$.subscribe((user)=>{
      this.currentUser.set(user ?? undefined)
    })
  }

  async login(email: string, password: string): Promise<void> {
    await signInWithEmailAndPassword(this.auth, email, password);
  }

  async register(email: string, password: string): Promise<void> {
    await createUserWithEmailAndPassword(this.auth, email, password);
  }

  async logout(): Promise<void> {
    await signOut(this.auth);
  }

  private checkAdminStatus(email: string | null | undefined): void {
    this.isAdminSubject.next(email?.toLowerCase() === 'admin@admin.com');
  }

  getCurrentUser() {
    return this.auth.currentUser;
  }
}
