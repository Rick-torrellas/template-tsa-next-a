const config = {}
config.icon = process.env.NEXT_PUBLIC_ICON ? process.env.NEXT_PUBLIC_ICON : "https://res.cloudinary.com/rick-rick-torrellas/image/upload/v1629835622/icons/worker_uedsn2.svg";
config.host = process.env.NEXT_PUBLIC_HOST ? process.env.NEXT_PUBLIC_HOST : "http://localhost:3000";
config.apiUrl = process.env.NEXT_PUBLIC_API ? process.env.NEXT_PUBLIC_API : "http://localhost:1337";
config.debug = process.env.NEXT_PUBLIC_DEBUG ? process.env.NEXT_PUBLIC_DEBUG : false;
export default config;