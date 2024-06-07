export const ColorfulMeessage = (props) => {
    const { color, children } = props;
    console.log("--ColorfulMessage--")
    const contentStyle = {
        color,
        fontSize: "18px"
    }

    return(
        <p style={contentStyle}>{children}</p>
    )
}