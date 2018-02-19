import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
    getProjects: function () {
        return axios.get("/api/projects");
    }
};
