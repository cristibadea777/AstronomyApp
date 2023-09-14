import * as SQLite from 'expo-sqlite'
import * as FileSystem from 'expo-file-system'

//Baza de Date
//deschide baza de date / sau o creeaza daca nu exista 
let db = SQLite.openDatabase('FavoriteAPODS.db')

const creareTabele = () => {
    //Creare tabel FavoriteAPODS
    db.transaction(
        tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS ' +
                'FavoriteAPODS (id INTEGER PRIMARY KEY AUTOINCREMENT, titlu TEXT, explicatie TEXT, data TEXT, url TEXT);',
                [],
                ()    => console.log("FavoriteAPODS table created successfully"),
                error => console.log("Error creating FavoriteAPODS table:\n" + JSON.stringify(error))
            )
        }
    )
}

getFavoriteAPODS = () => {
    return new Promise((resolve, reject) => {
        db.transaction(
            tx => {
                tx.executeSql(
                    'SELECT * FROM FavoriteAPODS',
                    [],
                    (_, resultSet) => {
                        resolve(resultSet.rows._array) //returneaza resolve cu result-setul
                    },
                    (_, error) => {
                        console.log('Error:\n' + JSON.stringify(error))
                        resolve([])//in caz de eroare se returneaza in promisiune un array gol
                })
            })
        }
    )
}

const addAPODtoFavorites = (titlu, explicatie, data, url) => {
    let id = ''
    db.transaction(
        tx => {
            tx.executeSql(
                'INSERT INTO FavoriteAPODS (titlu, explicatie, data, url) VALUES (?, ?, ?, ?)',
                [titlu, explicatie, data],
                (txObj, resultSet) => {
                    id = resultSet.insertId
                    console.log('INSERTED APOD - ID: ' + id)   
                },
                error => console.log('Error inserting APOD:\n' + JSON.stringify(error))
            )
        }
    )
}

const deleteAPODfromFavorites = (data) => {
    db.transaction(
        tx => {
            tx.executeSql(
                'DELETE FROM FavoriteAPODS WHERE data = ?',
                [data],
                ()    => console.log("APOD of date " + data + " removed from favorites"),
                error => console.log("Error removing APOD of date " + data + " from favorites:\n" + JSON.stringify(error))
            )
        }
    )
}

const dropDatabaseAsync = async () => {
    //baza de date este in sistemul de fisiere, directorul sursa, /SQLite/
    const databaseFile = `${FileSystem.documentDirectory}SQLite/FavoriteAPODS.db`
    try{
        await FileSystem.deleteAsync(databaseFile) //asteptam ca FileSystem sa termine de sters baza de date
        console.log("Delted database")
    } 
    catch(error){
        console.log("Error deleting database:\n" + JSON.stringify(error))
    }
}

//pt import - se inchide vechea BD, se face import BD noua, apoi se deschide noua BD
const deschidereBd = () => {
    db = SQLite.openDatabase('FavoriteAPODS.db')
}
const inchidereBd = () => {
    db.closeAsync()
}

export{
    creareTabele,
    addAPODtoFavorites,
    deleteAPODfromFavorites,
    dropDatabaseAsync,
    deschidereBd,
    inchidereBd,
}