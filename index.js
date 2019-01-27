const randomInteger = require('./random')

const BASIS = require('./dummy/basis.json')
const FULLNESS = require('./dummy/fullness.json')
const FATS = require('./dummy/fats.json')
const VAG_COOKED = require('./dummy/vag-cooked.json')
const VAG_FRESH = require('./dummy/vag-fresh.json')


const basisId = randomInteger(0, BASIS.length-1 )
const fullnessId = randomInteger(0, FULLNESS.length-1 )
const fatsId = randomInteger(0, FATS.length-1 )
const vagCookedId = randomInteger(0, VAG_COOKED.length-1 )
const vagFreshId = randomInteger(0, VAG_FRESH.length-1 )


const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const recipe = {
  base: BASIS[basisId].text,
  fullness: FULLNESS[fullnessId].text,
  fats: FATS[fatsId].text,
  vagCooked: VAG_COOKED[vagCookedId].text,
  vagFresh: VAG_FRESH[vagFreshId].text
}

app
  .use(bodyParser.json())
  .get('/api/ingredients', (req, res, next) => {
    res.send(FULLNESS);
  })
  .post('/api/recipe', (req, res, next) => {
    console.log(req.body);
    res.send(recipe);
  })

app.listen('4000')

// console.log('recipe', [
//   BASIS[basisId].text,
//   FULLNESS[fullnessId].text,
//   FATS[fatsId].text,
//   VAG_COOKED[vagCookedId].text,
//   VAG_FRESH[vagFreshId].text
// ])

