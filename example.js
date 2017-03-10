import { mjolnir } from "./mjolnir.js"

mjolnir({
    url: "mypage.php",
    type: "GET",
    data: {
        name: "Thor",
        weapon: "Hammer",
        nationality: "Asgard"
    },

    // Callback Function
    success: function(data) {
        alert(data);
    }
});
