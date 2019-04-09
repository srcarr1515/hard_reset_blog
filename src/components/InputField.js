import React from 'react';

class InputField extends React.Component {
    state = {
        input_action: 'Post',
    }

    render(){
        return(
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <textarea type="text"></textarea>
                    </div>
                    <button className="ui primary button">{this.state.input_action}</button>
                </form> 
            </div>
        )
    }
}

export default InputField;