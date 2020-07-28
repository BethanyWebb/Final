export function getJWT() {
    return localStorage.getItem('jwt').split('Bearer token: ')[1];
}
