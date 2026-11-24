/**
 * Host half of the 影之刃零 theme bundle.
 *
 * The theme is entirely browser-side: palette overrides, the ink-painting
 * canvas, the blade emblem seats, and the composer palette pill all live in
 * `client.js`. This half exists so the Loader entry, Plugin Manager metadata,
 * and the client bundle have an owner; it registers nothing.
 *
 * @module dsh-theme-phantom-blade-zero
 */

/** Host activation: no Host-side capability, so nothing is registered. */
export function apply() {}
