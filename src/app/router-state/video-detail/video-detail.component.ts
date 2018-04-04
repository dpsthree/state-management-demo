import { Component } from '@angular/core';
import { RouterStateService } from '../router-state.service';
import { Observable } from 'rxjs/Observable';
import { Video } from '../router-state';

@Component({
  selector: 'smd-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent {

  video: Observable<Video>;

  constructor(routerStateService: RouterStateService) {
    this.video = routerStateService.selectedVideo();
  }

}
