/**
 * @files Manages complexe types
 */


// Service folder

export interface ScoreType {
    name: String,
    uv: Number,
    pv: Number,
    fill: String
}

export interface UserData {
    id: Number,
    userInfos: {
        firstName: String,
        lastName: String,
        age: Number,
    },
    todayScore: Number,
    keyData: {
        calorieCount: any,
        proteinCount: Number,
        carbohydrateCount: Number,
        lipidCount: Number
    }
}

export interface Activity { 
    userId: Number,
    sessions: [
        {
            day: String,
            kilogram: Number,
            calories: Number
        }
    ]
}

export interface AverageSession {
    userId: Number,
    sessions: [
        {
            day: Number,
            sessionLength: Number
        }
    ]
}

export interface Performance {
    userId: Number,
      kind: {
          1: 'cardio',
          2: 'energy',
          3: 'endurance',
          4: 'strength',
          5: 'speed',
          6: 'intensity'
      },
      data: [
          {
              value: Number,
              kind: Number
          }
      ]
}


// Data folder

export interface Indicators {
    image: String,
    color: String,
    title: String,
    quantity : String
}


// messages file

export interface CustomMessages {
    state: "succes" | "fair" | "failure",
    message: String
}
