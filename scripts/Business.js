export const Business = (business) => {
    return `
    <section class="business">
        <h3 class="business__name">${business.companyName}</h3>
            <p>${business.addressFullStreet}</p>
            <p>${business.addressCity}, ${business.addressStateCode} ${business.addressZipCode}</p>
    </section>
    `
}