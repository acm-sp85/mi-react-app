import React from 'react'

class Home extends React.Component {
    state = { 
        posts: []
     }

     componentDidMount() {
         fetch('http://localhost:5000/posts')
         .then(result => result.json())
         .then(data=> this.setState({
                 posts: data
             }))
     }

     postsToRender = () => {
         return this.state.posts.map(post => {
             return <p>{post.title}</p>
         })
     }
    render() { 
        return ( 
        <div>
           {this.postsToRender()} 
            </div> 
        );
    }
}
 
export default Home;