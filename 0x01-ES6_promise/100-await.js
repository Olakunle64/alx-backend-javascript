import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  const promise1 = uploadPhoto();
  const promise2 = createUser();
  try {
    const [photo, user] = await Promise.all([promise1, promise2]);
    return {
      photo,
      user,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}

export default asyncUploadUser;
