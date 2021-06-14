import React from 'react';

const Post = () => {
	return (
		<div className="post">
			<div className="post-head">
				<span className="post-by h5">Binaya Baral</span>
				<span className="post-created-at">50m</span>
			</div>
			<div className="post-body">
				<p className="post-txt">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nisi quisquam nihil nostrum veritatis dicta labore delectus, saepe earum doloribus, doloremque, minus corrupti. Nobis soluta nesciunt officia aperiam, exercitationem nam.</p>
				<div className="post-img">
					<img src="https://via.placeholder.com/150" alt="Placeholder" />
				</div>
			</div>
			<div className="post-footer">
				<ul className="post-comments">
					<li>
						<span className="comment-by h6">Binaya Baral</span>
						<span className="comment">I like it</span>
					</li>
					<li>
						<span className="comment-by h6">Binaya Baral</span>
						<span className="comment">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi id magni fugiat ex aliquam,</span>
					</li>
					<li>
						<span className="comment-by h6">Binaya Baral</span>
						<span className="comment">I like it</span>
					</li>
				</ul>
				<form action="#">
					<textarea name="post-comment"></textarea>
					<button type="submit">Add Comment</button>
				</form>
			</div>
		</div>
	);
};

export default Post;
