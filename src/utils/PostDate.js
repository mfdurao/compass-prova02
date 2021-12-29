export const PostDate = (time) => {
  const timestamp = time;
  const date = new Date(timestamp);

  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  month = (month < 10 ? "0" : "") + month;
  day = (day < 10 ? "0" : "") + day;
  hour = (hour < 10 ? "0" : "") + hour;
  min = (min < 10 ? "0" : "") + min;
  sec = (sec < 10 ? "0" : "") + sec;

  const fullDate =
    day +
    "/" +
    month +
    "/" +
    date.getFullYear() +
    " at " +
    hour +
    ":" +
    min +
    ":" +
    sec;
    
  return fullDate;
};
