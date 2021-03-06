import React, { useState, useEffect } from "react";
import Axios from "axios";
import Photo from "./photo";
import Video from "./photo";
import "./styles.css";
import "./App.css";

const ACCESS_TOKEN =
  "IGQVJYMFRRZAHh5VjFramtDcm1XUk5QMlFCSVNHQWwtNUthbm5XT1RhUmhlVElzbGwyellnbGw1dXloUW5FMXJtNnpJVm53d2g3SjFDNjNMNGNTSlhMUk9YZAFhKTGZATMWlUeDlZATk1n";

function useFetch(url) {
  const [error, setError] = useState("");
  const [payload, setPayload] = useState(null);
  const [loading, setLoading] = useState(true);

  const callUrl = async () => {
    try {
      const {
        data: { data }
      } = await Axios.get(url);
      setPayload(data);
    } catch {
      setError("Error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    callUrl();
  }, []);

  return { payload, loading, error };
}

export default function App() {
  const { payload, loading, error } = useFetch(
    `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,username,timestamp&access_token=${ACCESS_TOKEN}`
  );
  return (
    <div className="App">
      {loading && <span>Loading</span>}
      {!loading && error && <span>{error}</span>}
      <div className="articles">
        {!loading &&
          payload &&
          payload.map((photo) => {
            if (photo.media_type === "IMAGE") {
              return (
                <Photo
                  key={photo.id}
                  id={photo.id}
                  caption={photo.caption}
                  media_url={photo.media_url}
                  username={photo.username}
                  timestamp={photo.timestamp}
                />
              );
            }
            return null;
          })}
      </div>
    </div>
  );
}
