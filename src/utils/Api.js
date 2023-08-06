class Api {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
    this._token = this._headers.authorization;
  }

  _isOk(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }

  removeCard(idCard) {
    return fetch(`${this._url}/cards/${idCard}`, {
      method: "DELETE",
      headers: {
        authorization: this._token,
      },
    }).then(this._isOk);
  }

  // =========== getters ===========
  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: {
        authorization: this._token,
      },
    }).then(this._isOk);
  }

  getCards() {
    return fetch(`${this._url}/cards`, {
      headers: {
        authorization: this._token,
      },
    }).then(this._isOk);
  }

  // =========== setters ===========
  setUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then(this._isOk);
  }

  setAvatar(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then(this._isOk);
  }

  setCard(data) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: data.title,
        link: data.link,
      }),
    }).then(this._isOk);
  }
  // =========== handleLike ===========
  addLike(idCard) {
    return fetch(`${this._url}/cards/${idCard}/likes`, {
      method: "PUT",
      headers: {
        authorization: this._token,
      },
    }).then(this._isOk);
  }

  removeLike(idCard) {
    return fetch(`${this._url}/cards/${idCard}/likes`, {
      method: "DELETE",
      headers: {
        authorization: this._token,
      },
    }).then(this._isOk);
  }
}

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-71",
  headers: {
    authorization: "63e51c94-2a20-4ac4-b2ef-ac2b1cdb1198",
    "Content-Type": "application/json",
  },
});

export default api;
