import { Business } from "./Business.js";
import { useBusinesses } from "./BusinessProvider.js";

const contentTarget = document.querySelector(".businessesContainer");

export const BusinessList = () => {
    const businessArray = useBusinesses()
    contentTarget.innerHTML = "<h1>Active Businesses</h1>"

    businessArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += Business(businessObject)
        }
    )
}