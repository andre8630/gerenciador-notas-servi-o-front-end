const sizes = {
    mobile: "768px",
    tablet: "1024px",
    desktop: "1280px"
};

export const mobile = (styles) => ({
    [`@media (max-width: ${sizes.mobile})`]: styles
});

export const tablet = (styles) => ({
    [`@media (max-width: ${sizes.tablet})`]: styles
});

export const desktop = (styles) => ({
    [`@media (max-width: ${sizes.desktop})`]: styles
})