import fire from '../assets/images/fire.svg';
import food from '../assets/images/food.svg';
import fruit from '../assets/images/fruit.svg';
import cheeseburger from '../assets/images/cheeseburger.svg';
import { Indicators } from '../types';
import { USER_MAIN_DATA } from './data';

export const indicators: Indicators[] = [
  {
    image: fire,
    color: "rgb(255, 1, 1, 0.1)",
    title: "calories",
    quantity : USER_MAIN_DATA[0].keyData.calorieCount + "Kcal"
  },
  {
    image: food,
    color: "rgba(117, 190, 218, 0.1)",
    title: "Proteines",
    quantity: USER_MAIN_DATA[0].keyData.proteinCount + "g"
  }, 
  {
    image :fruit,
    color: "rgb(253, 204, 12, 0.1)",
    title: "Glucides",
    quantity: USER_MAIN_DATA[0].keyData.carbohydrateCount + "g"
 },
  { 
    image: cheeseburger,
    color: "rgb(253, 81, 129, 0.1)",
    title: "Lipides",
    quantity : USER_MAIN_DATA[0].keyData.lipidCount + "g"
  }
]