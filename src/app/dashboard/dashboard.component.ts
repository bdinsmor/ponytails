import { Component, OnInit } from '@angular/core';
import {PlayersService} from '../players.service';
import {Player} from '../player';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  providers: [PlayersService]
})
export class DashboardComponent implements OnInit {
  playersError: Boolean = false;
  players: Player[] = [];
  errorMessage:any;
  constructor(public playersService: PlayersService) { }

  ngOnInit() {
    this.getPlayers();
  }
  addPlayer() { }
  getPlayers() {
    this.playersService.getData().subscribe(
      data => { this.players = data},
      err => { console.error("caught error: " + err);this.playersError = true }
    );
    
  }

}
