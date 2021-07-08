const planePrice = 100;
const shipPrice = 150;
const busPrice = 50;
let planeTickets = 0;
let busTickets = 0;
let shipTickets = 0;
let totalTickets = 0;

           // PLANE BUTTONS
$('#increase-plane').click(function() {
    planeTickets ++;
    $('#plane-tickets').html(planeTickets);
    $('#plane-price').html((planeTickets * planePrice) + "$");
})
$('#decrease-plane').click(function() {
    planeTickets --;
    $('#plane-tickets').html(planeTickets);
    $('#plane-price').html((planeTickets * planePrice) + "$");
})

           // BUS BUTTONS
$('#increase-bus').click(function() {
    busTickets ++;
    $('#bus-tickets').html(busTickets);
    $('#bus-price').html((busTickets * busPrice) + "$");
})
$('#decrease-bus').click(function() {
    busTickets --;
    $('#bus-tickets').html(busTickets);
    $('#bus-price').html((busTickets * busPrice) + "$");
})

           // SHIP BUTTONS
$('#increase-ship').click(function() {
    shipTickets ++;
    $('#ship-tickets').html(shipTickets);
    $('#ship-price').html((shipTickets * shipPrice) + "$");
})
$('#decrease-ship').click(function() {
    shipTickets --;
    $('#ship-tickets').html(shipTickets);
    $('#ship-price').html((shipTickets * shipPrice) + "$");
})

        // classes 
const vehicle = class {
    constructor(from, to) {
        this.from = from;
        this.to = to;
        totalTickets = planeTickets + busTickets + shipTickets;
    }

    static totalTraveler() {
        return `${totalTickets} people got tickets in total.`;
    }
}

class plane extends vehicle {
    constructor(from, to, $class) {
        super(from, to);
        this.$class = $class;
    }

    static totalTraveler() {
        return `${planeTickets} people got plane tickets in total.`;
    }

    recall() {
        return `Hello, you will fly from ${this.from} to ${this.to} and 
        your class is ${this.$class}. Have a nice trip.`;
    }
}

class ship extends vehicle {
    constructor(from, to, ship) {
        super(from, to);
        this.ship = ship;
    }

    static totalTraveler() {
        return `${shipTickets} people got ship tickets in total.`;
    }

    recall() {
        return `Hello, you will go to ${this.to} from ${this.from} and 
        your cruise ship is ${this.ship}. Have a nice trip.`;
    }
}

class bus extends vehicle {
    constructor(from, to) {
        super(from, to);
    }

    static totalTraveler() {
        return `${busTickets} people got bus tickets in total.`;
    }

    recall() {
        return `Hello, you will go to ${this.to} from ${this.from}. Have a nice trip.`;
    }
}

        // hiding the content of the other tabs
$('.tab li:first').addClass('aktif');
$('.tab-content').filter(':not(:first)').hide();
$('.tab li').click(function() {
    $(".tab li").removeClass("aktif");
    $(this).addClass('aktif');
    $('.tab-content').hide();
    $('.tab-content').eq($(this).index()).fadeIn("slow");
})

        // after click complete button
$('.complete').click(function() {
    const fromPlane = $("[name=from-plane]").val();
    const toPlane = $("[name=to-plane]").val();
    const classPlane = $("[name=class-plane]").val();

    const fromBus = $("[name=from-bus]").val();
    const toBus = $("[name=to-bus]").val();

    const fromShip = $("[name=from-ship]").val();
    const toShip = $("[name=to-ship]").val();
    const classShip = $("[name=cruise-ship]").val();

    const checkTab1 = $('#tab1').hasClass('aktif');
    const checkTab2 = $('#tab2').hasClass('aktif');
    const toReturn = "Also, If you want to give back your tickets, you can do this action down below.";
    
    $('.contents').empty();
    $("<div/>", {
        id: 'some-id'
    }).appendTo('.contents');

    if (checkTab1) {
        for (let i = 0; i < planeTickets; i++) {
            const planeClass = new plane(fromPlane, toPlane, classPlane); 
            var getInfoPlane = planeClass.recall();  
        }
        $('<p/>', {
            "class": "p", 
            text: getInfoPlane + " " + toReturn
        }).appendTo('#some-id'); 

    } else if (checkTab2) {
        for (let i = 0; i < busTickets; i++) {
            const busClass = new bus(fromBus, toBus);
            var getInfoBus = busClass.recall();  
        }
        $('<p/>', {
            "class": "p", 
            text: getInfoBus + " " + toReturn
        }).appendTo('#some-id');

    } else {
        for (let i = 0; i < shipTickets; i++) {
            const shipClass = new ship(fromShip, toShip, classShip); 
            var getInfoShip = shipClass.recall();            
        }
        $('<p/>', {
            "class": "p", 
            text: getInfoShip + " " + toReturn
        }).appendTo('#some-id');
    }
})