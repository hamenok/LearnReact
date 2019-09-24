export default class SwapiService {

    _apiBase = `https://swapi.co/api`;

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        const body = await res.json();

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, recived ${res.status}`);
        };
        return body;
    };

    async getAllPeople(){
        const res = await this.getResource(`/people/`);
        return res.results;
    };

    getPerson(id){
        return this.getResource(`/people/${id}/`);
    };

    async getAllPlanets(){
        const res = await this.getResource(`/planets/`);
        return res.results;
    };

    getPlanet(id){
        return this.getResource(`/planets/${id}/`);
    };

    async getAllStarsheeps(){
        const res = await this.getResource(`/starsheeps/`);
        return res.results;
    };

    getStarsheep(id){
        return this.getResource(`/starsheeps/${id}/`);
    };

};


const swapi = new SwapiService();
swapi.getAllPeople().then((people)=>{
    people.forEach((p)=>{
        console.log(p.name);
    })
});