import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
 url: "http://localhost:8080",
 realm: "keyclock-react-auth",
 clientId: "react-app-pkce"
});

export default keycloak;