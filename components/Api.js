export default class Api {
    constructor(options) {
        this._options = options;
        this._headers = this._options.headers;

        /*
        * STORES USER ENDPOINT.
        */        
        this._userDataUrl = `${this._options.baseUrl}/users/me`;

        /*
        * STORES CARDS ENDPOINT.
        */        
       this._cardsDataUrl = `${this._options.baseUrl}/cards`;
    }

    /*
     * TREAT PROMISES TO RETURN.
     */
    async _handleResponseReturn(response) {
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return await response.json();
    }

    /*
     * HANDLES USER DATA.
    */
    async getUserInfo() {
        const response = await fetch(this._userDataUrl, { headers: this._headers });
        return this._handleResponseReturn(response);
    }
    
    async setUserInfo(newUserName, newUserAbout) {
        const response = await fetch(this._userDataUrl, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name: newUserName,
                about: newUserAbout
            })
        });

        return this._handleResponseReturn(response);
    }

    async setUserAvatar(newUserAvatar) {
        const response = await fetch(`${this._userDataUrl}/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar: newUserAvatar
            })
        });

        return this._handleResponseReturn(response);
    }
    
    /*
     * HANDLES CARDS DATA.
    */
    async getCards() {
        const response = await fetch(this._cardsDataUrl, { headers: this._headers });
        return this._handleResponseReturn(response);
    }

    async newCard(cardTitle, cardLink) {
        const response = await fetch(this._cardsDataUrl, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name: cardTitle,
                link: cardLink
            })
        });
        return this._handleResponseReturn(response);
    }
    
    async deleteCard(cardId) {
        const response = await fetch(`${this._cardsDataUrl}/${cardId}`, {
            method: "DELETE",
            headers: this._headers,
        });

        return this._handleResponseReturn(response);
    }

    async likeCard(cardId) {
        const response = await fetch(`${this._cardsDataUrl}/${cardId}/likes`, {
            method: "PUT",
            headers: this._headers,
        });

        return this._handleResponseReturn(response);
    }

    async dislikeCard(cardId) {
        const response = await fetch(`${this._cardsDataUrl}/${cardId}/likes`, {
            method: "DELETE",
            headers: this._headers,
        });

        return this._handleResponseReturn(response);
    }
}


// const api = new Api({
//   baseUrl: "https://around-api.pt-br.tripleten-services.com/v1",
//   headers: {
//     authorization: "c56e30dc-2883-4270-a59e-b2f7bae969c6",
//     "Content-Type": "application/json"
//   }
// });