import React from 'react';

class Comments extends React.Component {
	handleSubmit(e) {
		e.preventDefault();
		const { postId } = this.props.params;
		const author = this.refs.author.value;
		const comment = this.refs.comment.value;
		this.props.addComment(postId, author, comment);
		this.refs.commentsForm.reset();
	}

	renderComment(comment, i) {
		return (
			<div className="comment" key={i}>
				<p>
				<strong>{comment.user}</strong>: {comment.text}
				<button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.params.postId, i
					)}>&times;</button>
				</p>
			</div>
		)
	}

	render() {
		return (
			<div className="comments">
				{this.props.postComments.map(this.renderComment.bind(this))}
				<form onSubmit={this.handleSubmit.bind(this)} ref="commentsForm" className="comment-form">
					<input type="text" ref="author" placeholder="author" />
					<input type="text" ref="comment" placeholder="comment" />
					<input type="submit" hidden/>
				</form>
			</div>
		)
	}
}

export default Comments;
