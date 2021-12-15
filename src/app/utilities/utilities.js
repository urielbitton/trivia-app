export const convertQuotesToSymbol = (string) => {
  if(string.includes('&quot;')) {
    return string.replace(/&quot;/g, '"');
  }
  else if(string.includes('&quot;') && string.includes('&#039;')) {
    const substring = string.replace(/&#039;/g, `'`);
    return substring.replace(/&quot;/g, '"');
  }
  else if(string.includes('&#039;')) {
    return string.replace(/&#039;/g, `'`);
  }
  else 
    return string
}