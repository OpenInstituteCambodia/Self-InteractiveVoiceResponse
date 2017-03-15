import { SQLite } from 'ionic-native';

export class DatabaseController {
  private db = new SQLite();
  constructor() {

  }

  private connectDB() {
    return this.db.openDatabase({ name: 'appdata.db', location: 'default'});
  }

  public executeSQL() {
    
  }
}
