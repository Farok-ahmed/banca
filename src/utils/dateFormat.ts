const date = new Date();
// here use js Intl Time format
const formatedDate =  new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
}).format(date);
export {formatedDate}