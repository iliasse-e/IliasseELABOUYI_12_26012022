import fire from '../assets/images/fire.svg';
import food from '../assets/images/food.svg';
import fruit from '../assets/images/fruit.svg';
import cheeseburger from '../assets/images/cheeseburger.svg';
import { Indicators, UserData } from '../types';

/**
 * Gathers the informations of the aside dashboard indicators icons
 * such as the icon (image), the color of the icon (color), the title (title),
 * and the content (quantity)
 * @param userData { UserData } needed to extract the quantity content
 * @returns { Indicators[] } array of objects that contains of these informations
 * usefull to display the icons
 */
export function indicators(userData: UserData): Indicators[] {

  return [
    {
      image: fire,
      color: "rgb(255, 1, 1, 0.1)",
      title: "calories",
      quantity : userData.keyData.calorieCount/100 + "Kcal"
    },
    {
      image: food,
      color: "rgba(117, 190, 218, 0.1)",
      title: "Proteines",
      quantity: userData.keyData.proteinCount + "g"
    }, 
    {
      image :fruit,
      color: "rgb(253, 204, 12, 0.1)",
      title: "Glucides",
      quantity: userData.keyData.carbohydrateCount + "g"
  },
    { 
      image: cheeseburger,
      color: "rgb(253, 81, 129, 0.1)",
      title: "Lipides",
      quantity : userData.keyData.lipidCount + "g"
    }
  ]

}