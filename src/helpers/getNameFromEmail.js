export default function getNameFromEmail(email) {
  const result = email.split('@')[0];
  return result;
}
