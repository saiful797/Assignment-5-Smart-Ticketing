
// When clicked Buy Ticket then get seats section for booking 
const buyTickets = document.getElementById('buy-tickets');
const busSeats = document.getElementById('bus-seats');

buyTickets.addEventListener('click', function(){

    busSeats.scrollIntoView({ behavior: 'smooth' });
    
});