import React from "react";

class Home extends React.Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    fetch("http://localhost:5000/equipment")
      .then((result) => result.json())
      .then((data) =>
        this.setState({
          posts: data,
        })
      );
  }

  postsToRender = () => {
    return this.state.posts.map((post) => {
      return (
        <div>
          <h1>
            {post.name} {post.type} {post.medium} {post.category} {post.amount}
          </h1>
          {/* <p>{post.power}</p>
             <img src={post.url}></img> */}
        </div>
      );
    });
  };
  render() {
    return <div>{this.postsToRender()}</div>;
  }
}

export default Home;
