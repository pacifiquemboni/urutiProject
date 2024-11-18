import axios from "axios";

export const maxDate = new Date();
export const minDate = new Date("2024-02-05");

export async function uploadImage(file: any) {
  // `${name}.${file?.type?.split?.("/")?.[1]}`

  const image = new FormData();
  image.append("file", file);
  image.append("upload_preset", "m0gzvc3m");

  const res = await axios.post(`https://api.cloudinary.com/v1_1/dibojibkz/image/upload`, image);

  return res?.data;
}
