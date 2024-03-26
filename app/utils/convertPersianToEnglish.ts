export function convertPersianToEnglish(persianNumber: string) {
  const persianToEnglishMap: { [key: string]: string } = {
    "۰": "0",
    "۱": "1",
    "۲": "2",
    "۳": "3",
    "۴": "4",
    "۵": "5",
    "۶": "6",
    "۷": "7",
    "۸": "8",
    "۹": "9",
  };

  let englishNumber: string = "";
  for (let char of persianNumber) {
    if (char in persianToEnglishMap) {
      englishNumber += persianToEnglishMap[char];
    } else {
      englishNumber += char;
    }
  }
  return englishNumber;
}
