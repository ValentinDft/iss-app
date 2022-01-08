export async function getPosition() {
    const requete = await fetch("http://api.open-notify.org/iss-now.json")
    return requete.json()
}