import Link from 'next/link'
import { theme } from '../components/themes/button'

const Button = ({ content, href = '', svg, buttonStyles, handleOnClick }) => {
	const styleMapping = buttonStyles => {
		const themeObj = theme()
		return `${themeObj['baseStyles']} ${themeObj[buttonStyles]}`
	}

	

	return (
		<Link href={href}>
			<button onClick={handleOnClick} className={styleMapping(buttonStyles)}>
				<div className="flex justify-center">
					{svg && <img src={svg} alt={content} className="w-8 h-8"/>}
					<span className={svg && 'ml-4'}>{content}</span>
				</div>
			</button>
		</Link>
	)
}

export default Button
