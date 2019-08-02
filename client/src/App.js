import React, {Component} from 'react';
import './App.css';

class Images extends Component {
	constructor(props) {
			super(props);
			this.state = {
					images: [],
			};
	}      
  render(){
      return (
      <div className="App">
        <form encType="multipart/form-data" onSubmit={this.uploadFiles.bind(this)}>
            <input type="file" name="image" />
            <input type="submit" value="Enviar" />
        </form>
      </div>
    );
	}

	async uploadFiles() {
		const promises = [];
		this.state.images.forEach(image => {
			promises.push(this.sendRequest(image));
		});
		try {
			await Promise.all(promises);
		} catch (e) {
				console.log(e);
		}
	}

	sendRequest(image) {
		return new Promise((resolve, reject) => {
			const req = new XMLHttpRequest();
	
			const formData = new FormData();
			formData.append("image", image, image.name);
	
			req.open("POST", "http://localhost:3001");
			req.send(formData);
		});
	}
}

export default Images;