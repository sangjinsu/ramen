import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";

const Youtube = ({ searchTitle }: { searchTitle: string }) => {
  const id = "ttttt";
  const [videoUrl, setVideoUrl] = useState("");

  const [iframeDOM, setIframeDOM] = useState({});
  const [videoHeight, setVideoHeight] = useState(320);

  const params = {
    key: "AIzaSyB97dKZAEN7qKgwQmOHitTOnsmcpCvtcTI",
    part: "snippet",
    q: searchTitle,
    maxResults: 5,
    type: "video",
    videoDuration: "any",
    videoEmbeddable: "true",
  };

  const handleChangeVideoWidth = useCallback(() => {
    return setVideoHeight(
      // 사이즈가 변할 때마다 높이도 같이 바뀜
      Math.floor(
        (window.document.getElementById(id) as HTMLInputElement).offsetWidth *
          0.5625
      )
    );
  }, [id]);

  useEffect(() => {
    console.log(typeof window.document.getElementById(id));
    setIframeDOM(window.document.getElementById(id) as object);
  }, [id, iframeDOM]);

  useEffect(() => {
    window.addEventListener("resize", handleChangeVideoWidth);
    setVideoHeight(
      // 로딩 후 높이 부분이 비율에 맞춰짐
      Math.floor(
        (window.document.getElementById(id) as HTMLInputElement).offsetWidth *
          0.5625
      )
    );
    return function cleanup() {
      window.removeEventListener("resize", handleChangeVideoWidth);
    };
  }, [id, iframeDOM, videoHeight, handleChangeVideoWidth]);

  useEffect(() => {
    const Test = async () => {
      try {
        const url = `https://www.googleapis.com/youtube/v3/search`;
        const { data: youtubeResponse } = await axios.get(url, { params });
        const resultDataLength = youtubeResponse.items.length;
        const randomNum = Math.floor(Math.random() * resultDataLength);
        setVideoUrl(
          `https://www.youtube.com/embed/${youtubeResponse.items[randomNum].id.videoId}`
        );
      } catch {
        const copyParams = Object.assign({}, params);
        copyParams.q = "라면 먹방";
        const url = `https://www.googleapis.com/youtube/v3/search`;
        const { data: youtubeResponse } = await axios.get(url, { params });
        const resultDataLength = youtubeResponse.items.length;
        const randomNum = Math.floor(Math.random() * resultDataLength);
        setVideoUrl(
          `https://www.youtube.com/embed/${youtubeResponse.items[randomNum].id.videoId}`
        );
      }
    };
    Test();
  }, []);
  return (
    <div>
      <div className="youtube_video">
        <iframe
          id={id}
          width="100%"
          height={`${videoHeight}px`}
          src={videoUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <style jsx>
        {`
          .youtube_video {
            width: 100%;
            margin-top: 0.5rem;
          }
        `}
      </style>
    </div>
  );
};

export default Youtube;
