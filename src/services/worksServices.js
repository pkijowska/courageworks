import * as artistsAPI from "./artistsServices";

const works = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Baloon girl",
    artist: { _id: "5b21ca3eeb7f6fbccd471818", name: "Banksy" },
    numberInStock: 60,
    price: 250,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfOMORuss2oe5niuDbPs2OEWMhLvAOQ7cZTj_5Z9lOcVt140f1",
    publishDate: "2018-01-03T19:04:28.809Z"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Migration birds",
    artist: { _id: "5b21ca3eeb7f6fbccd471818", name: "Banksy" },
    numberInStock: 50,
    price: 280,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfOMORuss2oe5niuDbPs2OEWMhLvAOQ7cZTj_5Z9lOcVt140f1",

  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "Exists is not the only way",
    artist: { _id: "5b21ca3eeb7f6fbccd471820", name: "Igor Dobrowolski" },
    numberInStock: 8,
    price: 400,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfOMORuss2oe5niuDbPs2OEWMhLvAOQ7cZTj_5Z9lOcVt140f1",

  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "Don't forget to say Hi",
    artist: { _id: "5b21ca3eeb7f6fbccd471814", name: "Hush" },
    numberInStock: 7,
    price: 600,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfOMORuss2oe5niuDbPs2OEWMhLvAOQ7cZTj_5Z9lOcVt140f1",

  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    title: "Geisha",
    artist: { _id: "5b21ca3eeb7f6fbccd471814", name: "Hush" },
    numberInStock: 70,
    price: 350,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfOMORuss2oe5niuDbPs2OEWMhLvAOQ7cZTj_5Z9lOcVt140f1",

  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    title: "Pretty to watch",
    artist: { _id: "5b21ca3eeb7f6fbccd471814", name: "Hush" },
    numberInStock: 17,
    price: 3.5,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfOMORuss2oe5niuDbPs2OEWMhLvAOQ7cZTj_5Z9lOcVt140f1",

  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    title: "Awaken your senses",
    artist: { _id: "5b21ca3eeb7f6fbccd471820", name: "Igor Dobrowolski" },
    numberInStock: 20,
    price: 450,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfOMORuss2oe5niuDbPs2OEWMhLvAOQ7cZTj_5Z9lOcVt140f1",

  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    title: "The Sixth Sense",
    artist: { _id: "5b21ca3eeb7f6fbccd471820", name: "Igor Dobrowolski" },
    numberInStock: 4,
    price: 300,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfOMORuss2oe5niuDbPs2OEWMhLvAOQ7cZTj_5Z9lOcVt140f1",

  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    title: "Flower banksy",
    artist: { _id: "5b21ca3eeb7f6fbccd471818", name: "Banksy" },
    numberInStock: 70,
    price: 90,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfOMORuss2oe5niuDbPs2OEWMhLvAOQ7cZTj_5Z9lOcVt140f1",

  }
];

export function getWorks() {
  return works;
}

export function getWork(id) {
  return works.find(m => m._id === id);
}

export function saveWork(work) {
  let workInDb = works.find(m => m._id === work._id) || {};
  workInDb.name = work.name;
  workInDb.artist = artistsAPI.artists.find(g => g._id === work.artistId);
  workInDb.numberInStock = work.numberInStock;
  workInDb.price = work.price;

  if (!workInDb._id) {
    workInDb._id = Date.now();
    works.push(workInDb);
  }

  return workInDb;
}

export function deleteWork(id) {
  let workInDb = works.find(m => m._id === id);
  works.splice(works.indexOf(workInDb), 1);
  return workInDb;
}
