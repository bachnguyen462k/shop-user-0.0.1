import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User, UserService, Profile } from '../core';
import { concatMap ,  tap } from 'rxjs/operators';
import {faGear,faShoppingCart,faAddressBook,faBell,faRightToBracket,faIndent } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-profile-page',
  templateUrl: './profile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {
  faGear = faGear;
  faShoppingCart = faShoppingCart;
  faAddressBook = faAddressBook;
  faBell = faBell;
  faRightToBracket = faRightToBracket;
  faIndent = faIndent
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private cd: ChangeDetectorRef,
    private router: Router,
  ) { }

  profile: Profile;
  currentUser: User;
  isUser: boolean;

  ngOnInit() {
    this.route.data.pipe(
      concatMap((data: { profile: Profile }) => {
        this.profile = data.profile;
        // Load the current user's data.
        return this.userService.currentUser.pipe(tap(
          (userData: User) => {
            this.currentUser = userData;
            this.isUser = (this.currentUser.username === this.profile.username);
          }
        ));
      })
    ).subscribe((() => {
      this.cd.markForCheck();
    }));
  }

  onToggleFollowing(following: boolean) {
    this.profile.following = following;
  }


  logout() {
    this.userService.purgeAuth();
    this.router.navigateByUrl('/');
  }  
}
