import { useEffect, useState } from 'react'
import fetch from 'unfetch'
import useSWR, { mutate, trigger } from 'swr'
import axios from 'axios'

import ReactModal from './ReactModal/ReactModal'

const fetcher = async () => {
	const data = await fetch('http://localhost:4000/api/secret')
	const json = await data.json()
	return {
		posts: json.data,
	}
}

const Posts = ({ isOpen, toggleModal }) => {
	const { data, error } = useSWR('/api/secret', fetcher)
	// const [postData, setPostsData] = useState(null)
	const [newPost, setNewPost] = useState('')

	const handleInputChange = e => {
		setNewPost(e.target.value)
    }
    
    
	

	const postNewSecret = () => {
		axios.post('http://localhost:4000/api/secret', {
			secret: newPost,
        }).then(() => trigger('/api/secret'))
        toggleModal()
        
	}

	let renderedData

	if (error) renderedData = <div>Failed to load</div>
	if (!data) renderedData = <div>Loading...</div>
	else
		renderedData = (
			<div>
				<ul>
					{data.posts.map(({ secret, _id }) => {
						return (
							<li
								className="shadow-lg bg-white mb-10 w-11/12 m-auto p-10"
								key={_id}
							>
								<div className="">
									<p>{secret}</p>
									<div>
										<button>Comment</button>
									</div>
								</div>
							</li>
						)
					})}
				</ul>
			</div>
		)

	return (
		<div>
			{renderedData}
			<ReactModal
				handleInputChange={handleInputChange}
				postNewSecret={postNewSecret}
				isOpen={isOpen}
				toggleModal={toggleModal}
			/>
		</div>
	)
}

export default Posts
