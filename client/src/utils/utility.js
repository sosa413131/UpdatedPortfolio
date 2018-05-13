import axios from "axios";
var shortid = require('shortid');

// Export an object containing methods we'll use for accessing the API

export default {
    getProjects: function () {
        return axios.get("/api/projects");
    },
    getSocialMedia: function () {
        return axios.get("/api/socialmedia");
    },
    postContact: function (contact) {
        axios.post("/api/postcontact", {
            name: contact.name,
            email: contact.email,
            message: contact.message,
            messageID: shortid.generate()

        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

};
