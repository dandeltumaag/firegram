import React from 'react'
import { motion } from 'framer-motion'
import useFirestore from '../hooks/useFirestore'
import { projectStorage, projectFirestore, timestamp } from '../firebase/config'

const Modal = ({ selectedImg, setSelectedImg, selectedImgId }) => {
	const collectionRef = projectFirestore.collection('images')

	const handleClick = (e) => {
		if(e.target.classList.contains('backdrop'))
		setSelectedImg(null)
	}

	const handleDelete = async (e) => {
		var fileUrl = selectedImg
		var fileRef = projectStorage.refFromURL(fileUrl)

		/* delete from storage */
		await fileRef.delete().then( () => {
			/* delete data from database */
			collectionRef.doc(selectedImgId).delete()
		}) .catch( (error) => {
			console.log(error)
		})

		setSelectedImg(null)
	}

	return (
		<motion.div 
			className="backdrop" 
			onClick={handleClick}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
		>
				<motion.img 
					src={selectedImg} slt="enlarged pic" 
					initial={{ y: "-100vh" }}
					animate={{ y: 0 }}
				/>
				<div id={selectedImgId} onClick={handleDelete} className="delete_cta"></div>
		</motion.div>
	)
}

export default Modal
