import { NativeAudio } from 'ionic-native';

export class PlaybackController {
  public isComplete: boolean = true;

  private _playbackID: Array<any> = [];
  private _path: string;

  constructor() {
    this._path = window.localStorage.getItem('path_sounds');
  }


}
