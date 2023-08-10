import chararterJsonJS from '../scraping/all/index.json'

// const chararterJsonJS = [
//   {
//     id: 1,
//     name: "Rick Sanchez",
//     image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
//   },
//   {
//     id: 2,
//     name: "Morty Smith",
//     image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
//   },
//   {
//     id: 3,
//     name: "Summer Smith",
//     image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
//   },
//   {
//     id: 4,
//     name: "Beth Smith",
//     image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
//   },
//   {
//     id: 5,
//     name: "Jerry Smith",
//     image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
//   },
//   {
//     id: 6,
//     name: "Abadango Cluster Princess",
//     image: "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
//   },
// ];

const search = (string, name) => {
  for (let i = 0; i < name.length; i++) {
    if (
      string[0].toLowerCase() === name[i].toLowerCase() &&
      string.toLowerCase() === name.slice(i, string.length + i).toLowerCase()
    ) { return true }
  }
  return false
}

export const searchString = (string) => {
  const searchArrays = []
  chararterJsonJS.forEach((char) => {
    const { name } = char
    if (search(string, name)) searchArrays.push(char)
  })
  return searchArrays
}
