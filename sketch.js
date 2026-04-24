// ─── Pixel Art Sprite Data ────────────────────────────────────────────────────

// Franchise building (fast food style) — 16 × 16
const FC = [
  null,
  [255, 205,   0],  // 1  gold
  [200, 148,   0],  // 2  dark gold (arch shadow)
  [210,  42,  42],  // 3  red
  [155,  20,  20],  // 4  dark red
  [175, 215, 248],  // 5  window glass
  [ 28,  28,  32],  // 6  shadow / ground line
  [242, 242, 252],  // 7  white (door panel)
];
const FS = [
  [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0],  //  0  sign top
  [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],  //  1
  [0,0,1,2,2,0,0,0,0,0,0,2,2,1,0,0],  //  2  golden arches outline
  [0,0,1,2,0,2,0,0,0,0,2,0,2,1,0,0],  //  3
  [0,0,1,2,0,2,2,0,0,2,2,0,2,1,0,0],  //  4
  [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],  //  5  sign bottom
  [0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0],  //  6  building top
  [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],  //  7
  [3,3,5,5,5,3,3,3,3,3,5,5,5,3,3,3],  //  8  windows
  [3,3,5,5,5,3,3,3,3,3,5,5,5,3,3,3],  //  9
  [3,3,5,5,5,3,3,3,3,3,5,5,5,3,3,3],  // 10
  [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],  // 11
  [3,3,3,3,6,6,6,6,6,6,6,6,3,3,3,3],  // 12  door frame
  [3,3,3,3,6,7,7,7,7,7,7,6,3,3,3,3],  // 13  door panel
  [3,3,3,3,6,7,7,7,7,7,7,6,3,3,3,3],  // 14
  [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],  // 15  ground shadow
];

// Farmers market stall — 16 × 13
const MC = [
  null,
  [ 45, 150,  55],  // 1  dark green
  [100, 205,  75],  // 2  light green
  [252, 252, 252],  // 3  white stripe
  [145,  90,  48],  // 4  brown (frame / legs)
  [187, 135,  80],  // 5  light brown (table top)
  [255, 138,   0],  // 6  orange  (carrot / pumpkin)
  [218,  58,  38],  // 7  red     (tomato / apple)
  [240, 220,  38],  // 8  yellow  (lemon / corn)
  [ 90, 185,  75],  // 9  produce green (lettuce)
];
const MS = [
  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],  //  0  canopy top
  [1,2,3,2,3,2,3,2,3,2,3,2,3,2,3,1],  //  1  stripe
  [1,3,2,3,2,3,2,3,2,3,2,3,2,3,2,1],  //  2
  [1,2,3,2,3,2,3,2,3,2,3,2,3,2,3,1],  //  3
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],  //  4  canopy hem
  [0,4,0,0,0,0,0,0,0,0,0,0,0,0,4,0],  //  5  poles
  [0,4,5,5,5,5,5,5,5,5,5,5,5,5,4,0],  //  6  table top
  [0,4,7,6,8,9,7,6,8,9,7,6,8,9,4,0],  //  7  produce row A
  [0,4,6,8,7,9,6,8,7,9,6,8,7,9,4,0],  //  8  produce row B
  [0,4,5,5,5,5,5,5,5,5,5,5,5,5,4,0],  //  9  table bottom
  [0,0,4,0,0,0,0,0,0,0,0,0,0,4,0,0],  // 10  legs
  [0,0,4,0,0,0,0,0,0,0,0,0,0,4,0,0],  // 11
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],  // 12
];

// Cloud — 10 × 5
const CC = [
  null,
  [255, 255, 255],  // 1  white
  [220, 232, 248],  // 2  shadow blue-white
];
const CS = [
  [0,0,0,1,1,1,1,0,0,0],
  [0,0,1,1,1,1,1,1,2,0],
  [0,1,1,1,2,1,1,1,1,1],
  [1,1,1,1,1,1,2,1,1,1],
  [0,0,1,1,1,1,1,1,0,0],
];

// ─── Constants ────────────────────────────────────────────────────────────────
const GRAVITY       = 0.6;
const JUMP_FORCE    = -14;
const GROUND_RATIO  = 0.78;
const TOTAL_DIST    = 6000;
const BASE_SPEED    = 3;
const MAX_SPEED     = 5.5;
const INVULN_FRAMES = 90;

const FRANCHISES = ["McDonald's", "Starbucks", "Subway", "Walmart", "Amazon Go"];
const GOOD_ITEMS  = ["Farmers Market", "Community Garden", "Co-op Grocery", "Local Bakery"];

// ─── State ────────────────────────────────────────────────────────────────────
let charImg;
let gameState = 'START';

let ch;
let groundY;
let scrollDist, scrollSpeed;
let obstacles;
let hearts, invulnTimer;
let spawnTimer, nextSpawnIn;
let clouds;

// ─── p5 lifecycle ─────────────────────────────────────────────────────────────
function preload() {
  charImg = loadImage('search.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noSmooth(); // nearest-neighbour scaling for pixel art crispness
  textFont('monospace');
  initGame();
}

function draw() {
  switch (gameState) {
    case 'START':    drawStart();              break;
    case 'PLAYING':  updateGame(); drawGame(); break;
    case 'GAMEOVER': drawGameOver();           break;
    case 'WIN':      drawWin();                break;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  recalcLayout();
}

// ─── Sprite renderer ──────────────────────────────────────────────────────────
function drawSprite(sprite, colors, x, y, w, h) {
  let rows = sprite.length;
  let cols = sprite[0].length;
  let pw   = w / cols;
  let ph   = h / rows;
  noStroke();
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let idx = sprite[r][c];
      if (idx === 0) continue;
      let col = colors[idx];
      fill(col[0], col[1], col[2]);
      // floor start + ceil size prevents gaps between adjacent pixels
      rect(floor(x + c * pw), floor(y + r * ph), ceil(pw + 0.5), ceil(ph + 0.5));
    }
  }
}

// ─── Init / layout ────────────────────────────────────────────────────────────
function getUnit() {
  return constrain(min(width, height) * 0.13, 52, 140);
}

function initGame() {
  groundY    = height * GROUND_RATIO;
  let unit   = getUnit();

  ch = {
    w: unit, h: unit,
    x: width * 0.18,
    y: groundY - unit,
    vy: 0, onGround: true,
  };

  scrollDist  = 0;
  scrollSpeed = BASE_SPEED;
  obstacles   = [];
  hearts      = 3;
  invulnTimer = 0;
  spawnTimer  = 0;
  nextSpawnIn = 80;

  clouds = [];
  for (let i = 0; i < 5; i++) {
    clouds.push({
      x:   random(width  * 0.1, width  * 1.3),
      y:   random(height * 0.04, groundY * 0.38),
      spd: random(0.35, 0.9),
      sc:  random(0.9, 2.4),
    });
  }
}

function recalcLayout() {
  groundY = height * GROUND_RATIO;
  if (!ch) return;
  let unit = getUnit();
  ch.w = unit;
  ch.h = unit;
  ch.x = width * 0.18;
  if (ch.onGround || gameState === 'START') {
    ch.y = groundY - unit;
  }
}

// ─── Game update ──────────────────────────────────────────────────────────────
function updateGame() {
  // Character physics
  ch.vy += GRAVITY;
  ch.y  += ch.vy;
  if (ch.y >= groundY - ch.h) {
    ch.y = groundY - ch.h;
    ch.vy = 0;
    ch.onGround = true;
  } else {
    ch.onGround = false;
  }

  // Parallax clouds
  for (let c of clouds) {
    c.x -= c.spd;
    if (c.x < -130) {
      c.x = width + random(50, 280);
      c.y = random(height * 0.04, groundY * 0.38);
    }
  }

  // Scroll & speed ramp
  scrollSpeed = lerp(
    scrollSpeed,
    BASE_SPEED + (scrollDist / TOTAL_DIST) * (MAX_SPEED - BASE_SPEED),
    0.01
  );
  scrollDist += scrollSpeed;

  if (scrollDist >= TOTAL_DIST) { gameState = 'WIN'; return; }

  // Spawn obstacles
  spawnTimer++;
  if (spawnTimer >= nextSpawnIn) {
    spawnObstacle();
    spawnTimer  = 0;
    nextSpawnIn = floor(random(70, 140));
  }

  // Update & collide obstacles
  for (let i = obstacles.length - 1; i >= 0; i--) {
    let o = obstacles[i];
    o.x -= scrollSpeed;
    if (o.x + o.w < 0) { obstacles.splice(i, 1); continue; }

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
  let unit = ch.w;
  let isFranchise = random() < 0.6;

  if (isFranchise) {
    // Square pixel art (16×16 sprite), placed on ground
    let w = unit * 1.35;
    let h = w; // 1:1 keeps pixels square
    obstacles.push({
      type: 'franchise',
      x: width + unit,
      y: groundY - h,
      w, h,
      label: random(FRANCHISES),
    });
  } else {
    // 16×13 sprite — place centre at ~55% of max jump height
    let sw  = MS[0].length;
    let sh  = MS.length;
    let w   = unit * 1.35;
    let h   = w * (sh / sw);          // preserves square pixels
    let maxJ = (JUMP_FORCE * JUMP_FORCE) / (2 * GRAVITY); // ≈ 163 px
    // Centre of sprite should be reachable: 55% of jump arc above ground level
    let centreY = groundY - ch.h / 2 - maxJ * 0.55;
    obstacles.push({
      type: 'market',
      x: width + w,
      y: centreY - h / 2,
      w, h,
      label: random(GOOD_ITEMS),
    });
  }
}

function rectsOverlap(a, b) {
  let m = a.w * 0.15; // forgiveness margin
  return (
    a.x + m     < b.x + b.w &&
    a.x + a.w - m > b.x      &&
    a.y + m     < b.y + b.h  &&
    a.y + a.h - m > b.y
  );
}

// ─── Drawing helpers ──────────────────────────────────────────────────────────
function drawSkyAndGround() {
  // Two-tone sky
  noStroke();
  fill(95, 175, 228);
  rect(0, 0, width, groundY * 0.55);
  fill(135, 206, 235);
  rect(0, groundY * 0.55, width, groundY * 0.45);

  // Clouds
  for (let c of clouds) {
    let cw  = getUnit() * 0.85 * c.sc;
    let ch2 = cw * (CS.length / CS[0].length);
    drawSprite(CS, CC, c.x, c.y, cw, ch2);
  }

  // Ground fill
  fill(78, 152, 72);
  rect(0, groundY, width, height - groundY);

  // Scrolling grass tufts
  drawGrassTufts();
}

function drawGrassTufts() {
  let step   = 22;
  let offset = scrollDist % step;
  noStroke();
  for (let gx = -offset; gx < width + step; gx += step) {
    let px = floor(gx);
    fill(50, 125, 45);
    rect(px,      groundY - 5, 2, 5);
    rect(px + 1,  groundY - 7, 2, 7);
    fill(65, 150, 55);
    rect(px + 7,  groundY - 4, 2, 4);
    rect(px + 8,  groundY - 6, 2, 6);
    fill(50, 125, 45);
    rect(px + 14, groundY - 5, 2, 5);
    rect(px + 15, groundY - 3, 2, 3);
  }
}

function drawHearts() {
  let sz    = min(width, height);
  let hSize = max(20, sz * 0.05);
  textAlign(LEFT, TOP);
  noStroke();
  for (let i = 0; i < 3; i++) {
    fill(i < hearts ? color(240, 55, 55) : color(65, 65, 65));
    textSize(hSize);
    text('♥', 12 + i * (hSize + 4), 12);
  }
}

function drawProgress() {
  let barW = width * 0.45;
  let barH = max(8, min(width, height) * 0.014);
  let barX = (width - barW) / 2;
  let barY = 12;
  let prog = constrain(scrollDist / TOTAL_DIST, 0, 1);

  noStroke();
  fill(45, 45, 45, 185);
  rect(barX, barY, barW, barH, barH / 2);
  fill(255, 200, 48);
  rect(barX, barY, barW * prog, barH, barH / 2);

  textAlign(LEFT, CENTER);
  textSize(max(10, barH * 1.5));
  fill(255);
  text('🏁', barX + barW + 5, barY + barH / 2);
}

// ─── Game screen ──────────────────────────────────────────────────────────────
function drawGame() {
  drawSkyAndGround();

  // Obstacles
  for (let o of obstacles) {
    if (o.type === 'franchise') {
      drawSprite(FS, FC, o.x, o.y, o.w, o.h);
    } else {
      drawSprite(MS, MC, o.x, o.y, o.w, o.h);
      // reward indicator above stall
      let sz = min(width, height);
      noStroke();
      fill(255, 220, 48);
      textAlign(CENTER, BOTTOM);
      textSize(max(12, sz * 0.028));
      text('+♥', o.x + o.w / 2, o.y - 4);
    }
  }

  // Character (flicker when invulnerable)
  if (invulnTimer <= 0 || frameCount % 6 < 3) {
    image(charImg, ch.x, ch.y, ch.w, ch.h);
  }

  drawHearts();
  drawProgress();
}

// ─── Other screens ────────────────────────────────────────────────────────────
function drawStart() {
  drawSkyAndGround();
  image(charImg, ch.x, ch.y, ch.w, ch.h);

  let sz = min(width, height);
  noStroke();
  fill(18, 18, 18, 195);
  rect(width / 2 - sz * 0.42, height * 0.21, sz * 0.84, sz * 0.50, 14);

  textAlign(CENTER, CENTER);
  fill(255);
  textSize(sz * 0.065);
  text('SEARCH: The Game', width / 2, height * 0.31);

  textSize(sz * 0.026);
  fill(210, 210, 210);
  text('Jump over franchise stores — avoid losing hearts.', width / 2, height * 0.42);
  text('Collect local spots — gain a heart!',               width / 2, height * 0.49);

  textSize(sz * 0.038);
  fill(255, 220, 48);
  text('Tap or click to start', width / 2, height * 0.59);
}

function drawGameOver() {
  background(36, 8, 8);
  let sz = min(width, height);
  textAlign(CENTER, CENTER);
  noStroke();
  fill(218, 52, 52);
  textSize(sz * 0.08);
  text('GAME OVER', width / 2, height * 0.38);
  fill(192, 172, 172);
  textSize(sz * 0.03);
  text('The franchises won this round.', width / 2, height * 0.51);
  fill(255, 220, 48);
  textSize(sz * 0.038);
  text('Tap or click to try again', width / 2, height * 0.63);
}

function drawWin() {
  background(16, 76, 36);
  let sz = min(width, height);
  textAlign(CENTER, CENTER);
  noStroke();
  fill(90, 218, 112);
  textSize(sz * 0.075);
  text('You made it!', width / 2, height * 0.35);
  fill(192, 240, 192);
  textSize(sz * 0.032);
  text('Your community journey is complete.', width / 2, height * 0.49);
  text('Local always wins. 🌱',               width / 2, height * 0.56);
  fill(255, 220, 48);
  textSize(sz * 0.038);
  text('Tap or click to play again', width / 2, height * 0.68);
}

// ─── Input ────────────────────────────────────────────────────────────────────
function mousePressed()  { handleInput(); }
function touchStarted()  { handleInput(); return false; }

function handleInput() {
  if (gameState === 'START') {
    gameState = 'PLAYING';
  } else if (gameState === 'PLAYING') {
    if (ch.onGround) { ch.vy = JUMP_FORCE; ch.onGround = false; }
  } else {
    initGame();
    gameState = 'PLAYING';
  }
}
