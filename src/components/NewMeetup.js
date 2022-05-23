import NewMeetupForm from './NewMeetupForm.js';

function NewMeetup() {

  function sendMeetupData(meetupData) {
    fetch(`https://react-http-2d801-default-rtdb.firebaseio.com/meetupData.json`, {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm setMeetupDataToParent={sendMeetupData} />
    </section>
  );
}

export default NewMeetup;