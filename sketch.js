// ─── Constants ────────────────────────────────────────────────────────────────
const GRAVITY       = 0.6;
const JUMP_FORCE    = -14;
const GROUND_RATIO  = 0.78;
const TOTAL_DIST    = 6000;   // px scrolled to win
const BASE_SPEED    = 3;
const MAX_SPEED     = 5.5;
const INVULN_FRAMES = 90;     // ~1.5 s at 60 fps

const FRANCHISES = ["McDonald's", "Starbucks", "Subway", "Walmart", "Amazon Go"];
const GOOD_ITEMS = ["Farmers Market", "Community Garden", "Co-op Grocery", "Local Bakery"];

// ─── State ────────────────────────────────────────────────────────────────────
let charImg;
let gameState = 'START'; // START | PLAYING | GAMEOVER | WIN

let ch;           // character object
let groundY;
let scrollDist;
let scrollSpeed;
let obstacles;
let hearts;
let invulnTimer;
let spawnTimer;
let nextSpawnIn;

// ─── p5 lifecycle ─────────────────────────────────────────────────────────────
function preload() {
  charImg = loadImage('search.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('monospace');
  initGame();
}

function draw() {
  switch (gameState) {
    case 'START':    drawStart();    break;
    case 'PLAYING':  updateGame(); drawGame(); break;
    case 'GAMEOVER': drawGameOver(); break;
    case 'WIN':      drawWin();      break;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  recalcLayout();
}

// ─── Init / layout ────────────────────────────────────────────────────────────
function initGame() {
  recalcLayout();
  scrollDist  = 0;
  scrollSpeed = BASE_SPEED;
  obstacles   = [];
  hearts      = 3;
  invulnTimer = 0;
  spawnTimer  = 0;
  nextSpawnIn = 80;
}

function recalcLayout() {
  groundY   = height * GROUND_RATIO;
  let unit  = min(width, height) * 0.09;

  if (!ch) ch = {};
  ch.w  = unit;
  ch.h  = unit;
  ch.x  = width * 0.18;

  // Only reset y if we haven't started or character is on the ground
  if (gameState === 'START' || !ch.vy || ch.onGround) {
    ch.y  = groundY - ch.h;
    ch.vy = 0;
    ch.onGround = true;
  }
}

// ─── Game update ──────────────────────────────────────────────────────────────
function updateGame() {
  // Physics
  ch.vy += GRAVITY;
  ch.y  += ch.vy;

  if (ch.y >= groundY - ch.h) {
    ch.y        = groundY - ch.h;
    ch.vy       = 0;
    ch.onGround = true;
  } else {
    ch.onGround = false;
  }

  // Scroll
  scrollSpeed  = lerp(scrollSpeed, BASE_SPEED + (scrollDist / TOTAL_DIST) * (MAX_SPEED - BASE_SPEED), 0.01);
  scrollDist  += scrollSpeed;

  if (scrollDist >= TOTAL_DIST) {
    gameState = 'WIN';
    return;
  }

  // Spawn obstacles
  spawnTimer++;
  if (spawnTimer >= nextSpawnIn) {
    spawnObstacle();
    spawnTimer  = 0;
    nextSpawnIn = floor(random(70, 140));
  }

  // Update obstacles
  for (let i = obstacles.length - 1; i >= 0; i--) {
    let o = obstacles[i];
    o.x -= scrollSpeed;

    if (o.x + o.w < 0) {
      obstacles.splice(i, 1);
      continue;
    }

    if (invulnTimer <= 0 && rectsOverlap(ch, o)) {
      if (o.type === 'franchise') {
        hearts--;
        invulnTimer = INVULN_FRAMES;
        if (hearts <= 0) { hearts = 0; gameState = 'GAMEOVER'; return; }
      } else {
        hearts = min(hearts + 1, 3);
        obstacles.splice(i, 1);
        continue;
      }
    }
  }

  if (invulnTimer > 0) invulnTimer--;
}

function spawnObstacle() {
  let unit  = ch.w;
  let isFranchise = random() < 0.6;

  if (isFranchise) {
    let h = unit * 1.4;
    obstacles.push({
      type:  'franchise',
      x:     width + unit,
      y:     groundY - h,
      w:     unit * 1.1,
      h:     h,
      label: random(FRANCHISES),
    });
  } else {
    // Place at ~65% of max jump height so it's reachable but requires a jump
    let maxJumpH = (JUMP_FORCE * JUMP_FORCE) / (2 * GRAVITY); // ≈ 163 px
    let elevY    = groundY - ch.h - maxJumpH * 0.65;
    let hw       = unit * 1.1;
    let hh       = unit * 0.9;
    obstacles.push({
      type:  'market',
      x:     width + hw,
      y:     elevY,
      w:     hw,
      h:     hh,
      label: random(GOOD_ITEMS),
    });
  }
}

function rectsOverlap(a, b) {
  // Shrink hitbox slightly for forgiveness
  let margin = a.w * 0.15;
  return (
    a.x + margin < b.x + b.w &&
    a.x + a.w - margin > b.x &&
    a.y + margin < b.y + b.h &&
    a.y + a.h - margin > b.y
  );
}

// ─── Drawing ──────────────────────────────────────────────────────────────────
function drawGame() {
  // Sky
  background(135, 206, 235);

  // Ground
  noStroke();
  fill(80, 160, 80);
  rect(0, groundY, width, height - groundY);

  // Ground line
  stroke(60, 120, 60);
  strokeWeight(2);
  line(0, groundY, width, groundY);
  noStroke();

  // Obstacles
  for (let o of obstacles) {
    drawObstacle(o);
  }

  // Character (flicker when invulnerable)
  if (invulnTimer <= 0 || frameCount % 6 < 3) {
    image(charImg, ch.x, ch.y, ch.w, ch.h);
  }

  // HUD
  drawHearts();
  drawProgress();
}

function drawObstacle(o) {
  let sz = min(width, height);

  if (o.type === 'franchise') {
    // Red building
    fill(200, 50, 50);
    noStroke();
    rect(o.x, o.y, o.w, o.h, 3);
    // Dark roof
    fill(140, 30, 30);
    rect(o.x, o.y, o.w, o.h * 0.15, 3);
    // Label
    fill(255);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(max(9, sz * 0.022));
    text(o.label, o.x + o.w / 2, o.y + o.h * 0.58);
  } else {
    // Green market stall
    fill(50, 180, 90);
    noStroke();
    rect(o.x, o.y, o.w, o.h, 4);
    // Canopy stripe
    fill(80, 210, 120);
    rect(o.x, o.y, o.w, o.h * 0.2, 4);
    // ♥ indicator
    fill(255, 220, 50);
    textAlign(CENTER, TOP);
    textSize(max(10, sz * 0.025));
    text('+♥', o.x + o.w / 2, o.y - max(14, sz * 0.03));
    // Label
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(max(8, sz * 0.019));
    text(o.label, o.x + o.w / 2, o.y + o.h * 0.6);
  }
}

function drawHearts() {
  let sz      = min(width, height);
  let hSize   = max(18, sz * 0.045);
  let padding = 12;

  textAlign(LEFT, TOP);
  for (let i = 0; i < 3; i++) {
    fill(i < hearts ? color(240, 60, 60) : color(80, 80, 80));
    noStroke();
    textSize(hSize);
    text('♥', padding + i * (hSize + 4), padding);
  }
}

function drawProgress() {
  let barW    = width * 0.45;
  let barH    = max(8, min(width, height) * 0.014);
  let barX    = (width - barW) / 2;
  let barY    = 12;
  let prog    = constrain(scrollDist / TOTAL_DIST, 0, 1);

  noStroke();
  // Track
  fill(60, 60, 60, 180);
  rect(barX, barY, barW, barH, barH / 2);
  // Fill
  fill(255, 200, 50);
  rect(barX, barY, barW * prog, barH, barH / 2);

  // Endpoint flag
  fill(255);
  textAlign(RIGHT, CENTER);
  textSize(max(10, barH * 1.4));
  text('🏁', barX + barW + 4, barY + barH / 2);
}

// ─── Screens ──────────────────────────────────────────────────────────────────
function drawStart() {
  background(135, 206, 235);

  // Ground
  noStroke();
  fill(80, 160, 80);
  rect(0, groundY, width, height - groundY);

  // Character preview
  image(charImg, ch.x, ch.y, ch.w, ch.h);

  let sz = min(width, height);
  textAlign(CENTER, CENTER);
  noStroke();

  fill(30, 30, 30, 180);
  rect(width / 2 - sz * 0.42, height * 0.22, sz * 0.84, sz * 0.46, 16);

  fill(255);
  textSize(sz * 0.065);
  text('SEARCH: The Game', width / 2, height * 0.32);

  textSize(sz * 0.028);
  fill(220, 220, 220);
  text('Jump over franchise stores to avoid losing hearts.', width / 2, height * 0.43);
  text('Collect farmers markets & local spots to gain hearts.', width / 2, height * 0.49);

  textSize(sz * 0.038);
  fill(255, 220, 50);
  text('Tap or click to start', width / 2, height * 0.58);
}

function drawGameOver() {
  background(40, 10, 10);

  let sz = min(width, height);
  textAlign(CENTER, CENTER);
  noStroke();

  fill(220, 60, 60);
  textSize(sz * 0.08);
  text('GAME OVER', width / 2, height * 0.38);

  fill(200, 180, 180);
  textSize(sz * 0.032);
  text('The franchises won this time.', width / 2, height * 0.52);

  fill(255, 220, 50);
  textSize(sz * 0.038);
  text('Tap or click to try again', width / 2, height * 0.64);
}

function drawWin() {
  background(20, 80, 40);

  let sz = min(width, height);
  textAlign(CENTER, CENTER);
  noStroke();

  fill(100, 220, 120);
  textSize(sz * 0.075);
  text('You made it!', width / 2, height * 0.35);

  fill(200, 240, 200);
  textSize(sz * 0.032);
  text('Your community journey is complete.', width / 2, height * 0.49);
  text('Local always wins. 🌱', width / 2, height * 0.56);

  fill(255, 220, 50);
  textSize(sz * 0.038);
  text('Tap or click to play again', width / 2, height * 0.68);
}

// ─── Input ────────────────────────────────────────────────────────────────────
function mousePressed() {
  handleInput();
}

function touchStarted() {
  handleInput();
  return false; // prevent default browser scroll/zoom
}

function handleInput() {
  if (gameState === 'START') {
    gameState = 'PLAYING';
  } else if (gameState === 'PLAYING') {
    if (ch.onGround) {
      ch.vy       = JUMP_FORCE;
      ch.onGround = false;
    }
  } else if (gameState === 'GAMEOVER' || gameState === 'WIN') {
    initGame();
    gameState = 'PLAYING';
  }
}
