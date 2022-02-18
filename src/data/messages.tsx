/**
 * @file Gathers the dashboard daily/weekly user message
 */

import { CustomMessages } from "../types";

/**
 * Types of messages that has to be displayed in dashboard title
 * depending on user's goal achievement 
 * */
export const customMessages: CustomMessages[] = [
    {
        state: "succes",
        message: "Félicitations ! Vous avez explosé vos objectifs hier"
    },
    {
        state: "fair",
        message: "Bravo ! L'objectif a été atteint"
    },
    {
        state: "failure",
        message: "Courage ! Un petit effort de plus et vous y êtes"
    }
]