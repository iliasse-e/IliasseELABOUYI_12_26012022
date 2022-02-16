export interface ScoreType {
    name: String,
    uv: Number,
    pv: Number,
    fill: String
}

export interface UserData {
  index:{
    id: Number,
    userInfos: {
        firstName: String,
        lastName: String,
        age: Number,
    },
    todayScore: Number,
    keyData: {
        calorieCount: Number,
        proteinCount: Number,
        carbohydrateCount: Number,
        lipidCount: Number
    }
  }[]
}

export interface Indicators {
  image: String,
  color: String,
  title: String,
  quantity : String
}