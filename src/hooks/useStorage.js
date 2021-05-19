/* 
https://blog.pcrisk.com/windows/12819-err-name-not-resolved
ERR_NAME_NOT_RESOLVED
8.8.8.8
8.8.4.4
*/

import { useState, useEffect } from 'react'
import { projectStorage, projectFirestore, timestamp } from '../firebase/config'

const useStorage = (file) => {
	const [progress, setProgress] = useState(0)
	const [error, setError] = useState(null)
	const [url, setUrl] = useState(null)
	
	// useEffect( function, dependencies)
	useEffect( () => {
		// references
		const storageRef = projectStorage.ref(file.name);
		const collectionRef = projectFirestore.collection('images')
		
    storageRef.put(file).on('state_changed', (snap) => {
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
      setProgress(percentage);
		}, (err) => { /* if error is found */
			setError(err)
		}, async() => { /* if upload complete */
			const url = await storageRef.getDownloadURL();
			const createdAt = timestamp();
			await collectionRef.add({ url, createdAt }) /* ({url: url, createAt: createdAg}) */
			setUrl(url);
		})

	}, [file] )

	return { progress, url, error }

}

export default useStorage;

