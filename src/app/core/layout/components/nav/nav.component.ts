import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() public categories : string[];

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  public redirectTo(path): void {
    this.router.navigate([path]);
  }
}
