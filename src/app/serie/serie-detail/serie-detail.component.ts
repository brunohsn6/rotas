import { Component, OnInit } from '@angular/core';
import { SerieService } from '../serie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataEditComponent } from 'src/app/edit/data-edit/data-edit.component';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.css']
})
export class SerieDetailComponent implements OnInit {
  
  
  editForm : FormGroup;
  showNew : boolean = false;
  serie = {}


  constructor(private _activatedRoute: ActivatedRoute,
    private _serieService: SerieService,
    private formBuilder: FormBuilder,
    private _router : Router) { }

  

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      let id = params['id'];

      this._serieService.getById(id)
        .subscribe(response => {
          this.serie = response;
        })
    });
  }

  edit(serie){
    this._router.navigate(['edit',"serie", serie.id])

  }
  
}
