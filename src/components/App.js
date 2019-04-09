import React from 'react';
import InputField from './InputField';
import PostList from './PostList';
import post_src from '../api/sheety';

class App extends React.Component {
    state = {
        posts: [{post: "Post Test Text", date: "2019-01-01", title: "Test Title", image: null}],
        selected_post: null
    }

    getPostData = async (data_type) => {
        var type_obj = {posts: '88ef879d-6258-46f3-8e65-1fac03afec7c'};
        var url = type_obj[data_type] == null ? type_obj.posts : type_obj[data_type];
        const response = await post_src.get(`/${url}`);
        this.setState({posts: response})
    }

    render(){
        return(
            <div className="ui container">
                <PostList post_list={this.state.posts}></PostList>
            </div>
        )
    }
}

export default App;