import { Component, OnInit, Injector } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SerieService } from 'src/app/serie/serie.service';
import { MovieService } from 'src/app/movie/movie.service';

@Component({
  selector: 'app-data-edit',
  templateUrl: './data-edit.component.html',
  styleUrls: ['./data-edit.component.css']
})
export class DataEditComponent implements OnInit {
  
  editForm : FormGroup;
  url = window.location.href;
  type = '';
  urlParsed : string[] =[];
  data : any = {};
  private id : string = '';
  
  constructor(private formBuilder : FormBuilder,
    private serieService : SerieService,
    private movieService : MovieService) { 
      
    }

  popGenero(indice : number){
    this.data.genres.splice(indice, 1);
    
  }

  popProdutora(indice : number){
    this.data.production_companies.splice(indice, 1);
  }
  ngOnInit() {
    this.editForm = this.formBuilder.group({
      name: [''],
      overview: [''],
      genres:[''],
      production_companies:[''],
    });

    this.getType();
    if(this.type == "Serie"){
      this.serieService.getById(this.id).subscribe(data => {this.data = data;
        this.setControls(); 
      });
       
    }
    else if(this.type == "Movie"){
      this.movieService.getById(this.id).subscribe(data => {this.data = data;
        this.setControls(); 
      });
    }
    
  }

  setControls(){
    if(this.type == "Serie"){
      this.editForm.controls["name"].setValue(this.data.name);
      
    }
    else if(this.type == "Movie"){
      this.editForm.controls["name"].setValue(this.data.title);
    }
    this.editForm.controls["overview"].setValue(this.data.overview);
    this.editForm.controls["genres"].setValue(this.data.genres);
    this.editForm.controls["production_companies"].setValue(this.data.production_companies);
    console.log(this.data.name);
    console.log(this.data.overview);
    console.log(this.data.genres);
    console.log(this.data.production_companies);  
  }
  getType(){
    this.urlParsed = this.url.split("/");
    if(this.urlParsed.some(value => value.toLocaleLowerCase() == "serie")){
      this.type = "Serie";
    }
    else if(this.urlParsed.some(value => value.toLocaleLowerCase() == "movie")){
      this.type = "Movie";
    }
    this.id = this.urlParsed[this.urlParsed.length-1];
    

  }
  get f() { 
    return this.editForm.controls;
  }
  save(){
    if(this.type == "Serie"){
      this.serieService.save(this.data);
    }
    else if(this.type == "Movie"){
      this.movieService.save(this.data);
    }
    
  }
}
