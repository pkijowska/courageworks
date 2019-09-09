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


const works = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Baloon girl",
    artist: { _id: "5b21ca3eeb7f6fbccd471818", name: "Banksy" },
    numberInStock: 60,
    price: 250,
    img: baloon_girl,
    publishDate: "2018-01-03T19:04:28.809Z",
    liked: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Migration birds",
    artist: { _id: "5b21ca3eeb7f6fbccd471818", name: "Banksy" },
    numberInStock: 50,
    price: 280,
    img: migration_birds,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "Exists is not the only way",
    artist: { _id: "5b21ca3eeb7f6fbccd471820", name: "Igor Dobrowolski" },
    numberInStock: 8,
    price: 400,
    img: senses_igor,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "Don't forget to say Hi",
    artist: { _id: "5b21ca3eeb7f6fbccd471814", name: "Hush" },
    numberInStock: 7,
    price: 600,
    img: hush1
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    title: "Geisha",
    artist: { _id: "5b21ca3eeb7f6fbccd471814", name: "Hush" },
    numberInStock: 70,
    price: 350,
    img: hush2
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    title: "Pretty to watch",
    artist: { _id: "5b21ca3eeb7f6fbccd471814", name: "Hush" },
    numberInStock: 17,
    price: 3.5,
    img: hush3
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    title: "Awaken your senses",
    artist: { _id: "5b21ca3eeb7f6fbccd471820", name: "Igor Dobrowolski" },
    numberInStock: 20,
    price: 450,
    img: only_love_igor
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    title: "The Sixth Sense",
    artist: { _id: "5b21ca3eeb7f6fbccd471820", name: "Igor Dobrowolski" },
    numberInStock: 4,
    price: 300,
    img: exists_igor
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    title: "Flower banksy",
    artist: { _id: "5b21ca3eeb7f6fbccd471818", name: "Banksy" },
    numberInStock: 70,
    price: 90,
    img: flower_banksy
  }
];

export function getWorks() {
  return works;
}

export function getWork(id) {
  return works.find(m => m._id === id);
}
