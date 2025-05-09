// Array of events
const events = [
    {
        id: 1,
        name: "Fulham V Everton",
        date: "2025-05-10",
        location: "Craven Cottage",
        description: "Fulham's home game against Everton.",
        image: "../images/fulham-everton.png",
        category: "1"
    },
    {
        id: 2,
        name: "Going Global Business Networking Event",
        date: "2025-08-12",
        location: "Hyde Park",
        description: "The Going Global Business Networking Event in London brings together professionals, investment agencies, and global expansion experts for panel discussions and networking focused on international markets.",
        image: "../images/networking-event.avif",
        category: "4"
    },
    {
        id: 3,
        name: "National History Museum Tour",
        date: "2025-05-23",
        location: "South Kensington",
        description: "A Natural History Museum tour highlights the museum's most famous exhibits, like dinosaur skeletons and the blue whale, while sharing fascinating facts and stories about the natural world. It's a great way to discover the museum's key attractions in a short time.",
        image: "../images/national-history-museum.jpg",
        category: "2"
    },
    {
        id: 4,
        name: "The London Marathon",
        date: "2025-04-27",
        location: "Greenwich Park to Buckingham Palace",
        description: "World-famous 26.2-mile race that takes place annually through the streets of London, starting in Blackheath and finishing at The Mall near Buckingham Palace.",
        image: "../images/london-marathon.jpg",
        category: "1"
    }
];

function searchEvents(){
    const nameQuery = document.getElementById("eventName").value;
    const fromDateQuery = document.getElementById("fromDate").value;
    const toDateQuery = document.getElementById("toDate").value;
    const categoryQuery = document.getElementById("categorySelect").value;

    //For each event card
    eventCards.forEach((card, index) => {
        const event = events[index];

        //Is namequery empty or does event name include part of name query? If so then nameMatch is true
        const nameMatch = nameQuery === "" || event.name.toUpperCase().includes(nameQuery);

        /*

        // Date checks
        let dateMatch = true;
        if (fromDateQuery && event.date < fromDateQuery) {
            dateMatch = false;
        }
        if (toDateQuery && event.date > toDateQuery) {
            dateMatch = false;
        }

        // Category check - note that the default option value is "Select Event Category"
        const categoryMatch = categoryQuery === "Select Event Category" || categoryQuery === event.category;

        // If all criteria match, show the card, otherwise hide it
        if (nameMatch && dateMatch && categoryMatch) {
            card.classList.remove("d-none");
            foundMatch = true;
        } else {
            card.classList.add("d-none");
        }

         */


    });

}

function getEvents(){
    //Make the results container accessible
    const resultsContainer = document.querySelector(".container.pt-5");
    //Get the events cards accessible in the JS, put them into an array
    eventCards = Array.from(resultsContainer.querySelectorAll(".card.shadow"));
}