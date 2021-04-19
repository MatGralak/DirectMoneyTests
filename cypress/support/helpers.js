export const transformData = (element) => {
  const rawNumber = element.val();
  return rawNumber.replace(/\D+/g, '');
}