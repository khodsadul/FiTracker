import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth-service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit, OnDestroy {

  isAuth!: boolean;
  @Output() sidenavClose = new EventEmitter<void>();
  authSubscription!: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authSubscription=this.authService.authChange.subscribe(authStatus => {
      this.isAuth=authStatus;
    });
  }

  onClose() {
    this.sidenavClose.emit();
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

  logout() {
    this.authService.logout();
  }

}
