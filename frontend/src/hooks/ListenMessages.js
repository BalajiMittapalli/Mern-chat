import { useEffect } from "react";

import { useSocketContext } from "../context/Socketcontext";
import useConversation from "../zustand/useConversation";
import notificationSound from "../assets/tones/notification.mp3"
const ListenMessages = () => {
    const { socket } = useSocketContext();
	const { messages, setMessages } = useConversation();

	useEffect(() => {
		socket?.on("newMessage", (newMessage) => {
			newMessage.shouldShake = true;
			const sound = new Audio(notificationSound);
			sound.play();
			setMessages([...messages, newMessage]);
		});

		return () => socket?.off("newMessage");
	}, [socket, setMessages, messages]);
}

export default ListenMessages