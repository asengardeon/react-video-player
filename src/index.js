import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

//Youtube API Key AIzaSyDMm5O3WEGQ1MSZv5qwiivCOw0xe8JREO8
const API_KEY = 'AIzaSyDMm5O3WEGQ1MSZv5qwiivCOw0xe8JREO8';


// Create a nre component and this component should produces HTML
 class App extends Component{
     constructor(props) {
         super(props);
         this.state = { videos: []};

         YTSearch({key: API_KEY, term: 'surfboards'}, videos => {
                     this.setState({videos})
                     //this is equal to this.setState({videos: videos})
                  });

    }


     render() {
        return(<div>
                  <SearchBar />
                  <VideoDetail video={this.state.videos[0]}/>
                  <VideoList videos={this.state.videos}/>
               </div>
              )}
 }


ReactDom.render(<App/>, document.querySelector('.container'));


//take this component's generated html  amd put it on the page(DOM Tree)
