export default function getCurrentAge(birthDate: Date) {
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  const d = today.getDate() < birthDate.getDate();

  return m < 0 || (m === 0 && d) ? age - 1 : age;
}
