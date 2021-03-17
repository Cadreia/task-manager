import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../_shared/services/token-storage/token-storage.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentUser: any;

  constructor(
    private tokenStorage: TokenStorageService
    ) {
    this.currentUser = this.tokenStorage.getUser();
  }

  ngOnInit(): void {

  }
}
