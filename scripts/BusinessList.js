import { Business } from "./Business.js";
import { mfgBusinesses, nyBusinesses, useBusinesses } from "./BusinessProvider.js";


export const BusinessList = () => {
    const contentTarget = document.querySelector(".businessesContainer");
    const businessArray = useBusinesses()
    contentTarget.innerHTML = "<h1>Active Businesses</h1>"

    businessArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += Business(businessObject)
        }
    )
}


export const nyBusinessList = () => {
    const contentTarget = document.querySelector(".businessList--newYork");
    const nyArray = nyBusinesses
    contentTarget.innerHTML = "<h2>New York Businesses</h2>"

    nyArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += Business(businessObject)
        }
    )
}

export const mfgBusinessList = () => {
    const contentTarget = document.querySelector(".businessList--manufacturing")
    const mfgArray = mfgBusinesses
    contentTarget.innerHTML = "<h2>Manufacturing Businesses"

    mfgBusinesses.forEach(
        (businessObject) => {
            contentTarget.innerHTML += Business(businessObject)
        }
    )
}