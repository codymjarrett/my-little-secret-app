/* SPECIAL FILE TO OVERRIDE NEXT.JS'S APP COMPONENT - allows to persist the layout between pages and other cool features*/
import React, { useState, useEffect } from 'react'
import App from 'next/app'

import firebase, { FirebaseAuthContext } from '../components/Firebase/'

/* includes tailwind here */
import '../styles/main.css'

import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
	const [firebaseAuthInitialized, setFirebaseAuthInitialed] = useState({})

	const isInitialized = () => {
		return new Promise(resolve => {
			firebase.auth().onAuthStateChanged(resolve)
		})
	}

	useEffect(() => {
		isInitialized().then(res => setFirebaseAuthInitialed(res))
	})

	return (
		<FirebaseAuthContext.Provider value={firebaseAuthInitialized}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</FirebaseAuthContext.Provider>
	)
}

export default MyApp
