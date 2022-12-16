const router = async () => {
    const routes = [
        {path: '/', view: () => console.log('viewing dashboard')},
        {path: '/mapView', 
            view: () => window.initMap = initMap('map', 40.7128, -74.0060, 12)},
        {path: '/settings', view: () => console.log('viewing settings')},
        {path: '/login', view: () => console.log('viewing login')},
        {path: '/register', view: () => console.log('viewing register')}
    ]; 
    // Test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        }
    });
    // Set match to the direcotry name
    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);
    // If no match is found, set match to the dashboard
    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        };
    };

    console.log(match.route.view());


};

document.addEventListener('DOMContentLoaded', () => {
    router();
});

//additional constants


// additional functions
function initMap(elementId, lat, lng, zoom) {
    const map = new google.maps.Map(document.getElementById(elementId), {
      center: {lat: lat, lng: lng},
      zoom: zoom
    });
  }