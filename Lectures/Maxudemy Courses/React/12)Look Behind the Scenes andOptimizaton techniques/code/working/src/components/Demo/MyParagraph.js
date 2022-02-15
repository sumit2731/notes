const MyParagraph = (props) => {
    console.log("MY Paragraph running");
    return (
        <p>{props.children}</p>
    );
}

export default MyParagraph;