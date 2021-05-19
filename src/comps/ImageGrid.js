import React from 'react'
import useFirestore from '../hooks/useFirestore'
import { motion } from 'framer-motion'

const ImageGrid = ({ setSelectedImg, setSelectedImgId }) => {
	const { docs } = useFirestore('images')
	return (
		<div className="img-grid">
			{docs && docs.map( doc => (
				<motion.div
				className="img-wrap" key={doc.id}
				onClick={ () => ( setSelectedImg(doc.url), setSelectedImgId(doc.id) ) }
				whileHover={{ opacity: 1 }} /* animate the opacity */
				layout /* animate the new position */
				>
					<motion.img 
						src={doc.url} alt="uploade pic"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1 }}
					/>
				</motion.div>
			))}
		</div>
	)
}

export default ImageGrid
