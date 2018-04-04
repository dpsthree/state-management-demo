import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { pluck, switchMap } from 'rxjs/operators';

import { Video } from './router-state';
import { ActivatedRoute } from '@angular/router';

const VIDEO_URL = 'https://api.angularbootcamp.com/videos';

@Injectable()
export class RouterStateService {

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) { }

  getVideos(): Observable<Video[]> {
    return this.httpClient.get<Video[]>(VIDEO_URL);
  }

  selectedVideo(): Observable<Video> {
    return this.route.queryParams
      .pipe(
        pluck('id'),
        switchMap(id => this.httpClient.get<Video>(VIDEO_URL + '/' + id))
      );
  }
}
