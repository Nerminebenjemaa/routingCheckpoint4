import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  color ='red';

  constructor( private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {

    // console.log(this.color)

    this.activatedRoute.params.subscribe(
      (params) => {
      // console.log(params)
      this.color = params.color;
       
     }
     
    );

    this.activatedRoute.queryParams.subscribe(

      (qp) => {

        console.log(qp)
      }
    )

  }



}
