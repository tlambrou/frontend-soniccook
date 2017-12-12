
import React, { Component } from 'react'
import ReactPlayer from 'react-player'


export class AudioPlayer extends Component {
  constructor(props){
    super(props)
    this.state = {
      url: null,
      playing: false,
      volume: 0.8,
      muted: false,
      played: 0,
      duration: 0,
      playbackRate: 1.0,
      loop: false
    }
  }


  playPause = () => {
    this.setState({ playing: !this.state.playing })
  }
  stop = () => {
    this.setState({ url: null, playing: false })
  }
  toggleLoop = () => {
    this.setState({ loop: !this.state.loop })
  }
  setVolume = e => {
    this.setState({ volume: parseFloat(e.target.value) })
  }
  toggleMuted = () => {
    this.setState({ muted: !this.state.muted })
  }
  setPlaybackRate = e => {
    this.setState({ playbackRate: parseFloat(e.target.value) })
  }
  onPlay = () => {
    this.setState({ playing: true })
  }
  onPause = () => {
    this.setState({ playing: false })
  }
  onSeekMouseDown = e => {
    this.setState({ seeking: true })
  }
  onSeekChange = e => {
    this.setState({ played: parseFloat(e.target.value) })
  }
  onSeekMouseUp = e => {
    this.setState({ seeking: false })
    this.player.seekTo(parseFloat(e.target.value))
  }
  onProgress = state => {
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state)
    }
  }
  onConfigSubmit = () => {
    let config
    try {
      config = JSON.parse(this.configInput.value)
    } catch (error) {
      config = {}
      console.error('Error setting config:', error)
    }
    this.setState(config)
  }

  ref = player => {
    this.player = player
  }

  togglePlayPause() {
    if (this.state.playing) {
      return <i className="nc-icon nc-button-pause"></i>
    } else {
      return <i className="nc-icon nc-button-play"></i>
    }
  }

  renderPreview() {
    const {
      playing, volume, muted, loop,
      played,
      playbackRate,
      soundcloudConfig,
      vimeoConfig,
      youtubeConfig,
      fileConfig
    } = this.state
    if (ReactPlayer.canPlay(this.props.sampleURL)){
      return (
        <div>
          <ReactPlayer
            url={this.props.sampleURL}
            controls={false}
            height={0}
            ref={this.ref}
            playing={playing}
            loop={loop}
            playbackRate={playbackRate}
            volume={volume}
            muted={muted}
            soundcloudConfig={soundcloudConfig}
            vimeoConfig={vimeoConfig}
            youtubeConfig={youtubeConfig}
            fileConfig={fileConfig}
            onReady={() => console.log('onReady')}
            onStart={() => console.log('onStart')}
            onPlay={this.onPlay}
            onPause={this.onPause}
            onBuffer={() => console.log('onBuffer')}
            onSeek={e => console.log('onSeek', e)}
            onEnded={() => this.setState({ playing: loop })}
            onError={e => console.log('onError', e)}
            onProgress={this.onProgress}
            onDuration={duration => this.setState({ duration })}
            />
          <div className="col-12 d-flex justify-content-start">
            <button onClick={this.playPause} className="btn btn-sml btn-primary btn-just-icon mr-3" >
              {this.togglePlayPause()}
            </button>

            <div className="col-4">
              <div className="row">
                <progress max={1} value={played} />
              </div>
              <div className="row">
                <input id="sliderRegular" className="slider noUi-target noUi-ltr noUi-horizontal noUi-connect"
                  type='range' min={0} max={1} step='any'
                  value={played}
                  onMouseDown={this.onSeekMouseDown}
                  onChange={this.onSeekChange}
                  onMouseUp={this.onSeekMouseUp}
                  />

              </div>
            </div>
          </div>
          <button className="btn btn-sml btn-link"><i className="nc-icon nc-note-03"></i></button>
          <input type='range' min={0} max={1} step='any' value={volume} onChange={this.setVolume} />
          <div className="form-check">
            <label className="form-check-label">
              <input className="form-check-input" type='checkbox' checked={muted} onChange={this.toggleMuted} /> Muted
                <span className="form-check-sign">

                </span>
              </label>
            </div>


          </div>


        )
      } else {
        return (
          <h5 className="text-danger"><small>We're sorry the preview could not be loaded</small></h5>
        )
      }
    }

    render() {
      return (
        <div>
          {this.renderPreview()}
        </div>
      )
    }
  }

  export default AudioPlayer
