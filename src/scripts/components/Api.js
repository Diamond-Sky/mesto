export default class Api {
    constructor(userData) {
        const{serverUrl, cohortId, authorization} = userData;
        this._authorization = authorization;
        this._cohortId = cohortId;
        this._serverUrl = serverUrl;
    }

    _checkResponse(res) {
        if(res.ok) return res.json();
        return Promise.reject(res.status);
    }

    showErrorMessage(err) {
        alert(`Ошибка: ${err}`);
    }
    
    //Запрос на удаление карточки
    deleteCard(idCard) {
        return fetch(`${this._serverUrl}/${this._cohortId}/cards/${idCard}`, {
            method: 'DELETE',
            headers: {
                authorization: this._authorization
            }
        })
        .then(this._checkResponse)
    }

  //Удалить лайк карточки
    deleteLike(idCard) {
    return fetch(`${this._serverUrl}/${this._cohortId}/cards/likes/${idCard}`, {
      method: 'DELETE',
      headers: {
        authorization: this._authorization
      }
    })
    .then(this._checkResponse)
  }

  //Установить лайк
    setLike(idCard) {
    return fetch(`${this._serverUrl}/${this._cohortId}/cards/likes/${idCard}`, {
      method: 'PUT',
      headers: {
        authorization: this._authorization
      }
    })
    .then(this._checkResponse)
  }

  //Функция получения данных профиля пользователя с сервера
    getUserInfo() {
        return fetch(`${this._serverUrl}/${this._cohortId}/users/me`, {
            headers: {
                authorization: this._authorization
            }
        })
        .then(this._checkResponse)
  }

    getCardsInfo() {
        return fetch(`${this._serverUrl}/${this._cohortId}/cards`, {
            headers: {
                authorization: this._authorization
            }
        })
        .then(this._checkResponse)
    }

  //Сменить аватар
    setAvatar(data) {
    return fetch(`${this._serverUrl}/${this._cohortId}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._authorization,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(this._checkResponse)
  }
    //Сменить информацию о пользователе
    setUserInfo(data) {
        return fetch(`${this._serverUrl}/${this._cohortId}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: this._authorization,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(this._checkResponse)
    }

       //Сменить информацию о пользователе
    addCard(data) {
        return fetch(`${this._serverUrl}/${this._cohortId}/cards`, {
            method: 'POST',
            headers: {
                authorization: this._authorization,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(this._checkResponse)
    }
}
