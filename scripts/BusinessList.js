import { Business } from "./Business.js";
import { mfgBusinesses, nyBusinesses, useBusinesses } from "./BusinessProvider.js";


export const BusinessList = () => {
    const contentTarget = document.querySelector(".businessesContainer");
    const businessArray = useBusinesses()
    contentTarget.innerHTML = "<h2>Active Businesses</h2>"

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

const companySearchResultArticle = document.querySelector(".foundCompanies")

document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            /*
                When user presses enter, find the matching business.
                You can use the `.includes()` method strings to
                see if a smaller string is part of a larger string.
            */
            const businessArray = useBusinesses()
            const foundBusiness =
                businessArray.find(business => business.companyName.includes(keyPressEvent.target.value))

            companySearchResultArticle.innerHTML = `
            <section class="business">
                <h3 class="business__name">
                ${foundBusiness.companyName}
                </h3>
                    <p>${foundBusiness.addressFullStreet}</p>
                    <p>${foundBusiness.addressCity}, ${foundBusiness.addressStateCode} ${foundBusiness.addressZipCode}</p>
                </section>
            `;
        }
    });