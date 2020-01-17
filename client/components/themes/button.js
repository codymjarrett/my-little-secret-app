export const theme = () => {
    
        const baseStyles = 'block cursor-pointer rounded-full text-white py-2 px-6'
        const greenButton = 'bg-site-primary-green hover=bg-site-secondary-green '
        const yellowButton = 'bg-site-yellow'
        const longYellowButton = `${yellowButton} w-48`

        return {
            baseStyles,
            greenButton,
            yellowButton,
            longYellowButton
        }

    
}