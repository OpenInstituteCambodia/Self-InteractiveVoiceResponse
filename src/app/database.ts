import { SQLite } from 'ionic-native';

export class DatabaseController {
  private _db = new SQLite();
  private _connected = false;
  constructor() {

  }

  private connectDB() {
    return this._db.openDatabase({ name: 'appdata.db', location: 'default'}).then( suc => this._connected = true);
  }

  public executeSQL(sql, options) {
    return this.connectDB().then((suc) => {
      return this._db.executeSql(sql, options);
    }).catch( err => console.log(err) );
  }
}
