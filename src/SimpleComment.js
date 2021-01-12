import React from "react";

const SimpleComment = (props) => {
    return (
        <div className ='comment'>
            <a href="/" className='avatar'>
                <img src={props.profileImg} alt='profile picture' />
            </a>
            <div className='content'>
                <a href='/' className='author'>{props.author}</a>
                <div className='metadata'>
                    <span className='date'> {props.date}</span>
                </div>
                <div className='text'>
                {props.text}
                </div>
            </div>
        </div>
    )
}
export default SimpleComment;