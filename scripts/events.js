//Hardcoded events data
const events = [
    {
        id: 1,
        name: "Fulham V Everton",
        date: "2025-5-10",
        category: 1,
        location: "Craven Cottage",
        description: "Fulham's home game against Everton.",
        image: "../images/fulham-everton.png"
    },

    {
        id: 2,
        name: "National History Museum Tour",
        date: "2025-5-23",
        category: 2,
        location: "South Kensington",
        description: "A Natural History Museum tour highlights the museum’s most famous exhibits, like dinosaur skeletons and the blue whale, while sharing fascinating facts and stories about the natural world. It’s a great way to discover the museum’s key attractions in a short time.",
        image: "../images/national-history-museum.jpg"
    },

    {
        id: 3,
        name: "The London Marathon",
        date: "2025-4-27",
        category: 1,
        location: "Greenwich Park to Buckingham Palace",
        description: "World-famous 26.2-mile race that takes place annually through the streets of London, starting in Blackheath and finishing at The Mall near Buckingham Palace.",
        image: "../images/london-marathon.jpg"
    },

    {
        id: 4,
        name: "Going Global Business Networking Event",
        date: "2025-8-12",
        category: 4,
        location: "Hyde Park",
        description: "The Going Global Business Networking Event in London brings together professionals, investment agencies, and global expansion experts for panel discussions and networking focused on international markets.",
        image: "../images/networking-event.avif"
    }
]

function searchEvents(){
    const name = document.getElementById("eventName").value;
    const fromDate = document.getElementById("fromDate").value;
    const toDate = document.getElementById("toDate").value;
    const category = document.getElementById("categorySelect").value;

    for (let i=0; i < events.length; i++){
        if (events[i].name.toUpperCase().indexOf(name) > -1){

        }
    }

}