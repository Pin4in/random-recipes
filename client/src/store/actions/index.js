import {
  FETCH_INGREDIENTS,
  SELECT_INGREDIENT,
  MAKE_RECIPE
} from './types';

let fakeData = [
  {
    "id": 1,
    "text": "киноа",
    "active": false
  },
  {
    "id": 2,
    "text": "гречка",
    "active": false
  },
  {
    "id": 3,
    "text": "пшено",
    "active": false
  },
  {
    "id": 4,
    "text": "кус-кус",
    "active": false
  },
  {
    "id": 5,
    "text": "кукурузная крупа",
    "active": false
  },
  {
    "id": 6,
    "text": "чечевица",
    "active": false
  },
  {
    "id": 7,
    "text": "дикий и красный рис",
    "active": false
  },
  {
    "id": 8,
    "text": "запеченный картофель",
    "active": false
  },
  {
    "id": 9,
    "text": "батат",
    "active": false
  },
  {
    "id": 10,
    "text": "свекла",
    "active": false
  },
  {
    "id": 11,
    "text": "пастернака",
    "active": false
  },
  {
    "id": 12,
    "text": "топинамбур",
    "active": false
  },
  {
    "id": 13,
    "text": "морковь",
    "active": false
  }
];

export function fetchIngredients() {
  return (dispatch) => {
    fetch('/api/ingredients')
      .then(res => {
        console.log(res.headers.get('Content-Type'));
        console.log(res.status);
        return res.json()
      })
      .then(data => {
        dispatch({
          type: FETCH_INGREDIENTS,
          payload: data
        })
      })
  }
}

export function selectIngredient(id) {
  return (dispatch) => {
    const data = fakeData.map(item => {
      if (item.id === id) {
        item.active = !item.active;
      }
      return item;
    })

    dispatch({
      type: SELECT_INGREDIENT,
      payload: data
    })
  }
}

export function makeRecipe() {
  return (dispatch) => {
    fetch('/api/recipe', {
        method: 'post',
        headers: {  
          "Content-type": "application/json; charset=UTF-8"  
        }, 
        body: JSON.stringify(fakeData)
      })
      .then(res => {
        console.log(res.headers.get('Content-Type'));
        console.log(res.status);
        return res.json()
      })
      .then(data => {
        dispatch({
          type: MAKE_RECIPE,
          payload: data
        })
      })
  }
}