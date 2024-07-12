// 'before-launch' | 'early-access' | 'launched'
export const MODE = 'early-access';

export const FIRST_PURCHASE_BLOCK_ID = 'purchase-row';

// Countries that use a flat sales tax instead of VAT (Value-
// Added Tax). It affects how I display prices.
export const SALES_TAX_COUNTRIES = ['CA', 'US'];

export const COLORS = {
    text: 'hsl(0deg, 0%, 100%)',
    background: 'hsl(274deg 16% 8%)',
    blurredBackground: 'hsla(210deg, 30%, 8%, 0.85)',
    primary: 'hsl(333deg, 100%, 52%)',
    secondary: 'hsl(230deg, 92%, 63%)',
    tertiary: 'hsl(53deg, 100%, 50%)',
    decorative: 'hsl(200deg, 50%, 60%)',
    muted: 'hsl(210deg, 38%, 15%)',
    mutedBackground: 'hsla(210deg, 38%, 15%, 0.85)',
    error: 'hsl(340deg, 95%, 60%)',
    errorBackground: 'hsla(340deg, 95%, 43%, 0.1)',
    success: 'hsl(160deg, 100%, 40%)',
    successBackground: 'hsla(160deg, 100%, 40%, 0.1)',
    alert: 'hsl(30deg, 100%, 50%)',
    alertBackground: 'hsla(38deg, 100%, 50%, 0.1)',
    venn: ['hsl(250deg, 100%, 50%)', 'hsl(175deg, 100%, 50%)'],
    gray: {
        300: 'hsl(223deg, 5%, 30%)',
        // Accessible:
        500: 'hsl(223deg, 5%, 50%)',
        700: 'hsl(223deg, 5%, 60%)',
    },
    buy: 'hsl(333deg 100% 45%)',
    buyShadow: 'hsl(333deg 100% 40%)',
};

export const GRADIENTS = {
    buy: `linear-gradient(
    245deg,
    hsl(333deg 100% 52%) 5%,
    hsl(333deg 100% 40%) 90%
  )`,
};

export const BREAKPOINT_SIZES = {
    xs: 320,
    sm: 563,
    md: 768,
    lg: 1024,
    xl: 1440,
};

export const BREAKPOINTS = {
    xs: `(max-width: ${BREAKPOINT_SIZES.xs}px)`,
    sm: `(min-width: ${BREAKPOINT_SIZES.xs}px and max-width: ${BREAKPOINT_SIZES.sm}px)`,
    md: `(min-width: ${BREAKPOINT_SIZES.sm}px and max-width: ${BREAKPOINT_SIZES.md}px)`,
    lg: `(min-width: ${BREAKPOINT_SIZES.md}px and max-width: ${BREAKPOINT_SIZES.lg}px)`,
    xl: `(min-width: ${BREAKPOINT_SIZES.lg}px and max-width: ${BREAKPOINT_SIZES.xl}px)`,
    xsAndSmaller: `(max-width: ${BREAKPOINT_SIZES.xs}px)`,
    smAndSmaller: `(max-width: ${BREAKPOINT_SIZES.sm}px)`,
    mdAndSmaller: `(max-width: ${BREAKPOINT_SIZES.md}px)`,
    lgAndSmaller: `(max-width: ${BREAKPOINT_SIZES.lg}px)`,
    xlAndSmaller: `(max-width: ${BREAKPOINT_SIZES.xl}px)`,
    xsAndLarger: `(min-width: ${BREAKPOINT_SIZES.xs + 1}px)`,
    smAndLarger: `(min-width: ${BREAKPOINT_SIZES.sm + 1}px)`,
    mdAndLarger: `(min-width: ${BREAKPOINT_SIZES.md + 1}px)`,
    lgAndLarger: `(min-width: ${BREAKPOINT_SIZES.lg + 1}px)`,
    xlAndLarger: `(min-width: ${BREAKPOINT_SIZES.xl + 1}px)`,
    mobile: `(max-width: ${BREAKPOINT_SIZES.md}px)`,
    desktop: `(min-width: ${BREAKPOINT_SIZES.md + 1}px)`,
};

export const TIGHT_SPRING = {
    tension: 450,
    friction: 25,
};

const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i;

const userAgent =
    typeof window !== 'undefined' ? window.navigator.userAgent : 'node';

export const IS_MOBILE_USER_AGENT = mobileRegex.test(userAgent);

export const THEME = {
    breakpoints: BREAKPOINTS,
};

export const COURSE_PLATFORM_ROOT =
    process.env.NODE_ENV === 'production'
        ? 'https://courses.joshwcomeau.com'
        : 'http://localhost:3000';

export const API_ROOT = `${COURSE_PLATFORM_ROOT}/api`;

export const VISITOR_ID_KEY = 'visitor-id';

export const PADDLE_ENVIRONMENT =
    process.env.NODE_ENV === 'production' ? 'production' : 'sandbox';

export const PADDLE_VENDOR_ID =
    PADDLE_ENVIRONMENT === 'production' ? 126013 : 1046;

export const PADDLE_API_ROOT =
    PADDLE_ENVIRONMENT === 'production'
        ? 'https://checkout.paddle.com/api'
        : 'https://sandbox-checkout.paddle.com/api';
