import ReactModal from 'react-modal'

import './ReactModal.css'

const Modal = ({ isOpen, toggleModal, handleInputChange,postNewSecret }) => {
	// const postSecret = () => {
	// 	toggleModal()
	// }



	return (
		<ReactModal
			isOpen={
				isOpen
				/* Boolean describing if the modal should be shown or not. */
			}
			style={
				{
					overlay: {
						position: 'fixed',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						backgroundColor: 'rgba(236, 236, 236, .75)',
					},
					content: {
						position: 'absolute',
						backgroundColor: 'rgba(255, 255, 255, 1)',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						padding: '0 2rem',
						width: '90%',
						outline: 0,
						borderRadius: '5px',
						boxShadow:
							'0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
					},
				}
				/* Object indicating styles to be used for the modal.
     It has two keys, `overlay` and `content`.
     See the `Styles` section for more details. */
			}
			contentLabel={
				'Post Secret here'
				/* String indicating how the content container should be announced
     to screenreaders */
			}
			portalClassName={
				'ReactModalPortal'
				/* String className to be applied to the portal.
     See the `Styles` section for more details. */
			}
			overlayClassName={
				'ReactModal__Overlay'
				/* String className to be applied to the overlay.
     See the `Styles` section for more details. */
			}
			id={
				'modal-content'
				/* String id to be applied to the content div. */
			}
			className={
				'ReactModal__Content'
				/* String className to be applied to the modal content.
     See the `Styles` section for more details. */
			}
			bodyOpenClassName={
				'ReactModal__Body--open'
				/* String className to be applied to the document.body 
     (must be a constant string).
     This attribute when set as `null` doesn't add any class 
     to document.body.
     See the `Styles` section for more details. */
			}
			htmlOpenClassName={
				'ReactModal__Html--open'
				/* String className to be applied to the document.html
     (must be a constant string).
     This attribute is `null` by default.
     See the `Styles` section for more details. */
			}
			ariaHideApp={
				true
				/* Boolean indicating if the appElement should be hidden */
			}
			shouldFocusAfterRender={
				true
				/* Boolean indicating if the modal should be focused after render. */
			}
			shouldCloseOnOverlayClick={
				true
				/* Boolean indicating if the overlay should close the modal */
			}
			shouldCloseOnEsc={
				true
				/* Boolean indicating if pressing the esc key should close the modal
     Note: By disabling the esc key from closing the modal
     you may introduce an accessibility issue. */
			}
			shouldReturnFocusAfterClose={
				true
				/* Boolean indicating if the modal should restore focus to the element
     that had focus prior to its display. */
			}
			role={
				'dialog'
				/* String indicating the role of the modal, allowing the 'dialog' role
     to be applied if desired.
     This attribute is `dialog` by default. */
			}
			parentSelector={
				() => document.body
				/* Function that will be called to get the parent element
     that the modal will be attached to. */
			}
			aria={
				{
					labelledby: 'heading',
					describedby: 'full_description',
				}
				/* Additional aria attributes (optional). */
			}
			data={
				{ background: 'green' }
				/* Additional data attributes (optional). */
			}
		>
			<div className="flex flex-col bg-white-300">
				<div
					className="close"
					role="button"
					aria-label="Close"
					onClick={toggleModal}
				>
					&times;
				</div>
				<input
					type="text"
					placeholder="Let it all out..."
					className="w-11/12 outline-none h-40"
					onChange={handleInputChange}
				/>
				<button
					className="block text-white bg-blue-600 rounded p-2 my-4"
					onClick={postNewSecret}
				>
					Post
				</button>
			</div>
		</ReactModal>
	)
}

export default Modal
