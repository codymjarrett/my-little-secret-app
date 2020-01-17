/* SPECIAL FILE TO OVERRIDE NEXT.JS'S APP COMPONENT - allows to persist the layout between pages and other cool features*/
import React from 'react'
import App from 'next/app'
// import Firebase, { FirebaseContext } from '../components/Firebase'
/* includes tailwind here */
import '../styles/main.css'

import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
	return (
		// <FirebaseContext.Provider value={new Firebase()}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		// </FirebaseContext.Provider>
	)
}



export default MyApp
