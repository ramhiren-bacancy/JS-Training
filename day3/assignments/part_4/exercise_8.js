const settings = { theme: "light", notifications: true };


const newSettings = {...settings, theme:"dark"}

console.log(newSettings);
console.log(settings);

//Task:
const {notifications, ...settings2} = settings

console.log(settings2);
console.log(notifications)