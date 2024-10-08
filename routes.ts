/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = [
  "/",
  "/auth/new-verification",
  "/api/linkpage/",
  "/api/linkpage/page/get",
  "/api/linkpage/seed",
  "/api/tasks/solana/",
  "/api/tasks/solana/getAssetTokenByWallet",
  "/api/tasks/evm/getAssetTokenByWallet",
  "/link/:handle"
];

export const newProfileRoutes = [
  "/new-profile/your-handle",
  "/new-profile/multi-account-confirmation",
  "/new-profile/create/select-template",
  "/new-profile/create/select-platforms",
  "/new-profile/create/name-image-bio",
  "/new-profile/create/add-links",
  "/new-profile/create/complete",
];

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes = [
  "/auth/login",
  "/auth/web3-login",
  "/auth/magic-link",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
  "/auth/new-password",
  "/auth/login-token-verification"
];

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/account";