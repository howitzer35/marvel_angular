import { Component } from '@angular/core';
import { MarvelService } from './marvel.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ALL OF THE SUPERHEROES ALWAYS';

  character;

    constructor(private marvelService: MarvelService){}
  
    getDataFromService(searchTerm: string = ''){
      this.marvelService.getCharacters(searchTerm)
      .subscribe(
        character => {
          this.character = character.data.results;
        }
      )
    }
  
  
  ngOnInit(){
    this.getDataFromService()
  }
}


