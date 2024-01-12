import { storage } from "@/database";

import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
  uploadBytes
} from "firebase/storage";

const FILES_PATH = "files";

export const certFileRef= ref(storage, `certificates`);
export const uploadFiles=async(files)=> {
  const promises = files.map((file) => {
    const storageRef = ref(storage, `certificates/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject) => {
      uploadTask.on('state_changed', null, reject, () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          resolve(downloadURL);
        });
      });
    });
  });

  try {
    const downloadURLs = await Promise.all(promises);
  } catch (error) {
    console.error('Error updating user information:', error);
  }
}


const fileRef = (currentUserId, messageId, fileName) => {
  return ref(
    storage,
    `${FILES_PATH}/${currentUserId}/${messageId}/${fileName}`
  );
};

export const deleteFile = (currentUserId, messageId, file) => {
  return deleteObject(
    fileRef(
      currentUserId,
      messageId,
      `${file.name}.${file.extension || file.type}`
    )
  );
};

export const getFileDownloadUrl = (ref) => {
  return getDownloadURL(ref);
};

export const uploadFileTask = (currentUserId, messageId, file, type) => {
  const uploadFileRef = fileRef(
    currentUserId,
    messageId,
    `${file.name}.${type}`
  );

  return uploadBytesResumable(uploadFileRef, file.blob, {
    contentType: type,
  });
};

export const listenUploadImageProgress = (
  currentUserId,
  messageId,
  file,
  type,
  callback,
  error,
  success
) => {
  const uploadTask = uploadFileTask(currentUserId, messageId, file, type);

  uploadTask.on(
    "state_changed",
    (snap) => {
      const progress = Math.round(
        (snap.bytesTransferred / snap.totalBytes) * 100
      );
      callback(progress);
    },
    (_error) => {
      error(_error);
    },
    async () => {
      const url = await getFileDownloadUrl(uploadTask.snapshot.ref);
      success(url);
    }
  );
};

//ADVOCATE DOCUMENTS
const documentRef = (currentUserId,file) => {
  return ref(
    storage,
    `${FILES_PATH}/${currentUserId}/${file.name}.${file.type}`
  );
};
export const uploadDocumentTask = (currentUserId,file) => {
  const uploadFileRef = documentRef(
    currentUserId,file
  );

  return uploadBytesResumable(uploadFileRef, file);
};

export const listenDocumentUploadProgress = (
  currentUserId,
  file,
  type,
  callback,
  error,
  success
) => {
  const uploadTask = uploadDocumentTask(currentUserId,file);

  uploadTask.on(
    "state_changed",
    (snap) => {
      const progress = Math.round(
        (snap.bytesTransferred / snap.totalBytes) * 100
      );
      callback(progress);
    },
    (_error) => {
      error(_error);
    },
    async () => {
      const url = await getFileDownloadUrl(uploadTask.snapshot.ref);
      success(url);
    }
  );
};


export const uploadFileAndGetDownloadURL=async (userId,file)=> {
  const storageRef = documentRef(
    userId,file
  );;
  await uploadBytes(storageRef, file);
  const downloadURL = await getDownloadURL(storageRef);
  return downloadURL;
}


