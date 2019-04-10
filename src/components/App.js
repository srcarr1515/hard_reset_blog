import React from 'react';
import Header from './Header'
import Main from './Main'

class App extends React.Component {

    render(){
        return(
            <div className="ui container">
            <Header></Header>
            <Main></Main>
            </div>
        )
    }
}

export default App;