const product = [
    {
        id: 0,
        image: 'images/svg/station.svg',
        title: 'SNR Sons - Nava India',
        Price: "Estimated : ₹100/unit",
        Customer_Care:'7886735527', 
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.218137130089!2d76.98439197480864!3d11.022253789141827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85849d74c3695%3A0x9153ec3168293ec5!2sSri%20Ramakrishna%20College%20of%20Arts%20%26%20Science!5e0!3m2!1sen!2sin!4v1706564582758!5m2!1sen!2sin',
    },
    {
        id: 1,
        image: 'images/svg/station.svg',
        title: 'Peelamedu',
        Price: "Estimated : ₹120/unit",
        Customer_Care:'7886735527',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15664.215993163783!2d77.00526054475536!3d11.034575626083143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85824c7646fcb%3A0x3cbee12a8c82fcb9!2sPeelamedu%2C%20Maheshwari%20Nagar%2C%20Coimbatore%2C%20Tamil%20Nadu%20641004!5e0!3m2!1sen!2sin!4v1706564733136!5m2!1sen!2sin',
    },
    {
        id: 2,
        image: 'images/svg/station.svg',
        title: 'Gandhipuram',
        Price: "Estimated : ₹120/unit",
        Customer_Care:'8667453389',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2802894205265!2d76.96483257480858!3d11.017584489146188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859b72731602b%3A0x5dd6dca652313853!2sGandhipuram%20Coimbatore!5e0!3m2!1sen!2sin!4v1706560395543!5m2!1sen!2sin',

    },
    {
        id: 3,
        image: 'images/svg/station.svg',
        title: 'Mettupalayam',
        Price: "Estimated : ₹180/unit",
        Customer_Care:'9887456689',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31300.10484077833!2d76.91364039431917!3d11.297157888624513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8ee9623c506a5%3A0x3162d68da8ba75f5!2sMettupalayam%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1706564775008!5m2!1sen!2sin',

    },
    {
        id: 4,
        image: 'images/svg/station.svg',
        title: 'Koundampalayam',
        Price: "Estimated : ₹160/unit",
        Customer_Care:'6879458967',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15663.643122576794!2d76.9225459920904!3d11.045315827057303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85897648df841%3A0x80b7ba5192d1b3c1!2sKoundampalayam%2C%20Coimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1706564846551!5m2!1sen!2sin',
    },
    {
        id: 5,
        image: 'images/svg/station.svg',
        title: 'RS Puram',
        Price: "Estimated : ₹160/unit",
        Customer_Care:'9363856767',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2999906836294!2d76.95163317480853!3d11.016103989147632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8596215a0568d%3A0x4a7f4c6396ff4400!2sR.S.PURAM%20bus%20stop!5e0!3m2!1sen!2sin!4v1706564885232!5m2!1sen!2sin',
    },
];

const categories = [...new Set(product.map((item) => { return item }))]

document.getElementById('searchBar').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filteredData = categories.filter((item) => {
        return (
            item.title.toLowerCase().includes(searchData)
        )
    })
    displayItem(filteredData)
});

const displayItem = (items) => {
    document.getElementById('root').innerHTML = items.map((item) => {
        var { image, title, Price,Customer_Care, mapUrl } = item;
        return (
            `<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                    <div class="txt">
                    <h2>${title}</h2>
                 <p>${Price}</p>
                 <p>Support : ${Customer_Care}</p>
                 
                 </div>
                </div> 
               
    <div class="row">
       <div class="col col-lg-6">

       <div class='bottom'>
                
       <button>9:00 AM</button>
       <button>10:00 AM</button>
       <button>1:00 PM</button>
       <p  onclick="alertMsg()">See more timings </p>
     </div>
     </div>

        <div class="col col-lg-6">
        <iframe class="map-loc" src="${mapUrl}" width="300" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div></div>
                
               
                    
               
            </div>`
        )
    }).join('')
};
displayItem(categories);



