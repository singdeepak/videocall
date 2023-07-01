import React from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";

export default function Room() {
  const { roomId } = useParams();
  const myMeeting = async (element) => {
    const appID = 1752037624;
    const serverSecret = "af02717ecbc304a2860164748a9a6be3";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      roomId
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Meeting link",
          url: `http://localhost:3000/room/${roomId}`
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      },
      showRoomTimer : true
    });
  };

  return (
    <>
      <div ref={myMeeting}></div>
    </>
  );
}
