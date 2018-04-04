import { Component } from '@angular/core';
import { RouterStateService } from '../router-state.service';
import { Video } from '../router-state';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'smd-master-list',
  templateUrl: './master-list.component.html',
  styleUrls: ['./master-list.component.css']
})
export class MasterListComponent {

  videoList: Observable<Video[]>;

  constructor(routerStateService: RouterStateService) {
    this.videoList = routerStateService.getVideos();
  }


}
