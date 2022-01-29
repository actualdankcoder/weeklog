import Avatar from "./avatar";

function Status(props) {
    return (
        <div align="center">
            <Avatar status_enum={props.presence.status_enum} avatar_url={props.data.avatar_url}/>
            <h1 align="center">{props.data.username}</h1>
        </div>
    )
}
export default Status;