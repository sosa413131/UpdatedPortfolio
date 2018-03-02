import axios from "axios";

// Export an object containing methods we'll use for accessing the API

export default {
    getProjects: function () {
        return axios.get("/api/projects");
    },
    postContact: function (contact) {
        axios.post("/api/postcontact", {
            // id: ,
            name: contact.name,
            email: contact.email,
            message: contact.message
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
};
