/**
 * @summary
 * Creates a description of a cake.
 *
 * @param flavor The flavor of the cake.
 * @param size How big in inches.
 * @returns A description of the cake.
 *
 * @todo make this actually make a cake
 * @version 0.1.2
 */
function bakeCake(flavor: string, size: number) {
  return `Cake of flavor ${flavor} and size ${size}`;
}

bakeCake();
