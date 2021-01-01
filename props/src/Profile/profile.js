export default function Profile(props) {


    const { fullName, bio, profession } = props
    return (
        <div>
            {props.fullName},
            {props.bio},
            {props.profession}
        </div>
    );
}


