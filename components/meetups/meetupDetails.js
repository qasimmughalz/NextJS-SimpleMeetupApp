import Card from "../ui/Card";
import classes from './Meetupitem.module.css'

function MeetupDetails(props){
    return <Card className={classes.content}>
        <img src={props.image} className={classes.image} alt="This is image place" />
        <h3>{props.title}</h3>
        <p>{props.address}</p>

    </Card>
}


export default MeetupDetails