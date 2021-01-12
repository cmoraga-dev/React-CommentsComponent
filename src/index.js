import React from "react";
import ReactDOM from "react-dom";
import SimpleComment from './SimpleComment';
import 'semantic-ui-css/semantic.min.css';
import img1 from "./images/vegeta.jpg";
import img2 from "./images/black.jpg";
import img3 from "./images/goku.jpg";
import UserCard from "./UserCard";

const App = () => {


    return (
        <div className = 'ui comments'>
            <UserCard>
                <SimpleComment 
                    author = 'user1'
                    date = 'Yesterday'
                    text = 'good job!'
                    profileImg = {img1}
                    />
            </UserCard>
                <UserCard>
                <SimpleComment 
                author = 'user2'
                date = 'November 22 2020'
                text = 'greetings'
                profileImg = {img2}
                />
            </UserCard>
                <UserCard>
                <SimpleComment 
                author = 'user3'
                date = 'Today at 5:00 PM'
                text = '!!'     
                profileImg = {img3}
                />
            </UserCard>
            
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)