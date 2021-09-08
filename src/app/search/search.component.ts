import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Song } from '../main/popular-list/song.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  filled: boolean = false;
  nameControl:FormControl;
  songName: string;
  data:any;
  songsArray: Song[] = [];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.nameControl = new FormControl();
    this.nameControl.valueChanges.subscribe((value)=>{
      this.songName = value;
    })
  }

  onSearch(){
    this.songsArray = [];
    this.http.get("http://ws.audioscrobbler.com/2.0/?method=track.search&track=" + this.songName)
      .subscribe(response =>{
        this.data = response;
        this.fillSongs();
        this.filled = true;
      })
    
  }

  private fillSongs () {
    this.data.results.trackmatches.track.forEach(element => {
      let song:Song = new Song(element.name, element.artist, element.image[1]['#text'],element.artist.url);
      this.songsArray.push(song)
    });
  }

}
