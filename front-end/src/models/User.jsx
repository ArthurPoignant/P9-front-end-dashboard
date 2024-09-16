export default class User {
    id;
    userInfos;
    todayScore;
    keyData;
  
    constructor(data) {
      this.id = data.id;
      this.userInfos = data.userInfos;
      this.todayScore = data.todayScore !== undefined ? data.todayScore : data.score;
      this.keyData = data.keyData;
    }
  }
  