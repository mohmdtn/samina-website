export const formatNumberWithCommas = (number: number | string | undefined) => {
  return number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
