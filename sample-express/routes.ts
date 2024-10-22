import fetch from "node-fetch";

const routeHello = (): string => {
    let body = "<h1>Hello World!</h1>";
    body += "<p>Greetings.</p>";
    body += "<p>Warmest regards.</p>";
    return body;
};

const routeAPINames = async (): Promise<string> => {
    const url = "https://www.usemodernfullstack.dev/api/v1/users";
    let data: responseItemType[];
    try {
        const response = await fetch(url);
        data = await response.json() as responseItemType[];
    } catch (error) {
        return "Error!";
    }
    const names = data
        .map((item) => `id: ${item.id}, name: ${item.name}`)
        .join("<br>");
    return names;
};

const routeWeather = (query: WeatherQueryInterface): WeatherDetailType => queryWeatherData(query);

const queryWeatherData = (query: WeatherQueryInterface): WeatherDetailType => {
    return {
        zipcode: query.zipcode,
        weather: "sunny",
        temp: 35
    };
}

export {routeHello, routeAPINames, routeWeather};
