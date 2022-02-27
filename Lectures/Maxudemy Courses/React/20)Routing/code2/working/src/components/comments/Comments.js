import { useState, useEffect, useCallback } from 'react';
import {useParams} from 'react-router-dom';
import useHttp from '../../hooks/use-http';
import {getAllComments} from '../../lib/api';
import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import LoadingSpinner from '../UI/LoadingSpinner';
import CommentsList from './CommentsList'

const Comments = () => {

  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();

  const {sendRequest, status, data:loadedCommnets} = useHttp(getAllComments,true);

  useEffect(() => {
    sendRequest(params.quoteId);
  }, [sendRequest, params.quoteId]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };
  const addedCommentHandler = useCallback(() => {
    //setIsAddingComment(false);
    sendRequest(params.quoteId);
  },[sendRequest, params.quoteId]);
  
  let comments;

  if(status === 'pending') {
    comments = (
      <div className="centered">
        <LoadingSpinner></LoadingSpinner>
      </div>
    );
  };

  if(status === 'completed' && (loadedCommnets && loadedCommnets.length > 0)) {
    comments = (
      <CommentsList comments = {loadedCommnets}></CommentsList>
    );
  }

  if(status === 'completed' && (!loadedCommnets || loadedCommnets.length ===0)) {
    comments = (
      <p className = 'centered'>NO Comments were loaded yet</p>
    );
  }
  
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm onAddedComment ={addedCommentHandler} quoteId={params.quoteId} />}
      {comments}
    </section>
  );
};

export default Comments;
