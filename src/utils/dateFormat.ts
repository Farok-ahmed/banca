const date = new Date();
const formatedDate =  date.toISOString().slice(0, 16).replace('T', ' ');
export {formatedDate}