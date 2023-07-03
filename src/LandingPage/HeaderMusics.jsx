import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase.js";
import React, { useState, useEffect } from "react";

export default function HeaderMusics() {
  const [listMusic, setListMusic] = useState([]);

  useEffect(() => {
    async function fetchMusic() {
      try {
        const musicListRef = collection(db, "musics");
        const querySnapshot = await getDocs(musicListRef);

        const listMusic = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));

        //   console.log(querySnapshot.docs);
        setListMusic(listMusic);
        console.log("Fetched collection:", listMusic);
      } catch (error) {
        console.error("Error fetching collection:", error);
      }
    }
    fetchMusic();
  }, []);
  return (
    // <div>
    //   {listMusic.length > 0 &&
    //     listMusic[0].data.structuredData.map((music) => (
    //       <div key={music.musicUrl}>
    //         {/* <audio controls>
    //           <source
    //             src={music.audioUrl}
    //             type="audio/ogg"
    //           />
    //         </audio> */}
    //         <p>{music.audioUrl}</p>
    //       </div>
    //     ))}
    // </div>
    <div>Hello World</div>
  );
}
