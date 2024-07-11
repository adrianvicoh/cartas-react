const APIURL = 'https://app.nocodb.com/api/v2';
const TOKEN = 'ikk2Z7T8PEpFCQAGD8nBagWm7wTlU_xJ7krtCZpV';

class BaseController {

    constructor(tableId, tableName) {
        this.apiUrl = `${APIURL}/tables/${tableId}/records`;
        this.token = TOKEN;
        this.tableName = tableName;
    }

    async getTableName() {
        return this.tableName;
    }

    async getAll() {
        const response = await fetch(this.apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            }
        });

        //retornem directament la propietat list que conté els registres
        let data = await response.json();
        data = data.list

        // extraient la Imagen, només agafem la primera
        data = data.map(e => {
            let Imagen = (e.Imagen && e.Imagen[0].signedUrl) ? e.Imagen[0].signedUrl : '';
            delete e.Imagen;
            e.Imagen = Imagen;
            return e;
        });

        return data;

    }

    async createItem(ob) {
        const response = await fetch(`${this.apiUrl}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            },
            body: JSON.stringify(ob)
        });

        const data = await response.json();
        return data;
    }

    async updateItem(id, ob) {
        ob.Id = id;
        const response = await fetch(`${this.apiUrl}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            },
            body: JSON.stringify(ob)
        });

        const data = await response.json();
        return data;
    }

    async getItemById(id) {
        const response = await fetch(`${this.apiUrl}/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            }
        });

        const data = await response.json();

        let Imagen = (data.Imagen && data.Imagen[0].signedUrl) ? data.Imagen[0].signedUrl : '';
        delete data.Imagen;
        data.Imagen = Imagen;

        return data;
    }

    async deleteItem(id) {
        const response = await fetch(`${this.apiUrl}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            },
            body: JSON.stringify({
                Id: id
            })
        });

        const data = await response.json();
        return data;
    }
}


export default BaseController;