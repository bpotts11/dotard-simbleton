export const Business = (business) => {
    return `
    <section class="business">
        <h2 class="business__name">${business.companyName}</h2>
            <p>${business.addressFullStreet}</p>
            <p>${business.addressCity}, ${business.addressStateCode} ${business.addressZipCode}</p>
    </section>
    `
}


