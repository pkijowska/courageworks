import * as artistsAPI from "./artistsServices";
import baloon_girl from "../static_assets/baloon_girl_banksy.jpg";
import migration_birds from "../static_assets/migration_birds.jpg";
import senses_igor from "../static_assets/senses_igor.jpg";
import only_love_igor from "../static_assets/only_love_igor.jpg";
import exists_igor from "../static_assets/exists_igor.jpg";
import hush1 from "../static_assets/hush_1.jpg";
import hush2 from "../static_assets/hush_2.jpg";
import hush3 from "../static_assets/hush_3.jpg";
import flower_banksy from "../static_assets/flower_banksy.jpg";
import sitting from "../static_assets/sitting.png";
import flowers from "../static_assets/flowers.png";
import church from "../static_assets/church.png";
import birds from "../static_assets/birds.png";

const works = [


  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "Exists is not the only way",
    artist: { _id: "5b21ca3eeb7f6fbccd471820", name: "Igor Dobrowolski" },
    numberInStock: 8,
    price: "$40 000",
    img: senses_igor,
    frame: "175 x 122 x 7 cm",
    category:"wip",
    link: "https://res.cloudinary.com/deppqxba7/image/upload/v1568252565/exists_igor.21cea2eb_fdlqh7.jpg"
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    title: "Awaken your senses",
    artist: { _id: "5b21ca3eeb7f6fbccd471820", name: "Igor Dobrowolski" },
    numberInStock: 20,
    price: "$450 000",
    img: only_love_igor,
    frame: "175 x 122 x 7 cm",
    category:"wip",
    link: "https://res.cloudinary.com/deppqxba7/image/upload/v1568252565/senses_igor_uaoetk.jpg"
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    title: "The Sixth Sense",
    artist: { _id: "5b21ca3eeb7f6fbccd471820", name: "Igor Dobrowolski" },
    numberInStock: 4,
    price: "$30000",
    img: exists_igor,
    frame: "175 x 122 x 7 cm",
    category:"wip",
    link: "https://res.cloudinary.com/deppqxba7/image/upload/v1568252565/only_love_igor.579b57a4_w9qnux.jpg"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "Don't forget to say Hi",
    artist: { _id: "5b21ca3eeb7f6fbccd471814", name: "Hush" },
    numberInStock: 7,
    price: "$60 000",
    img: hush1,
    frame: "175 x 122 x 7 cm",
    category:"wip",
    link: 'https://res.cloudinary.com/deppqxba7/image/upload/v1568252485/hush_3.5e7380d2_j97iyr.jpg'
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    title: "Geisha",
    artist: { _id: "5b21ca3eeb7f6fbccd471814", name: "Hush" },
    numberInStock: 70,
    price: "$350 000",
    img: hush2,
    frame: "175 x 122 x 7 cm",
    category:"wip",
    link: 'https://res.cloudinary.com/deppqxba7/image/upload/v1568252484/hush_2.585e47d5_o7ywzo.jpg',
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    title: "Pretty to watch",
    artist: { _id: "5b21ca3eeb7f6fbccd471814", name: "Hush" },
    numberInStock: 17,
    price: "$15 000",
    img: hush3,
    frame: "175 x 122 x 7 cm",
    category:"wip",
    link: "https://res.cloudinary.com/deppqxba7/image/upload/v1568252483/hush_1.469ed245_obu4zm.jpg"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Baloon girl",
    artist: { _id: "5b21ca3eeb7f6fbccd471818", name: "Banksy" },
    numberInStock: 60,
    price: "$25 000",
    img: baloon_girl,
    frame: "175 x 122 x 7 cm",
    publishDate: "2018-01-03T19:04:28.809Z",
    liked: true,
    category:"wip",
    link: "https://res.cloudinary.com/deppqxba7/image/upload/v1568252461/baloon_girl_banksy.4b29ac75_wpnjvu.jpg"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Migration birds",
    artist: { _id: "5b21ca3eeb7f6fbccd471818", name: "Banksy" },
    numberInStock: "$50 000",
    price: "$50 000",
    img: migration_birds,
    frame: "175 x 122 x 7 cm",
    category:"wip",
    link: "https://res.cloudinary.com/deppqxba7/image/upload/v1568252586/migration_birds_v4mkc3.jpg"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    title: "Flower banksy",
    artist: { _id: "5b21ca3eeb7f6fbccd471818", name: "Banksy" },
    numberInStock: 70,
    price: "$9000",
    img: flower_banksy,
    frame: "175 x 122 x 7 cm",
    category:"wip",
    link: "https://res.cloudinary.com/deppqxba7/image/upload/v1568253200/flower_banksy.59adcb6b_qo9cqe.jpg",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471822",
    title: "Sitting",
    artist: { _id: "5b21ca3eeb7f6fbccd471821", name: "Marc Novak" },
    numberInStock: 70,
    price: "$9000",
    img: sitting,
    frame: "175 x 122 x 7 cm",
    category:"wip",

  },
  {
    _id: "5b21ca3eeb7f6fbccd471823",
    title: "Flowers",
    artist: { _id: "5b21ca3eeb7f6fbccd471821", name: "Marc Novak" },
    numberInStock: 70,
    price: "$9000",
    img: flowers,
    frame: "175 x 122 x 7 cm",
    category:"wip",

  },
  {
    _id: "5b21ca3eeb7f6fbccd471824",
    title: "Take me to church",
    artist: { _id: "5b21ca3eeb7f6fbccd471821", name: "Marc Novak" },
    numberInStock: 70,
    price: "$9000",
    img: church,
    frame: "175 x 122 x 7 cm",
    category:"wip",

  },
  {
    _id: "5b21ca3eeb7f6fbccd471825",
    title: "I love my birds",
    artist: { _id: "5b21ca3eeb7f6fbccd471821", name: "Marc Novak" },
    numberInStock: 70,
    price: "$9000",
    img: birds,
    frame: "175 x 122 x 7 cm",
    category:"wip",
  },
];

export function getWorks() {
  return works;
}

export function getWork(id) {
  return works.find(m => m._id === id);
}
