export const ColorfulMeessage = (props) => {
    const contentStyle = {
        color: props.color,
        fontSize: "18px",
        margin: 100
    }

    return(
        <p style={contentStyle}>{props.children}</p>
    )
}