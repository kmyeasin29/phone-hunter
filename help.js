const getAccess = (allDogs) => {
    const main = document.getElementById("main");
    const first90Data = allDogs.slice(10, 90)

    for (const dog of first90Data) {

        const newDiv = document.createElement('div');
        newDiv.className = 'col-lg-4 px-5 text-success'
        newDiv.innerHTML = `
        <h2>${dog.name}</h2>
        <img width='400' height='250' src= '${dog.image.url}'/>
        <h4>${dog.weight.imperial}</h4>
        `
        main.appendChild(newDiv);
    }

}

const phoneDetails = detailsValue => {
    // console.log(slug);
    const url = "https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089";
    // const url = ` https://openapi.programming-hero.com/api/phone/${detailsValue}`;
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data.data.others.WLAN));
}
phoneDetails('iphone')
/*
const phoneDetails = (slug) => {
    fetch(`https://deckofcardsapi.com/api/deck/new/draw/?${slug}`)
        .then(res => res.json())
        .then(data => {
            const allPhones = data.phones;
            const singlePhone = allPhones.find(phone => phone.slug === 'slug')
            const div = document.createElement("div");
            main.innerHTML = "";
            div.innerHTML = `
                <div class="card" style="width: 18rem;">
                    <img src="${singlePhone.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${singlePhone.mainFeatures}</h5>
                        <p class="card-text">${singlePhone.code}</p>
                        <p class="card-text">${singlePhone.value}</p>
                    </div>
                </div>
            `
            main.appendChild(div)
        })
}
*/

/*
const seeDetails = () => {

    const detailButton = document.getElementById('detail-button');
    const detailValue = detailButton.value;
    console.log(detailValue);
    const url = `https://openapi.programming-hero.com/api/phone/${detailValue}`;
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => getDetailAccess(data.data));
}

// access phone Details
const getDetailAccess = () => {
    const searctResult = document.getElementById('phone-detail');
    console.log(searctResult);
    for (const detail of aboutPhone) {
        console.log(detail);
        const div = document.createElement('div');
        // div.classList.add('col');
        // div.classList.add('card');
        div.classList.add('col-lg-4');
        div.classList.add('mb-4');
        div.classList.add('p-4');
        div.classList.add('mx-auto');
        div.innerHTML = `
        <div class="card">
            <img src="${detail.image}" class="card-img-top" alt="...">
                <div class="">
                    <h5 class="card-title">${detail.mainFeatures}</h5>
                    <h5 class="card-title">${detail.brand}</h5>
                    <a onclick="seeDetails()" id="detail-button" href="#" class="btn btn-primary">Go for details</a>
                </div>
        </div>
        `;
        searctResult.appendChild(div)
    }
}
*/