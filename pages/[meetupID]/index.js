
import { useRouter } from 'next/router'
import MeetupDetails from '../../components/meetups/meetupDetails'

function MeetUpDetailPage(props){
    const router = useRouter()
    return  <MeetupDetails image='https://makkah.accorhotels.com/wp-content/uploads/sites/55/2018/08/hajj-rituals-makkah-accorhotels-1024x683.jpg' title='title' address='address' />
}

export default MeetUpDetailPage