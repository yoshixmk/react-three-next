import { h, Component } from '@stencil/core';
import { CapacitorVideoPlayer } from 'capacitor-video-player';
import { YoutubePlayerWeb } from 'capacitor-youtube-player';
import { Plugins, Capacitor } from '@capacitor/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  constructor() {
    this.showYouTubePlayer()
  }

  handleClick(event: UIEvent) {
    console.log('event ',event)
    this.testPlugin();
  }

  async testPlugin() {
    const videoPlayer:any = CapacitorVideoPlayer;
    const url:string = "https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4";
    const res:any  = await videoPlayer.play({url:url});
    console.log('result of echo ', res)
  }

  async showYouTubePlayer() {
    console.log('player init')
    if (Capacitor.platform === 'web') {
      const options = {playerId: 'youtube-player', playerSize: {width: 640, height: 360}, videoId: 'wfCcs0vLysk'};
      await YoutubePlayerWeb.initialize(options);
    } else { // Native
      const { YoutubePlayer } = Plugins;
      const options = {width: 640, height: 360, videoId: 'wfCcs0vLysk'};
      await YoutubePlayer.initialize(options);
    }
    console.log('player init done')
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <p>
          Welcome to the PWA Toolkit. You can use this starter to build entire
          apps with web components using Stencil and ionic/core! Check out the
          README for everything that comes in this starter out of the box and
          check out our docs on <a href="https://stenciljs.com">stenciljs.com</a> to get started.
        </p>

        <ion-button onClick={ (event: UIEvent) => this.handleClick(event)}>Test Video Player Plugin</ion-button>

        <ion-item>
          <div id="youtube-player"></div>
        </ion-item>
      </ion-content>
    ];
  }
}
