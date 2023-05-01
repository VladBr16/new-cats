const CONFIG_API = {
    url: "https://cats.petiteweb.dev/api/single/brtjf",
    headers: {
        "Content-type": "application/json",
    },
};
// "https://cats.petiteweb.dev/api/single/brtjf"
// "https://sb-cats.herokuapp.com/api/2/brtjf"
export class API {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }
    _onResponse(res) {
        return res.ok ? res.json() : Promise.reject({ ...res, message: "error" });
    }
    getAllCats() {
        /// отобразить всех котиков
        return fetch(`${this._url}/show`, {
            method: "GET",
        }).then(this._onResponse);
    }
    getAllCatsId() {
        /// отобразить все возможные айди котиков
        return fetch(`${this._url}/ids`, {
            method: "GET",
            
        }).then(this._onResponse);
    }
    getCatById(id) {
        /// отобразить конкретного котика
        return fetch(`${this._url}/show/${id}`, {
            method: "GET",
            headers: this._headers,
            
        }).then(this._onResponse);
    }
    addNewCat(body) {
        return fetch(`${this._url}/add`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify(body),
        }).then(this._onResponse);
    }
    updateCatById(id, data) { 
        return fetch(`${this._url}/update/${id}`, {
            method: "PUT",
            headers: this._headers,
            body: JSON.stringify(data),
        }).then(this._onResponse);
    }
    deleteCatById(id) {
        /// удалить конкретного котика по айди
        return fetch(`${this._url}/delete/${id}`, {
            method: "DELETE",
        }).then(this._onResponse);
    }
}

export const api = new API(CONFIG_API);
