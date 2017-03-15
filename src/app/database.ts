import { SQLite } from 'ionic-native';

export class DatabaseController {
  private _db = new SQLite();
  constructor() {

  }

  private connectDB() {
    return this._db.openDatabase({ name: 'appdata.db', location: 'default'});
  }

  public executeSQL() {
    this.connectDB().then((suc) => {
      console.log(suc);
    }).catch( err => console.log(err) );
  }
}
