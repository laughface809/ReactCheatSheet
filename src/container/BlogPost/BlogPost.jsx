import React, {Component, Fragment} from "react";
import './BlogPost.css';
import Post from "../../component/Post/Post";
import axios from "axios";

class BlogPost extends Component{
    state = {
        post:[]
    }

    getPostAPI = () => {
        axios.get('http://localhost:8080/posts')
            .then((result) => {
                this.setState({
                    post: result.data
                })
            })
    }

    handleRemove = (data) => {
        console.log(data);
        axios.delete(`http://localhost:8080/posts/${data}`).then((result)=>{
            alert('success delete');
            this.getPostAPI();
        })
    }

    componentDidMount() {
        /*fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    post: json
                })
            })*/
        this.getPostAPI();
    }

    render() {
        return(
            <Fragment>
            <p className={"section-title"}>Blog Post</p>
                {
                    this.state.post.map(post=>{
                        return <Post key={post.id} data={post} title={post.title} desc={post.body} remove={this.handleRemove}/>
                    })
                }
            </Fragment>
        )
    }
};

export default BlogPost;