const character = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 100,
    image: "./snortleblat.webp",
    
    attacked() {
        if (this.health <= 0) return;
        this.health = Math.max(0, this.health - 20);
        render();
        if (this.health === 0) {
            alert("Character is dead");
        }
    },

    levelUp() {
        this.level += 1;
        render();
    }
};

const els = {
    name: document.getElementById("charName"),
    class: document.getElementById("charClass"),
    level: document.getElementById("charLevel"),
    health: document.getElementById("charHealth"),
    image: document.getElementById("charImage"),
    attackBtn: document.getElementById("attackBtn"),
    levelUpBtn: document.getElementById("levelUpBtn"),
};

function render() {
    els.name.textContent = character.name;
    els.class.textContent = character.class;
    els.level.textContent = character.level;
    els.health.textContent = character.health;
    els.image.src = character.image;

    els.attackBtn.disabled = character.health === 0;
}

els.attackBtn.addEventListener("click", () => {
    character.attacked();
});

els.levelUpBtn.addEventListener("click", () => {
    character.levelUp();
});
