import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
	        this.state = {
      			paragraph: ''
    }
	};
		displayParagraph = () => {
		this.setState({paragraph: 'Hello, I\'ve learnt to use the full-stack evaluation tool. This makes me so happy'
  })
}

    render() {
    	return(
    		<div id="main">
          {this.state.paragraph ==='Hello, I\'ve learnt to use the full-stack evaluation tool. This makes me so happy' && <p id='para'>{this.state.paragraph}</p>}
				{ /* Do not remove this main div!! */ }
			<button id='click' onClick={this.displayParagraph}>CLICK</button>
    		</div>
    	);
    }
}



export default App;

