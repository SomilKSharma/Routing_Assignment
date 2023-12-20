import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-passport',
  templateUrl: './passport.component.html',
  styleUrl: './passport.component.css'
})
export class PassportComponent implements OnInit {

  id: string | null;

  constructor(private route: ActivatedRoute) {
    this.id = null;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
  }

}
