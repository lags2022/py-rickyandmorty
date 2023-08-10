import fs from 'fs-extra'
import axios from 'axios'
import { log, time } from './log.js'

const endTime = time()

const INITIAL_PAGE = 1
const FINAL_PAGE = 42

let indexFileContent = []

for (let id = INITIAL_PAGE; id <= FINAL_PAGE; id++) {
  const url = `https://rickandmortyapi.com/api/character?page=${id}`
  log(`Fetching ${url}...`)
  const {
    data: { results }
  } = await axios.get(url)

  const newCharactersArray = results.map((character) => {
    const { id, name, image } = character
    return { id, name, image }
  })

  indexFileContent = [...indexFileContent, ...newCharactersArray]
  log(`Wrote page: ${id}! ✅\n`)
}

await fs.writeJSON('./all/index.json', indexFileContent)
log('Wrote Index Content! ✅\n')
endTime()
