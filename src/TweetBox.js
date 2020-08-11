import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setImageTweet] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Julio Chávarri",
      username: "juliochavarridiaz",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "https://twitter.com/soypablovelez",
    });
    setTweetMessage("");
    setImageTweet("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s88-c-k-c0xffffffff-no-rj-mo" />
          <input
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
            type="text"
            name="tweet"
            placeholder="What's happening"
          />
        </div>
        <input
          vaue={tweetMessage}
          onChange={(e) => setImageTweet(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Enter image Url"
          type="text"
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
