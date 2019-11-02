function Weapon(config) {
  return {
    name: config.name,
    damage: config.damage,
    attackType: config.attackType,
  };
}

module.exports = Weapon;
