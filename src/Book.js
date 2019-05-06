import React, { Component } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import ReactFileReader from "react-file-reader";
import Axios from "axios";
import "./deneme.css";

export default class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookname: "",
      author: "",
      page: "",
      coverphoto: "",
      summary: ""
    };
  }
  onChange = event => {

    this.setState({ [event.target.id]: event.target.value });
    event.preventDefault();
  };
  selectImage = event => {
    this.setState({
      coverphoto: event.base64
    });
  };
  savebook = event => {
    Axios.post("http://localhost:8080/api/books", this.state).then(
      response => {
        console.log(response.status);
      }
    );
    event.preventDefault();
  };
  render() {
    return (
      <div>

        <div className="NewBook">
          Kitap Adı
          <InputText
            id={"bookname"}
            value={this.state.bookname}
            onChange={this.onChange}
            className="input"
          />{" "}
          <br /> Yazar
          <InputText
            id={"author"}
            value={this.state.author}
            onChange={this.onChange}
            className="input"
          />
          <br />
          Sayfa Sayisi
          <InputText
            keyfilter="int"
            id={"page"}
            value={this.state.page}
            onChange={this.onChange}
            className="input"
          />{" "}
          <br />
          Özet
          <br />
          <InputTextarea
            rows={5}
            cols={20}
            id="summary"
            value={this.state.summary}
            onChange={this.onChange}
            autoResize={true}
          />
          <br />
          Resim
          <ReactFileReader
            fileTypes={[".png", ".jpeg", ".jpg"]}
            base64={true}
            multipleFiles={true}
            handleFiles={this.selectImage}
          >
            <Button label="Kapak Fotoğraf" />
          </ReactFileReader>
          <Button label="Kitap Ekle" onClick={this.savebook} />
        </div>
      </div>
    );
  }
}
