class Fighter {
	
  constructor(name = 'defaultFighter', power = 10, health = 30) {
    this.name = name;
    this.power = power;
    this.health = health;
  }
  
  setDamage(damage) {
    if (this.health > damage) {
      this.health = this.health - damage;
    } else {
      this.health = 0;
    };
    let damageMessage = `${this.name} health: ${this.health}`;
    console.log(damageMessage);   
  }
  
  hit(enemy, point) {
    const damage = point * this.power;
    enemy.setDamage(damage);
  }
}

class ImprovedFighter extends Fighter {
  constructor(name = 'improvedFighter', power = 15, health = 25) {
    super(name, power, health);
  }
  
  doubleHit(enemy, point) {
    super.hit(enemy, point*2);
  }
}



const fight = (fighter, improvedFighter, ...points) => {
  let n = points.length;
  let currentFighter = null, enemy = null;
  for (let i=0; i<n; i++) {
    if (i%2 === 0 ) {
      currentFighter = fighter;
      enemy = improvedFighter;
    } else {
      currentFighter = improvedFighter;
      enemy = fighter;
    }
    currentFighter.hit(enemy, points[i]);
    if (enemy.health === 0) {
      console.log(`${currentFighter.name} wins!`);
      return;
    }
  }
  console.log('Everyone is alive - draw!');
  return;
}

let fighter = new Fighter();
let improvedFighter = new ImprovedFighter();

fight(fighter, improvedFighter, 1, 1, 2, 1);
