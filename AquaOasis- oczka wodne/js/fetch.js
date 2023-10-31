class OpiniaElement {
    constructor(klient) {
        this.opiniaElement = document.createElement('div');
        this.opiniaElement.className = 'col-lg-4 col-sm-6';

        this.reviewElement = document.createElement('div');
        this.reviewElement.className = 'review';

        this.reviewHeadElement = document.createElement('div');
        this.reviewHeadElement.className = 'review-head p-4 bg-white theme-shadow';

        this.textWarningElement = document.createElement('div');
        this.textWarningElement.className = 'text-warning';

        for (let i = 0; i < 5; i++) {
            const starFillElement = document.createElement('i');
            starFillElement.className = 'ri-star-fill';
            this.textWarningElement.appendChild(starFillElement);
        }

        this.opiniaTextElement = document.createElement('p');
        this.opiniaTextElement.textContent = klient.opinia;

        this.reviewHeadElement.appendChild(this.textWarningElement);
        this.reviewHeadElement.appendChild(this.opiniaTextElement);

        this.reviewPersonElement = document.createElement('div');
        this.reviewPersonElement.className = 'review-person mt-4 d-flex align-items-center';

        this.imgElement = document.createElement('img');
        this.imgElement.className = 'rounded-circle';
        this.imgElement.src = klient.zdjecie;
        this.imgElement.alt = '';

        this.msElement = document.createElement('div');
        this.msElement.className = 'ms-3';

        this.nazwaElement = document.createElement('h5');
        this.nazwaElement.textContent = klient.nazwa;

        this.uslugaElement = document.createElement('small');
        this.uslugaElement.textContent = klient.usluga;

        this.msElement.appendChild(this.nazwaElement);
        this.msElement.appendChild(this.uslugaElement);

        this.reviewPersonElement.appendChild(this.imgElement);
        this.reviewPersonElement.appendChild(this.msElement);

        this.reviewElement.appendChild(this.reviewHeadElement);
        this.reviewElement.appendChild(this.reviewPersonElement);

        this.opiniaElement.appendChild(this.reviewElement);
    }

    getOpiniaElement() {
        return this.opiniaElement;
    }
}

fetch('dokumenty/opinie.json')
    .then(response => response.json())
    .then(data => {
        const klienci = data.klienci;
        const opinieElement = document.getElementById('opinie');

        const rowElement = document.createElement('div');
        rowElement.className = 'row gy-5 gx-4';

        klienci.forEach(klient => {
            const opiniaElement = new OpiniaElement(klient);
            rowElement.appendChild(opiniaElement.getOpiniaElement());
        });

        opinieElement.appendChild(rowElement);
    })
    .catch(error => {
        console.error('Wystąpił błąd:', error);
    });
