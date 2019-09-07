export const artists = [
  { _id: "5b21ca3eeb7f6fbccd471819", name: "All Artists", },
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Banksy" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Hush" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Igor Dobrowolski" }
];

export function getArtists() {
  return artists.filter(g => g);
}
