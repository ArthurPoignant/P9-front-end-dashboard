export default class AverageSessions {
    userId;
    sessions;
  
    constructor(data) {
      this.userId = data.userId;
      this.sessions = data.sessions;
    }
}
