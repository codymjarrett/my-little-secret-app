import Button from './Button'

import Link from 'next/link'

const Nav = () => (
	<nav className="flex justify-between m-4">
		<div>
			<Link href="/">
				<h1 className="cursor-pointer text-xl">!Keep Schtum</h1>
			</Link>
		</div>
		<div>
			<img className="w-16 h-16" src="/svg/logo.svg" alt="logo" />
		</div>
		<div>
			<Button 
            content='login' 
            href='/signIn' 
            buttonStyles='greenButton' />

		</div>
	</nav>
)

export default Nav
