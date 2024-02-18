
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
        console.log('clicked');
    });
}

