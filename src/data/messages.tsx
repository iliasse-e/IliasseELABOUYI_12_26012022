/**
 * @file Gathers the dashboard daily/weekly user message
 */

/**
 * Types of messages that has to be displayed in dashboard title
 * The function calculates which message needs to be displayed
 * depending on user's goal achievement
 * @param { Number } UserData.todayScore 
 * */
export const customMessages = (todayScore: Number) => {
 
    const performances = [
        {
            state: "succes",
            message: "Félicitations ! Vous avez explosé vos objectifs hier 🔥"
        },
        {
            state: "fair",
            message: "Bravo ! L'objectif a été atteint 🦍"
        },
        {
            state: "failure",
            message: "Courage ! Un petit effort de plus et vous y êtes 💪"
        }
    ];

    let message = performances.find( msg => msg.state === 'failure').message;

    if (todayScore >= 0.1) {
        message = performances.find( msg => msg.state === 'succes').message;
    }
    else if (todayScore >= 0.08) {
        message = performances.find( msg => msg.state === 'fair').message;
    }

    return message
}
