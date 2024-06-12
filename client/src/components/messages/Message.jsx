const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src="https://gravatar.com/avatar/e92473c7c1840866e8366705690b4c3e?s=400&d=robohash&r=x" alt="Tailwind Chat Bubble component" />
        </div>
      </div>
      <div className="chat-bubble text-white bg-blue-500">Hi! What is up?</div>
      <div className="chat-footer opacity-100 text-xs flex gap-1 items-center">12:42</div>
    </div>
  )
}

export default Message