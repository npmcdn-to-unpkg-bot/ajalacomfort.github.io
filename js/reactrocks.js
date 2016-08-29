




		var Blog = React.createClass({
			
			
			getInitialState:function(){
				
				return {posts:blogPosts}
			},
			
			render:function(){
				
									return (
					
										<div>
							
												
														{this.state.posts.map(function(post){
															
															var images = post.images.map(function(image){
																
																	return(
																	<div className="post_image_group"> 
																	<h4>{image.title}</h4>
																	<img src={"images/" + image.link} className="post_image"/>
																	<p>{image.text}</p>
																	</div>)
															})
															
															var embed_videos = post.videos.map(function(video){
																	return (
																		<div className="embeddedVideos">
																				<h4>{video.title}</h4>
																					 <iframe width="100%" height="500" src={video.link} frameborder="0" allowfullscreen></iframe> 
																				<p>{video.text}</p>
																		</div>)
															})
																
																	return (
																
																		<div className="post">
																			
																			<p className="title">{post.title}</p>
																			<p className="post_author">By: {post.author}</p>
																			<p className="post_date">Written on : {post.date}</p>
																			{images}
														
																			<p className="post_content">{post.content}</p>
																			
																			{embed_videos}		
																
																		</div>
																	
																	)
															
														}.bind(this))}
					
										</div>
								)
				
			}
			
			
			
			
		})
	
	
 ReactDOM.render(<Blog/>,document.getElementById("blog"))