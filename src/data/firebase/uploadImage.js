// src/data/firebase/uploadImage.js
import { storage } from "./firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export async function uploadImage(file, folder = "banners") {
  if (!file) throw new Error("No hay archivo");
  const safeName = (file.name || "file.jpg").replace(/\s+/g, "_");
  const path = `${folder}/${Date.now()}_${safeName}`;
  const storageRef = ref(storage, path);

  // Subida binaria (el SDK se encarga del endpoint y CORS)
  await uploadBytes(storageRef, file, { contentType: file.type || "image/jpeg" });
  const url = await getDownloadURL(storageRef);
  return { url, path };
}
