function Avatar(props) {
    return  <div className='avatar-container'>
        <img className='plug-avatar' height={128} width={128} src={props.avatar_url}/>
        <div className={`indicator ${props.status_enum}`}></div>
        <div className={`glyphon-${props.status_enum}`}></div>
    </div>
}

export default Avatar;