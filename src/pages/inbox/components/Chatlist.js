import {NavLink, useParams} from "react-router-dom";
import classNames from "classnames";

export default function ChatList() {

	const {conversationId} = useParams()
	console.log(conversationId,'conv id bu');
	const chats = [
		{
			id: 1,
			user: {
				avatar: 'https://pbs.twimg.com/profile_images/1319279718655356928/dFh6Zz4B_400x400.jpg',
				name: 'Alper Çelik'
			},
			lastMessage: 'Bak buraya!'
		},
		{
			id: 2,
			user: {
				avatar: 'https://pbs.twimg.com/profile_images/1515880619087220741/p4eiAMX__400x400.jpg',
				name: 'Halkların Kardeşliği Erlik'
			},
			lastMessage: 'Doğu Perinçek abdülhamiti mi savunuyor?!'
		},
	]

	return (
		<div className="h-[calc(100%-60px)] overflow-auto py-3">
			<header className="flex items-center justify-between px-5 mb-1">
				<h6 className="text-base font-semibold">Messages</h6>
				<button className="text-brand text-sm font-semibold">16 requests</button>
			</header>
			{chats.map(chat => (
				<NavLink
					className={classNames({
						"h-[72px] flex items-center gap-x-4 hover:bg-zinc-50 px-5": true,
						"font-semibold": chat?.unread,
						"!bg-[#efefef]": +conversationId === chat.id
					})}
					key={chat.id}
					to={`/inbox/${chat.id}`}
				>
					<img src={chat.user.avatar} className="w-14 h-14 rounded-full" alt=""/>
					<div>
						<h6 className="text-sm">{chat.user.name}</h6>
						<p className={`text-sm ${!chat?.unread && 'text-[#8e8e8e]'}`}>
							{chat.lastMessage}
						</p>
					</div>
				</NavLink>
			))}
		</div>
	)
}