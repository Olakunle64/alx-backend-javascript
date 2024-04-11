import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promise1 = signUpUser(firstName, lastName);
  const promise2 = uploadPhoto(fileName);
  return Promise.allSettled([promise1, promise2]).then((values) => {
    const result = [];
    values.forEach((value) => {
      if (value.status === 'fulfilled') {
        result.push(value.value);
      } else {
        result.push(value.reason);
      }
    });
    return result;
  });
}
