import NewMeetupForm from "../../components/meetups/NewMeetupForm"

function newMeetup(){

    function meetUpData(data){
        console.log("Data from Child", data)
    }

    return <NewMeetupForm onAddMeetup={meetUpData}></NewMeetupForm>
}


export default newMeetup

