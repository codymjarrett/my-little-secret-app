/* SPECIAL FILE TO OVERRIDE NEXT.JS'S APP COMPONENT - allows to persist the layout between pages and other cool features*/
import React, { useState, useEffect } from 'react'
import App from 'next/app'

import firebase, { FirebaseContext } from '../components/Firebase/'

/* includes tailwind here */
import '../styles/main.css'

import Layout from '../components/Layout'
// import withAuthentication from '../components/containers/withAuthentication'

function MyApp({ Component, pageProps }) {
	const [firebaseInitialized, setFirebaseInitialed] = useState({})

	const isInitialized = () => {
		return new Promise(resolve => {
			firebase.auth().onAuthStateChanged(resolve)
		})
	}

	useEffect(() => {
		isInitialized().then(val => setFirebaseInitialed(val))
	})

	return (
		<FirebaseContext.Provider value={firebaseInitialized}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</FirebaseContext.Provider>
	)
}

export default MyApp
