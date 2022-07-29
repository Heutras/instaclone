import Header from "./components/Header";
import Reply from "./components/Reply";
import Messages from "pages/inbox/chat/components/Messages";
import {useState} from "react";

export default function Chat() {

	const user = {
		name: 'Heutras',
		avatar: 'https://pbs.twimg.com/profile_images/1526647892726915073/tN9rYw3V_400x400.jpg'
	}

	const [messages, setMessages] = useState([
		{
			from: {
				id: 'TifvBLZryqfddfK1lmfvqR3d7j12',
				name: 'AA',
				username: 'AAusername',
				avatar: 'https://pbs.twimg.com/profile_images/1526647892726915073/tN9rYw3V_400x400.jpg'
			},
			message: 'grup'
		},
		{
			from: {
				id: 'vWsw9KtcRYaNsdhQP1SQ8VdezWv1',
				name: 'A',
				username: 'Ausername',
				avatar: 'https://pbs.twimg.com/profile_images/1064886121870561280/1Z8pZjhG_400x400.jpg'
			},
			message: 'test'
		},
	])

	return (
		<div className="flex-1">
			<Header user={user} />
			<Messages messages={messages} />
			<Reply setMessages={setMessages} />
		</div>
	)
}