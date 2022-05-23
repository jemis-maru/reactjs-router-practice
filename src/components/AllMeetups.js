import { useEffect, useState } from "react";
import MeetupList from "./MeetupList";

function AllMeetups() {

  const [loadedMeetups, setLoadedMeetups] = useState([]);

  const [isLoading, changeLoading] = useState(true);

  useEffect(() => {
    fetch(`https://react-http-2d801-default-rtdb.firebaseio.com/meetupData.json`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      const meetups = [];

      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        };

        meetups.push(meetup);
      }
      setLoadedMeetups(meetups);
      changeLoading(false);
    })
    .catch(err => {
      console.log(err);
    })
  });

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetups;