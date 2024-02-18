
// When clicked Buy Ticket then get seats section for booking 
const buyTickets = document.getElementById('buy-tickets');
const busSeats = document.getElementById('bus-seats');

buyTickets.addEventListener('click', function(){

    busSeats.scrollIntoView({ behavior: 'smooth' });
    
});

//Select seats and Buy seats

const getButtonByClassName = document.querySelectorAll(".btn-seat");
// console.log(getButtonByClassName);

for(let i=0; i<getButtonByClassName.length; i++){
    const seat = getButtonByClassName[i];
    // console.log(seat);
    seat.addEventListener('click', function(){
        // console.log('clicked');

        //console.log(seat.querySelector("h5").innerText);

        const seatItem = document.getElementById('seat-item');
        const seatClass = document.getElementById('seat-class');
        const seatPrice = document.getElementById('seat-price');

        const h1 = document.createElement("h1");
        const h2 = document.createElement("h2");
        const h3 = document.createElement("h3");

        h1.innerText = seat.querySelector("h5").innerText;
        h2.innerText ="Economy"
        h3.innerText ="550"

        seatItem.appendChild(h1);
        seatClass.appendChild(h2);
        seatPrice.appendChild(h3);

        
    });
}

