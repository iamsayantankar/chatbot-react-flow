

// for normal message
const normalMessageBody = {
    "preview_url": true, // Set as per input
    "body": "As requested, here/''s the link to our latest product: https://www.betazeninfotech.com/" // Set as per input
};

// Button Reply Message
const buttonReplyMessageBody = {
    "type": "button",
    "header": {
        "type": "text",
        "text": "Workshop Details" // Set as per input
    },
    "body": {
        "text": "<BODY_TEXT>" // Set as per input
    },
    "footer": {
        "text": "<FOOTER_TEXT>" // Set as per input
    },
    "action": {
        "buttons": [
            // can button set up to 3
            {
                "type": "reply",
                "reply": {
                    "id": "change-button",
                    "title": "Change" // Set as per input
                }
            },
            {
                "type": "reply",
                "reply": {
                    "id": "cancel-button",
                    "title": "Cancel" // Set as per input
                }
            }
        ]
    }
};

// Button Url Message
const buttonUrlMessageBody = {
    "type": "cta_url",
    "header": {
        "type": "text",
        "text": "Workshop Details" // Set as per input
    },
    "body": {
        "text": "Tap the button below to see available dates." // Set as per input
    },
    "footer": {
        "text": "Dates subject to change." // Set as per input
    },
    "action": {
        "name": "cta_url",
        "parameters": {
            "display_text": "See Dates", // Set as per input
            "url": "https://www.luckyshrub.com?clickID=kqDGWd24Q5TRwoEQTICY7W1JKoXvaZOXWAS7h1P76s0R7Paec4" // Set as per input
        }
    }
};

// Location Request Message
const locationRequestMessageBody = {
    "type": "location_request_message",
    "body": {
        "text": "<BODY_TEXT>" // Set as per input
    },
    "action": {
        "name": "send_location"
    }
};

// Address Message
const addressMessageBody = {
    "name": "address_message",
    "parameters": {
        "country": "IN", // Set as per input
        "saved_addresses": [
            {
                "id": "address1",
                "value": {
                    "name": "CUSTOMER_NAME", // Set as per input
                    "phone_number": "+91xxxxxxxxxx", // Set as per input
                    "in_pin_code": "400063",
                    "floor_number": "8", // Set as per input
                    "building_name": "", // Set as per input
                    "address": "Wing A, Cello Triumph,IB Patel Rd", // Set as per input
                    "landmark_area": "Goregaon", // Set as per input
                    "city": "Mumbai" // Set as per input
                }
            }
        ]
    }
};


// Location Message
const locationMessageBody = {
    "latitude": "37.44216251868683", // Set as per input
    "longitude": "-122.16153582049394", // Set as per input
    "name": "Sayantan Kar", // Set as per input
    "address": "101 Forest Ave, Palo Alto, CA 94301" // Set as per input
};

// Document Message
const documentMessageBody = {
    "link": "https://demofile.thewaapi.com/a.pdf", // Set as per input
    "caption": "<DOCUMENT_CAPTION>", // Set as per input
    "filename": "<DOCUMENT_FILENAME>" // Set as per input
};

// Image Message
const imageMessageBody = {
    "link": "https://demofile.thewaapi.com/a.jpg", // Set as per input
    "caption": "The best succulent ever?" // Set as per input
};

// Audio Message
const audioMessageBody = {
    "link": "https://demofile.thewaapi.com/a.mp3" // Set as per input
};

// Video Message
const videoMessageBody = {
    "link": "https://demofile.thewaapi.com/a.mp4", // Set as per input
    "caption": "The best succulent ever?" // Set as per input
};


