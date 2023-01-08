/**
 * Theme colors
 */

export const colors = {
	white: '#fff',
	red: '#ef5350',
	black: '#000',
	yellow: '#feca1b',
	blue: '#3761a8',
	green: '#0f6e3f',
	gray: '#999999',
	green_clear: '#7fb19a',
	background_clear: '#f2f6f8',
	background_dark: '#242424',
	background_gray: '#5d5e5f',
	text_dark: '#000000',
	text_clear: '#ffffff',
	text_gray: '#999999',
	box_shadow:
		'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
};

/**
 * Center content using flexbox
 */

export const centerContent = () => `
  display: flex;
	justify-content: center;	
	align-items: center;
`;

/**
 * Simple fade-in animation
 */

export const fadeIn = () => `
	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;

/**
 * A map of breakpoints
 */

export const sizes = {
	mobileS: '320px',
	mobileM: '375px',
	mobileL: '425px',
	tablet: '768px',
	laptop: '1024px',
	laptopL: '1440px',
	desktop: '2560px',
};

export const devices = {
	mobileS: `(min-width: ${sizes.mobileS})`,
	mobileM: `(min-width: ${sizes.mobileM})`,
	mobileL: `(min-width: ${sizes.mobileL})`,
	tablet: `(min-width: ${sizes.tablet})`,
	laptop: `(min-width: ${sizes.laptop})`,
	laptopL: `(min-width: ${sizes.laptopL})`,
	desktop: `(min-width: ${sizes.desktop})`,
	desktopL: `(min-width: ${sizes.desktop})`,
};
