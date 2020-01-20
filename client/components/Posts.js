import { useState } from 'react'
import fetch from 'unfetch'
import useSWR, { trigger } from 'swr'
import axios from 'axios'

// import ReactModal from './ReactModal/ReactModal'

const fetcher = async () => {
	const data = await fetch('http://localhost:4000/api/secret')
	const json = await data.json()
	return {
		posts: json.data,
	}
}

const Posts = ({ isOpen, toggleModal }) => {
	const { data, error } = useSWR('/api/secret', fetcher)

	let postings

	

	const sendNewPost = () => {
		axios
			.post('http://localhost:4000/api/secret', {
				secret: input,
			})
			.then(() => trigger('/api/secret'))
		toggleModal()
	}

	if (error) postings = <div>Failed to load</div>
	if (!data) postings = <div>Loading...</div>
	else
		postings = (
			<div className="mt-16">
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
			{postings}
			{/* <ReactModal
				handleInputChange={handleInputChange}
				sendNewPost={sendNewPost}
				isOpen={isOpen}
				toggleModal={toggleModal}
			/> */}
		</div>
	)
}

export default Posts
