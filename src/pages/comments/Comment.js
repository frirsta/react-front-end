import React from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Profile from "../../components/Profile";
import styles from '../../styles/Comments.module.css'

const Comment = (props) => {
    const {accounts_id, profile_image, owner, updated_date, content} = props;

    return (
        <div className={styles.CommentContainer}>
            <Media>
                <Link to={`/accounts/${accounts_id}`}>
                    <Profile src={profile_image} />
                </Link>
            
            <Media.Body>
                <div>
                <span>{owner}</span> 
                
                <span>{updated_date}</span>
                
                <span>{content}</span>
                </div>
            </Media.Body>
            </Media>
        </div>
    )
}

export default Comment;