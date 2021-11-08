import { useNavigate } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const navigate = useNavigate();

  async function addMeetupHandler(meetupData) {
    await fetch("http://localhost:5000/data", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(meetupData),
    });
    navigate("/");
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
