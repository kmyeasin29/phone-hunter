const searctResult = document.getElementById('search-result');
const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchValue = searchField.value;
    searchField.value = "";
    //error alert
    // document.getElementById('error-message').style.display = 'none';
    if (searchValue == "" || searchValue <= 0) {
        error.innerText = "Something went wrong please try again";
        searchValue.value = "";
        searctResult.innerHTML = "";

    }
    else {
        // console.log(searchValue);
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
        // console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => getSearchAccess(data.data));
        searchValue.value = "";
        error.innerText = "";
        searctResult.innerHTML = "";
    }
}

// get the access from below function
const getSearchAccess = (phones) => {
    // const searctResult = document.getElementById('search-result');
    const first20phones = phones.slice(0, 20)
    for (const phone of first20phones) {
        // console.log(phone);
        const div = document.createElement('div');
        // div.classList.add('col');
        // div.classList.add('card');
        div.classList.add('col-lg-4');
        div.classList.add('mb-4');
        div.classList.add('p-4');
        div.classList.add('mx-auto');
        div.innerHTML = `
        <div class="card">
            <img src="${phone.image}" class="card-img-top" alt="...">
                <div class="">
                    <h5 class="card-title">${phone.phone_name}</h5>
                    <h5 class="card-title">${phone.brand}</h5>
                    <a onclick="getPhoneId('${phone.slug}')" id="detail-button" href="#" class="btn btn-primary">Go for details</a>
                </div>
        </div>
        `;
        searctResult.appendChild(div)
    }
}

// detail part

const getPhoneId = phoneId => {
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => showDetails(data.data));
}


// get Phone details
const showDetails = phoneInfo => {
    const phoneDetails = document.getElementById('phone-detail');
    phoneDetails.innerHTML = `
    

    <div class="card">
            <h3 class="text-center"><u>${phoneInfo.name}</u></h3>
            <img src="${phoneInfo.image}" class="card-img-top" alt="...">
                <div class="">
                    <h5 class="card-title">Release Date: ${phoneInfo.releaseDate}</h5>
                    <h4><u>Main Features:</u></h4>
                    <h5 class="card-title">
                    Storage: ${phoneInfo.mainFeatures.storage},<br/>
                    Chip Set: ${phoneInfo.mainFeatures.chipSet},<br/>
                    Display Size: ${phoneInfo.mainFeatures.displaySize},<br/>
                    Memory: ${phoneInfo.mainFeatures.memory},
                    </h5>
                    <h4><u>Sensors:</u></h4>
                    <h5 class="card-title">
                    Sensors: ${phoneInfo.mainFeatures.sensors}
                    </h5>
                    <h4><u>Others Features:</u></h4>
                    <h5 class="card-title">
                    Bluetooth: ${phoneInfo.others.Bluetooth}<br/>
                    GPS: ${phoneInfo.others.GPS}<br/>
                    NFC: ${phoneInfo.others.NFC}<br/>
                    Radio: ${phoneInfo.others.Radio}<br/>
                    USB: ${phoneInfo.others.USB}<br/>
                    WLAN: ${phoneInfo.others.WLAN}
                    </h5>
                </div>
        </div>
    `
}