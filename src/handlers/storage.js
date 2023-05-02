import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../lib/firebase.conf";

export const Storage = {
  uploadFile: (media) => {
    return new Promise(async (resolve) => {
      try {
        const mediaRef = ref(storage, `images/${media.title}`);
        uploadBytes(mediaRef, media.file).then((snapshot) => {
          resolve({ path: snapshot.metadata.fullPath, name: media.title });
        });
      } catch (e) {
        console.log(e);
      }
    });
  },
};
