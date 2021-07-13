/**
 * A container which provides a gradient background to the content within it.
 *
 * @component
 * @example
 * return (
 *   <GradientContainer>Child content</GradientContainer>
 * )
 */
 const GradientContainer = ({ children }) => {
    const style = {
        minHeight: '24rem',
        background: 'linear-gradient(rgb(230, 100, 101), rgb(145, 152, 229))', 
        padding: '1rem 1rem', 
        lineHeight: '1.3',
        fontSize: '1.25rem',
        fontWeight: '600',
        color: 'white',
    };

    return (
        <div style={style}>
            {children}
        </div>
    );
}

export default GradientContainer