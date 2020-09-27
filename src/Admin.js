import React from 'react';
import auth from './auth.json';
import './Admin.css';

//const BASE_URL = "https://emotions-diamonds-api.firebaseapp.com/";
const BASE_URL = "http://localhost:5000/"
class Admin extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: "",
            file: "",
            error: ""
        }
        
    }

    onChangeHandler = (e) => {
        const {name, value} = e.target;

        if (name !== "file")
            this.setState({
                [name]: value
            })
        else{
            this.setState({
                file: e.target.files[0]
            })
        }
    }

    onSubmit = () =>{
        this.setState({error: ""})

        if (this.state.password === auth.password && this.state.username === auth.username){

            const data = new FormData();
            data.append('file', this.state.file);

            fetch(BASE_URL + 'upload', {
                method: 'POST',
                mode: "no-cors",
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json',
                    "Access-Control-Allow-Origin": "*"
                },
                body: data,
            })
            .then(response => response.json())
            .then((response) => {
                console.log(response);
            });
        }else
            this.setState({error: "Username e/o password Errati"})
    }

    render() {
        return (
            <div>
                {this.state.error != "" && <div className="alert">{this.state.error}</div>}
                <label>Username : </label><input type="text" name="username" value={this.state.username} onChange={this.onChangeHandler} />

                <label>Password : </label><input type="password" name="password" value={this.state.password} onChange={this.onChangeHandler} />
                <label>File CSV : </label><input type="file" name="file" onChange={this.onChangeHandler} />
                <button type="button" onClick={this.onSubmit}>Invia</button>
            </div>
        )
    }
}


export default Admin;