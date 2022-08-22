export interface ISingInResponse {
    message: string,
    token: string,
    refreshToken: string,
    userId: string,
    name: string
}

export interface IUser {
    name: string,
    email: string,
    password: string
}

export interface IWord {
    id: string,
    group: number,
    page: number,
    word: string,
    image: string,
    audio: string,
    audioMeaning: string,
    audioExample: string,
    textMeaning: string,
    textExample: string,
    transcription: string,
    wordTranslate: string,
    textMeaningTranslate: string,
    textExampleTranslate: string
}

export interface IUserWords {
    difficulty: string,
    optional: {}
}

export interface IStatisticsResp {
    learnedWords: number,
    optional: {}
}

export interface IUserSettings {
    wordsPerDay: number,
    optional: {}
}


