import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName);

  return Promise.allSettled([signUpPromise, uploadPhotoPromise]).then((results) => {
    const arr = [];
    for (const result of results) {
      if (result.status === 'rejected') {
        arr.push({ status: result.status, value: result.reason.message });
      }
      arr.push({ status: result.status, value: result.value });
    }
    return arr;
  });
}
