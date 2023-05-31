import React from "react";
import "./GetRequest.scss";

class GetRequest extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      post: {
        id: "",
        title: "",
        body: "",
      },
      showContainer: false,
      editedTitle: "",
      message: "",
    };
  }

  getPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("NOT FOUND");
        }
        return response.json();
      })
      .then((json) =>
        this.setState({
          data: json,
        })
      )
      .catch((error) => alert(error));
  };

  getID = (event) => {
    if (!event.target.value) return;
    let value = +event.target.value;
    let filteredID = this.state.data.filter((item) => item.id === value);
    this.displayData(filteredID);
  };

  displayData = (post) => {
    let { id, title, body } = post[0];
    this.setState((prev) => ({
      showContainer: prev,
      id: id,
      title: title,
      body: body,
    }));
  };

  saveTitle = () => {
    let editedTitle = document.querySelector(".post__title--content").innerHTML;

    fetch(`https://jsonplaceholder.typicode.com/posts/${this.state.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        title: editedTitle,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => json);

    this.setState({
      editedTitle: editedTitle,
    });
  };

  setNotification = (message) => {
    this.setState({
      message: message,
    });
  };

  deletePost = () => {
    let id = this.state.id;
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong!");
        }
      })
      .catch((error) => {
        alert(error);
      });

    this.setState({
      id: "",
      title: "",
      body: "",
      editedTitle: "",
    });
    this.setNotification("The element was deleted!");
  };

  componentDidMount() {
    this.getPosts();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.editedTitle !== this.state.editedTitle) {
      this.setNotification("Operation is successful!");
    }
  }

  render() {
    return (
      <div className="post">
        <input
          className="post__input"
          type="text"
          placeholder="type ID"
          onChange={this.getID}
        />
        {this.state.showContainer ? (
          <div className="post__container">
            <span className="post__id">ID: {this.state.id}</span>
            <span className="post__title">Title: {this.state.editedTitle}</span>
            <p className="post__title--content" contentEditable="true">
              {this.state.title}
            </p>
            <span className="post__body">Body:</span>
            <p className="post__body--content"> {this.state.body}</p>
            <div className="post__edit">
              <button className="post__btn delete" onClick={this.deletePost}>
                Delete
              </button>
              <button className="post__btn save" onClick={this.saveTitle}>
                Save
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="post__message">{this.state.message}</div>
      </div>
    );
  }
}

export default GetRequest;
