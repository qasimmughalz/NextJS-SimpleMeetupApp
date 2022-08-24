import MeetupList from "../components/meetups/MeetupList"

const Dummy_Data = [{
    id:'m1',
    title:'The first meetup', 
    image:'https://makkah.accorhotels.com/wp-content/uploads/sites/55/2018/08/hajj-rituals-makkah-accorhotels-1024x683.jpg',
    address:'This is 1 address bro'
    },
    {id:'m2',
    title:'The seond meetup', 
    image:'https://makkah.accorhotels.com/wp-content/uploads/sites/55/2018/08/hajj-rituals-makkah-accorhotels-1024x683.jpg',
    address:'This is 2 address bro'
    },
    {id:'m1',
    title:'The third meetup', 
    image:'https://makkah.accorhotels.com/wp-content/uploads/sites/55/2018/08/hajj-rituals-makkah-accorhotels-1024x683.jpg',
    address:'This is 3 address bro'
    },
]

function HomePage(props){
    return <MeetupList meetups={props.meetData}/>
}

export async function getStaticProps(){
    return{
        props:{
            meetData: Dummy_Data
        }
    }
}

export default  HomePage