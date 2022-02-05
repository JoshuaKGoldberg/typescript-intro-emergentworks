// https://jsdoc.app/

/**
 * @summary
 * Creates a description of a cake.
 *
 * @param {string} flavor The flavor of the cake.
 * @param {number} size How big in inches.
 * @returns A description of the cake.
 *
 * @todo make this actually make a cake
 * @version 0.1.2
 */
function bakeCake(flavor, size) {
  return `Cake of flavor ${flavor} and size ${size}`;
}

/** My favorite cake flavor
 * @type {string}
 */
let myCake;

myCake = bakeCake("vanilla", 12);
