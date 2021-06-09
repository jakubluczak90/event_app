import React from 'react';
import EventForm from "../../components/organisms/EventForm/EventForm";
import YourEvents from "../../components/organisms/YourEvents/YourEvents";

export default function HomePage() {
	return (
		<div>
			<EventForm />
			<YourEvents />
		</div>
	)
}