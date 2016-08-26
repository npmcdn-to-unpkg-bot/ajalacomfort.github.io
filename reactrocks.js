




		var Blog = React.createClass({
			
			
			getInitialState:function(){
				
				return {posts:blogPosts}
			},
			
			render:function(){
				
									return (
					
										<div>
							
												
														{this.state.posts.map(function(post){
																
																	return (
																
																		<div className="post">
																			
																			<p className="title">{post.title}</p>
																			<p className="post_author">By: {post.author}</p>
																			<p className="post_date">Written on : {post.date}</p>
																			<p className="post_content">{post.content}</p>
																
																		</div>
																	
																	)
															
														}.bind(this))}
					
										</div>
								)
				
			}
			
			
			
			
		})
	
	
 ReactDOM.render(<Blog/>,document.getElementById("blog"))