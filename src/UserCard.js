import React from "react";

const UserCard = (props) => {
    var innerProps = props.children.props;
//    console.log(props);

    return (
        <div className = 'ui card'>
            <div className = 'content'>
                <div className = 'header' ></div>
                <div className = 'description '>
                    {props.children}
                </div>
            </div>
            <div className = 'ui bottom button'>
                <i className = 'add icon'></i>
                Add friend
            </div>
        </div>
    )
}

export default UserCard;