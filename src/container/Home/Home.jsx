import React, {Component} from "react";
/*import HeaderComponent from "../../component/HeaderComponent/HeaderComponent";
import Product from "../Product/Product";*/
/*import LifeCycleComponent from "../LifeCycleComponent/LifeCycleComponent";*/
import BlogPost from "../BlogPost/BlogPost";

class Home extends Component{
    state = {
        showComponent: true
    }

    componentDidMount() {
        /*setTimeout(() =>{
            this.setState({
                showComponent: false
            })
        }, 5000)*/
    }

    render() {
        return(
            <>
                {/*<p>Header Component</p>
                <hr />
                <HeaderComponent
                    time={"7.13"}
                    title={"Feedback 1"}
                    desc={"This is a great place"}
                />
                <HeaderComponent
                    time={"5.12"}
                    title={"Feedback 2"}
                    desc={"This is a great time"}
                />
                <HeaderComponent
                    time={"6.12"}
                    title={"Feedback 3"}
                    desc={"This is a great fun"}
                />
                <HeaderComponent/>*/}
                {/*<p>Subscribe</p>
                <hr />
                <Product />*/}
                {/*<p>Life Cycle Component</p>
                <hr />
                {
                    this.state.showComponent
                        ?
                        <LifeCycleComponent />
                        : null
                }*/}
                <p>Blog Post</p>
                <hr />
                <BlogPost />
            </>
        )
    }
}

export default Home;