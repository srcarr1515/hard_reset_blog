import React from 'react'
import PostList from './PostList';
import post_src from '../api/sheety';

class Blog extends React.Component {
    state = {
        posts: [],
        selected_post: null
    }

    getSheetyData = async (data_type) => {
        var type_obj = {posts: '88ef879d-6258-46f3-8e65-1fac03afec7c'};
        var url = type_obj[data_type] == null ? type_obj.posts : type_obj[data_type];
        var response = await post_src.get(`/${url}`);
        this.setState({posts: response.data});
    }

    componentDidMount(){
        this.getSheetyData('post');
    }

    render(){
        return(
            <div className="ui container">
            <div className="ui relaxed divided items">
            <PostList post_list={this.state.posts}></PostList>
            </div>
                
            </div>
        )
    }
}

export default Blog;