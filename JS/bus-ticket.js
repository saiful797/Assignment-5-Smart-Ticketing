
// When clicked Buy Ticket then get seats section for booking 
const buyTickets = document.getElementById('buy-tickets');
const busSeats = document.getElementById('bus-seats');

buyTickets.addEventListener('click', function(){

    busSeats.scrollIntoView({ behavior: 'smooth' });
    
});

//Select seats and Buy seats

let totalPrice = 0;
let totalSeat = 0;
let counter = 0;
let seats = [];

const getButtonByClassName = document.querySelectorAll(".btn-seat");
// console.log(getButtonByClassName);

for(let i=0; i<getButtonByClassName.length; i++){
    const seat = getButtonByClassName[i];

    seat.addEventListener('click', function(){

        const seatItem = document.getElementById('seat-item');
        const seatClass = document.getElementById('seat-class');
        const seatPrice = document.getElementById('seat-price');
        const inTotalPrice = document.getElementById('total-price');
        const seatCount = document.getElementById('seat-count');
        const grandtotal = document.getElementById('grand-total');

        //hide graySet and show green seat
        const graySeat = document.getElementById('selected-seatGray');
        const greenSeat = document.getElementById('selected-seatGreen')

        graySeat.classList.add('hidden');
        greenSeat.classList.remove('hidden');


        const h1 = document.createElement("h1");
        const h2 = document.createElement("h2");
        const h3 = document.createElement("h3");
        
        let findSeat = seats.indexOf(seat.innerText);
        
        if(totalSeat === 4){
            seat.disabled = true;
            seat.style.backgroundColor = "";
            alert("Your limit is completed!");
        }

        else{
            if(findSeat === -1){
                totalSeat += 1;
                seats.push(seat.innerText);
    
                h1.innerText = seat.querySelector("h5").innerText;
                // Change the background color when clicked
                seat.style.backgroundColor = "#1DD100";
            
                h2.innerText ="Economy";
                h3.innerText ="550";
                totalPrice += 550;
            }
        }
        inTotalPrice.innerText = totalPrice;
        seatCount.innerText = totalSeat;
        grandtotal.innerText = totalPrice;


        seatItem.appendChild(h1);
        seatClass.appendChild(h2);
        seatPrice.appendChild(h3);
    });

}





