class ChatroomChannel < ApplicationCable::Channel
  def subscribed
    stream_from "chatroom_ channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
