import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-data-transformation',
  templateUrl: './data-transformation.component.html',
  styleUrls: ['./data-transformation.component.css']
})
export class DataTransformationComponent implements OnInit {
  id: string | null;

  constructor(private route: ActivatedRoute) {
    this.id = null;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log('ID:', this.id);
    });
  }
}
