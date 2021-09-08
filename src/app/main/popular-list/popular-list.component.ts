import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Song } from './song.model';

@Component({
  selector: 'app-popular-list',
  templateUrl: './popular-list.component.html',
  styleUrls: ['./popular-list.component.css']
})
export class PopularListComponent implements OnInit {

  data:any;
  songsData: Song[] =[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getSongs();
  }

  private getSongs () {
    this.http
      .get('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks')
      .subscribe(response => {
        this.data=response;
        this.fillSongs();
      })
  }

  private fillSongs () {   
    this.data.tracks.track.forEach(element => {
      let song:Song = new Song(element.name, element.artist.name, element.image[1]['#text'],element.artist.url);
      this.songsData.push(song)
    });
    console.log(this.data);
  }
}
