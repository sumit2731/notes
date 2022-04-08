const Parent = (props) => {
    if(props.id) {
        return (
            <h1>Id is Preset</h1>
        );
    }
    else return null;
}
export default Parent;