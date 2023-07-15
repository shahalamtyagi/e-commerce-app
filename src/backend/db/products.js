import { v4 as uuid } from "uuid";
/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    src:"https://images.unsplash.com/photo-1565084888279-aca607ecce0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWVuJTIwamVhbnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    _id: uuid(),
    title: "You Can WIN",
    author: "Shiv Khera",
    price: "5000",
    categoryName: "non-fiction",
  },
  {
    src:"https://media.istockphoto.com/id/1014074006/photo/denim-lets-get-back-to-basics.webp?b=1&s=170667a&w=0&k=20&c=H9GW92JA1PYL6ZMp242SFnconlEUawm5KJ-bP7Lnexg=",
    _id: uuid(),
    title: "You are Winner",
    author: "Junaid Qureshi",
    price: "3000",
    categoryName: "horror",
  },
  {
    src:"https://media.istockphoto.com/id/1352728757/photo/jean-jacket-isolated-on-white-front-and-back-views-ready-for-clipping-path.webp?b=1&s=170667a&w=0&k=20&c=6JxjG-1I_wVvQIzoKKq5q8uC6TFPsILvZRDlpH4UPRI=",
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    price: "1000",
    categoryName: "fiction",
  },
  {
    src:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/x/i/q/s-wx-d-pocket-102-grey-woxen-original-imagmb2ejntmmc2f.jpeg?q=70",
    _id: uuid(),
    title: "Collar casual shirt",
    author: "Shiv Khera",
    price: "429",
    categoryName: "Woxen",
  },
  {
    src:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/m/o/t/l-st1-vebnor-original-imagmsyxhvkrfjgz.jpeg?q=70",
    _id: uuid(),
    title: "Mandarin Collar shirt",
    author: "Webnor",
    price: "369",
    categoryName: "Woxen",
  },
  {
    src:"https://ha-clothing.netlify.app/static/media/i3.e1ab4c51.webp",
    _id: uuid(),
    title: "INDIE PICKS",
    author: "Anahat Handblock Kurta",
    price: "369",
  },


  {
    src:"https://rukminim2.flixcart.com/image/612/612/l4oi4cw0/shirt/l/q/j/xl-4000-combraided-original-imagfgzgjt88qhjn.jpeg?q=70",
    _id: uuid(),
    title: "Fir striped casual shirt",
    author: "COMBRAIDED",
    price: "800",
    categoryName: "Woxen",
  },
  {
    src:"https://rukminim2.flixcart.com/image/612/612/xif0q/jean/o/s/7/28-pbwc-001-qarsh-original-imagh8cfhc3dreq8.jpeg?q=70",
    _id: uuid(),
    title: "Rise balck jeans",
    author: "QARSH",
    price: "410",
    categoryName: "Woxen",
  },
  {
    src:"https://ha-clothing.netlify.app/static/media/i4.e3f4cbd9.webp",
    _id: uuid(),
    title: "INDIE PICKS",
    author: "Anahat Handblock Kurta",
    price: "369",
  },
];

