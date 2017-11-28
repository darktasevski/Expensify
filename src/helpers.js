export function formatPrice(cents) {
    return `$${(cents / 1000)
        .toFixed(2)
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}
