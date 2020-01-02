


const SecretButton = ({ toggleModal }) => (
	<div className="w-11/12 m-auto shadow-lg bg-white h-24 flex mb-10">
		<button onClick={toggleModal} className="cursor-pointer block m-auto h-12 center-text w-11/12 bg-gray-200 hover:bg-gray-300 focus:outline-none rounded-full">
			What's your secret?
		</button>
	</div>
)


export default SecretButton
