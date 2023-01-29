export const Button = ({ size, color, text, ...props }) => {
    return (
        <button style={{
            padding: size === 'large' ? '32px' : '8px',
            fontSize: size === 'large' ? '32px' : '16px',
            backgroundColor: color
        }} {...props}>{text}</button>
    )
}
// Composition allows use to create differnet versions of this button by creating components that use
// Like DangerButton and SuccessButton at the same time

export const DangerButton = props => {
    return (
        <Button {...props} color="red" />
    )
}

export const BigSuccessButton = props => {
    return (
        <Button {...props} color="green" size="large" />
    )
}

// usage: <DangerButton /> or <BigSuccessButton />