/**
 * @files Manages complexe types
 */


/*** Service folder ***/

// Score data

export interface ScoreType {
    name: String,
    uv: Number,
    pv: Number,
    fill: String
}


// User data

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


// Activity data

export interface Activity { 
    userId: Number,
    sessions: Array<Session>
}

export interface Session {
    day: String,
    kilogram: Number,
    calories: Number
}


// AverageSession data

export interface AverageSession {
    userId: Number,
    sessions: Array<Sessions>
}

export interface Sessions {
    day: Number,
    sessionLength: Number
}


// Performance data

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
      data: Array<Datas>
}

export interface Datas {
    value: Number,
    kind: Number
}


/*** Data folder types ***/

// indocators

export interface Indicators {
    image: String,
    color: String,
    title: String,
    quantity : String
}


// messages file type

export interface CustomMessages {
    state: "succes" | "fair" | "failure",
    message: String
}
