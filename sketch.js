// ─── Pixel Art Sprite Data ────────────────────────────────────────────────────

// McDonald's Burger (bad) — 16 × 12
const BC = [
  null,
  [215, 165,  85],  // 1  golden bun top
  [158, 108,  40],  // 2  dark bun edge
  [ 70, 155,  60],  // 3  lettuce
  [215,  60,  45],  // 4  tomato
  [100,  55,  20],  // 5  patty dark
  [245, 195,  50],  // 6  cheese yellow
  [238, 228, 198],  // 7  sesame seed
  [200, 150,  80],  // 8  bottom bun
];
const BURGERS = [
  [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0],  //  0  top bun arch
  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],  //  1
  [1,1,7,1,1,7,1,1,7,1,1,7,1,1,1,1],  //  2  sesame seeds
  [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],  //  3  bun bottom edge
  [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],  //  4  lettuce
  [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],  //  5  tomato
  [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],  //  6  patty
  [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],  //  7
  [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],  //  8  cheese
  [8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],  //  9  bottom bun
  [8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],  // 10
  [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],  // 11  base edge
];

// Chick-fil-A Milkshake (bad) — 12 × 16
const SHKC = [
  null,
  [255, 255, 255],  // 1  dome lid white
  [210, 210, 210],  // 2  dome shadow
  [215,  40,  40],  // 3  CFA red cup
  [155,  18,  18],  // 4  dark red cup
  [252, 232, 215],  // 5  milkshake cream
  [255, 160, 160],  // 6  straw light red
  [195,  30,  30],  // 7  straw dark red stripe
  [246, 215, 195],  // 8  shake highlight
];
const SHAKES = [
  [0,0,0,0,6,7,6,0,0,0,0,0],  //  0  straw top
  [0,0,0,0,6,7,6,0,0,0,0,0],  //  1
  [0,0,1,1,6,7,1,1,1,0,0,0],  //  2  dome lid
  [0,1,1,2,6,7,2,1,1,1,0,0],  //  3
  [1,1,1,1,1,1,1,1,1,1,1,0],  //  4
  [0,1,1,1,1,1,1,1,1,1,0,0],  //  5  dome hem
  [0,3,3,3,3,3,3,3,3,3,3,0],  //  6  cup top
  [0,3,5,5,5,5,5,5,5,5,3,0],  //  7  shake visible
  [0,3,5,8,5,5,8,5,5,5,3,0],  //  8
  [0,3,3,3,3,3,3,3,3,3,3,0],  //  9  cup mid
  [0,4,3,3,3,3,3,3,3,3,4,0],  // 10
  [0,4,3,3,3,3,3,3,3,3,4,0],  // 11
  [0,0,4,3,3,3,3,3,3,4,0,0],  // 12
  [0,0,4,4,4,4,4,4,4,4,0,0],  // 13  cup bottom
  [0,0,0,0,0,0,0,0,0,0,0,0],  // 14
  [0,0,0,0,0,0,0,0,0,0,0,0],  // 15
];

// Boba Cup (good) — 12 × 16
const BOBC = [
  null,
  [255, 185, 215],  // 1  pink cup
  [195, 120, 160],  // 2  dark pink cup
  [255, 255, 255],  // 3  dome lid white
  [215, 215, 215],  // 4  dome shadow
  [228, 195, 210],  // 5  taro milk tea
  [ 30,  18,  12],  // 6  tapioca pearl dark
  [ 68,  42,  26],  // 7  pearl lighter
  [245, 215, 225],  // 8  tea highlight
  [ 28,  22,  18],  // 9  straw dark
];
const BOBAS = [
  [0,0,0,0,9,9,9,0,0,0,0,0],  //  0  straw
  [0,0,0,0,9,9,9,0,0,0,0,0],  //  1
  [0,0,3,3,9,9,3,3,3,0,0,0],  //  2  dome lid
  [0,3,3,4,9,9,4,3,3,3,0,0],  //  3
  [3,3,3,3,9,9,3,3,3,3,3,0],  //  4
  [0,3,3,3,3,3,3,3,3,3,0,0],  //  5  dome hem
  [0,1,1,1,1,1,1,1,1,1,1,0],  //  6  cup top
  [0,1,5,5,5,5,5,5,5,5,1,0],  //  7  milk tea
  [0,1,8,5,5,8,5,5,8,5,1,0],  //  8
  [0,1,5,5,5,5,5,5,5,5,1,0],  //  9
  [0,1,6,7,6,7,6,7,6,7,1,0],  // 10  pearls row A
  [0,2,7,6,7,6,7,6,7,6,2,0],  // 11  pearls row B
  [0,2,1,1,1,1,1,1,1,1,2,0],  // 12  cup body
  [0,0,2,1,1,1,1,1,1,2,0,0],  // 13
  [0,0,2,2,2,2,2,2,2,2,0,0],  // 14  cup bottom
  [0,0,0,0,0,0,0,0,0,0,0,0],  // 15
];

// Coffee Cup (good) — 12 × 14
const COFC = [
  null,
  [255, 255, 255],  // 1  white cup
  [218, 218, 218],  // 2  gray rim / saucer
  [ 78,  42,  12],  // 3  dark coffee
  [138,  78,  28],  // 4  coffee medium
  [195, 228, 248],  // 5  steam wisps
  [248, 244, 238],  // 6  cup white body
  [192, 148,  68],  // 7  handle warm tan
  [198, 192, 188],  // 8  saucer gray
];
const COFFEES = [
  [0,0,5,0,5,0,0,5,0,5,0,0],  //  0  steam
  [0,5,0,5,0,5,5,0,5,0,0,0],  //  1  steam
  [0,0,0,0,0,0,0,0,0,0,0,0],  //  2
  [0,1,1,1,1,1,1,1,1,1,1,0],  //  3  cup rim
  [0,2,3,3,3,3,3,3,3,3,2,0],  //  4  coffee surface dark
  [0,1,4,3,4,4,3,4,4,3,1,0],  //  5  coffee highlights
  [0,6,6,6,6,6,6,6,6,6,6,0],  //  6  cup body
  [7,6,6,6,6,6,6,6,6,6,6,7],  //  7  handle row
  [7,6,6,6,6,6,6,6,6,6,6,7],  //  8
  [0,6,6,6,6,6,6,6,6,6,6,0],  //  9
  [0,1,1,1,1,1,1,1,1,1,1,0],  // 10  bottom rim
  [0,0,8,8,8,8,8,8,8,8,0,0],  // 11  saucer
  [0,0,0,0,0,0,0,0,0,0,0,0],  // 12
  [0,0,0,0,0,0,0,0,0,0,0,0],  // 13
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
// GRAVITY and JUMP_FORCE are derived per-unit in recalcLayout() so that
// jump height = unit × 1.6 and time-to-peak = 23 frames on every screen size.
// Formula: gravity = unit × 3.2/529,  jumpForce = -(unit × 73.6/529)
const GROUND_RATIO  = 0.78;
const BASE_SPEED    = 5;
const INVULN_FRAMES = 90;


// ─── State ────────────────────────────────────────────────────────────────────
let charImg;
let titleImg;
let gameState = 'INTRO';

let ch;
let groundY;
let scrollDist, scrollSpeed;
let obstacles;
let hearts, invulnTimer;
let spawnTimer, nextSpawnIn;
let clouds;
let chGravity, chJumpForce;
let itemCounts;    // { burger, shake, boba, coffee }
let finalDist = 0; // distance when player died
let bgTrees;

// Typewriter / rules reveal state
const RULES_TITLE = 'HOW TO PLAY';
let rwCharIdx = 0;   // chars of title revealed
let rwPhase   = 0;   // how many instruction rows are visible (0-5)
let rwTimer   = 0;   // frame counter used for pacing

// ─── Audio ────────────────────────────────────────────────────────────────────
let sndMusic, sndJump, sndHurt, sndCollect, sndWin, sndGameOver;

function playSound(snd) {
  if (!snd || !snd.isLoaded()) return;
  if (snd.isPlaying()) snd.stop();
  snd.play();
}

function startMusic() {
  if (!sndMusic || !sndMusic.isLoaded() || sndMusic.isPlaying()) return;
  sndMusic.setLoop(true);
  sndMusic.setVolume(0.35);
  sndMusic.play();
}

function stopMusic() {
  if (sndMusic && sndMusic.isPlaying()) sndMusic.stop();
}

// ─── p5 lifecycle ─────────────────────────────────────────────────────────────
function preload() {
  charImg    = loadImage('search.png');
  titleImg   = loadImage('title.png');
  sndMusic    = loadSound('music.mp3');
  sndJump     = loadSound('jump.mp3');
  sndHurt     = loadSound('hurt.mp3');
  sndCollect  = loadSound('collect.mp3');
  sndWin      = loadSound('win.mp3');
  sndGameOver = loadSound('gameover.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noSmooth(); // nearest-neighbour scaling for pixel art crispness
  textFont('monospace');
  initGame();
}

function draw() {
  switch (gameState) {
    case 'INTRO':    drawIntro();              break;
    case 'RULES':    drawRules();              break;
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
  return constrain(min(width, height) * 0.182, 73, 197);
}

function calcPhysics(unit) {
  // jump height = unit × 2.0, time-to-peak = 23 frames on every screen size
  return {
    gravity:   unit * 4.0 / 529,
    jumpForce: -(unit * 92.0 / 529),
  };
}

function initGame() {
  groundY    = height * GROUND_RATIO;
  let unit   = getUnit();

  ch = {
    w: unit, h: unit,
    x: width * 0.18,
    y: groundY - unit,
    vy: 0, onGround: true,
    jumpsLeft: 2,
  };
  ({ gravity: chGravity, jumpForce: chJumpForce } = calcPhysics(unit));

  scrollDist  = 0;
  scrollSpeed = BASE_SPEED;
  obstacles   = [];
  hearts      = 3;
  invulnTimer = 0;
  spawnTimer  = 0;
  nextSpawnIn = 80;
  itemCounts  = { burger: 0, shake: 0, boba: 0, coffee: 0 };

  clouds = [];
  for (let i = 0; i < 3; i++) {
    clouds.push({
      x:   random(width  * 0.1, width  * 1.3),
      y:   random(height * 0.04, groundY * 0.38),
      spd: random(0.35, 0.9),
      sc:  random(0.9, 2.4),
    });
  }

  bgTrees = [];
  for (let i = 0; i < 7; i++) {
    bgTrees.push(randomTree(random(0, width * 1.4)));
  }
}

function randomTree(x) {
  let unit = getUnit();
  let shades = [
    [52, 128, 48], [44, 112, 54], [60, 140, 42], [38, 104, 60],
  ];
  return {
    x,
    h:     random(unit * 0.38, unit * 0.72),
    shade: random(shades),
  };
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
  ({ gravity: chGravity, jumpForce: chJumpForce } = calcPhysics(unit));
}

// ─── Game update ──────────────────────────────────────────────────────────────
function updateGame() {
  // Character physics
  ch.vy += chGravity;
  ch.y  += ch.vy;
  if (ch.y >= groundY - ch.h) {
    ch.y = groundY - ch.h;
    ch.vy = 0;
    if (!ch.onGround) ch.jumpsLeft = 2; // restore on landing
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

  // Parallax background trees (0.22× speed)
  for (let t of bgTrees) {
    t.x -= scrollSpeed * 0.22;
    if (t.x + t.h < 0) {
      t.x = width + random(30, 180);
      let unit = getUnit();
      t.h = random(unit * 0.38, unit * 0.72);
    }
  }

  // Endless logarithmic speed ramp — fast early, keeps climbing forever
  let targetSpeed = BASE_SPEED + log(1 + scrollDist / 600) * 3.8;
  scrollSpeed = lerp(scrollSpeed, targetSpeed, 0.008);
  scrollDist += scrollSpeed;

  // Spawn rate tightens as distance grows
  spawnTimer++;
  if (spawnTimer >= nextSpawnIn) {
    spawnObstacle();
    spawnTimer  = 0;
    let minGap  = max(38, 115 - floor(scrollDist / 250));
    let maxGap  = max(60,  155 - floor(scrollDist / 250));
    nextSpawnIn = floor(random(minGap, maxGap));
  }

  // Update & collide obstacles
  for (let i = obstacles.length - 1; i >= 0; i--) {
    let o = obstacles[i];
    o.x -= scrollSpeed;
    if (o.x + o.w < 0) { obstacles.splice(i, 1); continue; }

    if (invulnTimer <= 0 && rectsOverlap(ch, o)) {
      if (o.type === 'franchise') {
        itemCounts[o.variant]++;
        hearts--;
        invulnTimer = INVULN_FRAMES;
        if (hearts <= 0) {
          hearts    = 0;
          finalDist = floor(scrollDist / 4);
          gameState = 'GAMEOVER';
          stopMusic();
          playSound(sndGameOver);
          return;
        }
        playSound(sndHurt);
      } else {
        itemCounts[o.variant]++;
        hearts = min(hearts + 1, 3);
        playSound(sndCollect);
        obstacles.splice(i, 1);
        continue;
      }
    }
  }

  if (invulnTimer > 0) invulnTimer--;
}

function spawnObstacle() {
  let unit = ch.w;
  let isBad = random() < 0.6;

  if (isBad) {
    let variant = random(['burger', 'shake']);
    let sp = variant === 'burger' ? BURGERS : SHAKES;
    let w  = unit * 0.55;
    let h  = w * (sp.length / sp[0].length);
    obstacles.push({ type: 'franchise', variant, x: width + unit, y: groundY - h, w, h });
  } else {
    let variant = random(['boba', 'coffee']);
    let sp   = variant === 'boba' ? BOBAS : COFFEES;
    let w    = unit * 0.65;
    let h    = w * (sp.length / sp[0].length);
    let maxJ = unit * 2.0;
    let centreY = groundY - ch.h / 2 - maxJ * 0.55;
    obstacles.push({ type: 'market', variant, x: width + w, y: centreY - h / 2, w, h });
  }
}

function rectsOverlap(a, b) {
  let mx = a.w * 0.18;  // horizontal forgiveness
  let mt = a.h * 0.14;  // extra top clearance so jumps feel clean
  let mb = a.w * 0.18;  // bottom forgiveness
  return (
    a.x + mx     < b.x + b.w &&
    a.x + a.w - mx > b.x     &&
    a.y + mt     < b.y + b.h &&
    a.y + a.h - mb > b.y
  );
}

// ─── Drawing helpers ──────────────────────────────────────────────────────────
// Pixelated sky palette — dark blue at top, pale horizon at bottom
const SKY_BANDS = [
  [32,  88, 172],
  [44, 108, 190],
  [58, 128, 205],
  [72, 148, 216],
  [88, 166, 224],
  [108, 184, 230],
  [130, 200, 236],
  [155, 215, 242],
];

function drawSkyAndGround() {
  noStroke();
  // Pixelated gradient — equal-height bands
  let bands  = SKY_BANDS.length;
  let bandPx = max(1, floor(groundY / bands));
  for (let b = 0; b < bands; b++) {
    let sc = SKY_BANDS[b];
    fill(sc[0], sc[1], sc[2]);
    rect(0, b * bandPx, width, bandPx + 1);
  }
  // Cover any gap between last band and ground
  let lastSc = SKY_BANDS[bands - 1];
  fill(lastSc[0], lastSc[1], lastSc[2]);
  rect(0, bands * bandPx, width, groundY - bands * bandPx);

  // Background trees (slow parallax)
  for (let t of bgTrees) {
    let tw = t.h * 0.55;
    drawPixelTree(t.x - tw * 0.5, groundY - t.h, tw, t.h, t.shade);
  }

  // Clouds
  for (let c of clouds) {
    let cw  = getUnit() * 0.85 * c.sc;
    let ch2 = cw * (CS.length / CS[0].length);
    drawSprite(CS, CC, c.x, c.y, cw, ch2);
  }

  // Ground with scrolling brick road
  drawBrickRoad();
}

// 7×6 pixel-art heart
const HEART_MAP = [
  [0,1,1,0,1,1,0],
  [1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1],
  [0,1,1,1,1,1,0],
  [0,0,1,1,1,0,0],
  [0,0,0,1,0,0,0],
];

function drawPixelHeart(x, y, pxSize, filled) {
  fill(filled ? color(240, 55, 55) : color(70, 70, 70));
  noStroke();
  for (let r = 0; r < HEART_MAP.length; r++) {
    for (let c = 0; c < HEART_MAP[r].length; c++) {
      if (HEART_MAP[r][c]) {
        rect(floor(x + c * pxSize), floor(y + r * pxSize), pxSize, pxSize);
      }
    }
  }
}

function drawPixelTree(tx, ty, tw, th, shade) {
  noStroke();
  let canopyH = th * 0.72;
  let tiers   = 4;
  for (let t = 0; t < tiers; t++) {
    let tierY = ty + (t / tiers) * canopyH;
    let tierW = tw * (0.28 + (t / tiers) * 0.72);
    let tierH = canopyH / tiers + 1;
    fill(shade[0], shade[1], shade[2]);
    rect(floor(tx + (tw - tierW) * 0.5), floor(tierY), ceil(tierW), ceil(tierH));
  }
  // Trunk
  fill(98, 58, 24);
  let trunkW = max(2, floor(tw * 0.18));
  rect(floor(tx + (tw - trunkW) * 0.5), floor(ty + canopyH), trunkW, ceil(th * 0.28));
}

function drawBrickRoad() {
  let groundH = height - groundY;
  let brickH  = max(4, floor(groundH / 6));
  let brickW  = brickH * 3.2;
  let mortar  = 1;

  noStroke();
  fill(72, 54, 40); // mortar
  rect(0, groundY, width, groundH);

  for (let row = 0; row < 6; row++) {
    let by        = groundY + row * brickH;
    let rowOff    = (row % 2 === 0) ? 0 : brickW * 0.5;
    let scrollOff = scrollDist % brickW;
    for (let bx = -(scrollOff + brickW) + rowOff; bx < width + brickW; bx += brickW) {
      fill(155, 88, 60);
      rect(floor(bx) + mortar, by + mortar, brickW - mortar, brickH - mortar);
      fill(170, 102, 72); // subtle top highlight only
      rect(floor(bx) + mortar, by + mortar, brickW - mortar, 1);
    }
  }
}

function drawGuiFrame() {
  let sz  = min(width, height);
  let ft  = max(42, floor(sz * 0.088)); // frame band height
  let bw  = max(5,  floor(sz * 0.010)); // side border width

  noStroke();

  // ── Frame fills ──────────────────────────────────────────────────
  fill(18, 16, 30);
  rect(0, 0, width, ft);                     // top band
  rect(0, height - ft, width, ft);           // bottom band
  rect(0, ft, bw, height - ft * 2);          // left strip
  rect(width - bw, ft, bw, height - ft * 2); // right strip

  // Inner bevel line (pixel-art depth)
  fill(52, 46, 72);
  rect(0, ft - 2, width, 2);
  rect(0, height - ft, width, 2);
  rect(bw, ft, 2, height - ft * 2);
  rect(width - bw - 2, ft, 2, height - ft * 2);

  // Gold accent rule
  fill(170, 130, 35);
  rect(0, ft - 1, width, 1);
  rect(0, height - ft - 1, width, 1);

  // ── TOP PANEL: hearts | distance | speed ─────────────────────────
  let pxSize  = max(3, floor(sz * 0.0088));
  let hW      = 7 * pxSize;
  let hGap    = floor(pxSize * 2);
  let heartY  = floor((ft - 6 * pxSize) / 2);
  for (let i = 0; i < 3; i++) {
    drawPixelHeart(bw + 10 + i * (hW + hGap), heartY, pxSize, i < hearts);
  }

  // Distance
  let distM = floor(scrollDist / 4);
  fill(255, 220, 48);
  textAlign(RIGHT, CENTER);
  textSize(max(9, ft * 0.34));
  noStroke();
  text(distM + 'm', width - bw - 10, ft * 0.5);

  // Speed gauge — 5 pip dots
  let speedNorm  = constrain((scrollSpeed - BASE_SPEED) / 13, 0, 1);
  let filledPips = max(1, round(speedNorm * 5));
  let pipR   = max(3, floor(ft * 0.10));
  let pipGap = pipR * 2 + 3;
  let pipsW  = 5 * pipGap - 3;
  let pipX   = width / 2 - pipsW / 2;
  let pipY   = floor(ft * 0.5);
  for (let p = 0; p < 5; p++) {
    fill(p < filledPips ? color(255, 200, 40) : color(55, 50, 70));
    ellipse(pipX + p * pipGap + pipR, pipY, pipR * 2, pipR * 2);
  }

  // ── BOTTOM PANEL: item legend with counters ───────────────────────
  let items = [
    { key: 'burger', sp: BURGERS, sc: BC,   bad: true  },
    { key: 'shake',  sp: SHAKES,  sc: SHKC, bad: true  },
    { key: 'boba',   sp: BOBAS,   sc: BOBC, bad: false },
    { key: 'coffee', sp: COFFEES, sc: COFC, bad: false },
  ];

  let iconH  = ft * 0.58;
  let slot   = width / items.length;

  for (let i = 0; i < items.length; i++) {
    let it   = items[i];
    let cx   = slot * i + slot * 0.5;
    let cy   = height - ft * 0.5;
    let iw   = iconH * (it.sp[0].length / it.sp.length);
    let ix   = cx - iw * 0.5 - pxSize * 2;
    let iy   = cy - iconH * 0.5;
    drawSprite(it.sp, it.sc, ix, iy, iw, iconH);

    let cnt  = itemCounts ? (itemCounts[it.key] || 0) : 0;
    fill(it.bad ? color(255, 130, 120) : color(120, 255, 155));
    textAlign(LEFT, CENTER);
    textSize(max(9, ft * 0.33));
    noStroke();
    text('\xd7' + cnt, ix + iw + 3, cy);
  }
}

// ─── Game screen ──────────────────────────────────────────────────────────────
function drawGame() {
  drawSkyAndGround();

  // Obstacles
  for (let o of obstacles) {
    if (o.type === 'franchise') {
      if (o.variant === 'burger') drawSprite(BURGERS, BC,   o.x, o.y, o.w, o.h);
      else                        drawSprite(SHAKES,  SHKC, o.x, o.y, o.w, o.h);
    } else {
      if (o.variant === 'boba')   drawSprite(BOBAS,   BOBC, o.x, o.y, o.w, o.h);
      else                        drawSprite(COFFEES, COFC, o.x, o.y, o.w, o.h);
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

  drawGuiFrame();
}

// ─── Intro / Rules screens ────────────────────────────────────────────────────

function drawIntro() {
  // Sky gradient background
  noStroke();
  fill(95, 175, 228);
  rect(0, 0, width, height * 0.75);
  fill(78, 152, 72);
  rect(0, height * 0.75, width, height * 0.25);

  let sz     = min(width, height);
  let floatY = sin(frameCount * 0.042) * sz * 0.016; // gentle bob

  // Title image — floating centred
  if (titleImg && titleImg.width > 0) {
    let titleW = sz * 0.55;
    let titleH = titleW * (titleImg.height / titleImg.width);
    let titleX = width / 2 - titleW / 2;
    let titleY = height / 2 - titleH / 2 + floatY;
    image(titleImg, titleX, titleY, titleW, titleH);
  }

  // "Tap to continue" blinks after 80 frames
  if (frameCount > 80 && floor(frameCount / 38) % 2 === 0) {
    fill(255, 220, 48);
    textAlign(CENTER, CENTER);
    textSize(sz * 0.033);
    text('Tap or click to continue', width / 2, height * 0.90);
  }
}

function drawRules() {
  // Background
  noStroke();
  fill(12, 12, 20);
  rect(0, 0, width, height);

  let sz = min(width, height);

  // Title typewriter
  let visTitle = RULES_TITLE.slice(0, rwCharIdx);
  let cursor   = (rwCharIdx < RULES_TITLE.length && frameCount % 22 < 11) ? '|' : '';
  fill(255, 220, 48);
  textAlign(CENTER, CENTER);
  textSize(sz * 0.058);
  noStroke();
  text(visTitle + cursor, width / 2, height * 0.13);

  // Divider
  stroke(80, 80, 80);
  strokeWeight(1);
  line(width / 2 - sz * 0.38, height * 0.20, width / 2 + sz * 0.38, height * 0.20);
  noStroke();

  // Instruction rows — each revealed after rwPhase advances
  let iconSz = sz * 0.10;
  let iconX  = width / 2 - sz * 0.34;
  let textX  = iconX + iconSz + sz * 0.025;
  let rows = [
    { y: 0.31, sp: BURGERS, sc: BC,   bad: true,  name: "McDonald's Burger",  hint: "Jump over — lose a ♥" },
    { y: 0.46, sp: SHAKES,  sc: SHKC, bad: true,  name: "Chick-fil-A Shake",  hint: "Jump over — lose a ♥" },
    { y: 0.61, sp: BOBAS,   sc: BOBC, bad: false, name: "Boba",               hint: "Collect — gain a ♥"  },
    { y: 0.76, sp: COFFEES, sc: COFC, bad: false, name: "Coffee",             hint: "Collect — gain a ♥"  },
  ];

  for (let i = 0; i < rows.length; i++) {
    if (rwPhase < i + 1) break;
    let r  = rows[i];
    let iy = height * r.y;
    let ih = iconSz * (r.sp.length / r.sp[0].length);
    drawSprite(r.sp, r.sc, iconX, iy - ih / 2, iconSz, ih);

    fill(r.bad ? color(255, 155, 155) : color(155, 255, 155));
    textAlign(LEFT, CENTER);
    textSize(sz * 0.027);
    text(r.name, textX, iy - sz * 0.017);
    fill(r.bad ? color(218, 88, 88) : color(88, 200, 88));
    textSize(sz * 0.023);
    text(r.hint, textX, iy + sz * 0.017);
  }

  // "Tap to play" blinks once all rows shown
  if (rwPhase >= 5 && floor(frameCount / 38) % 2 === 0) {
    fill(255, 220, 48);
    textAlign(CENTER, CENTER);
    textSize(sz * 0.038);
    text('Tap to play!', width / 2, height * 0.93);
  }

  // Advance typewriter / row reveals each frame
  rwTimer++;
  if (rwCharIdx < RULES_TITLE.length) {
    if (rwTimer % 5 === 0) rwCharIdx++;
  } else if (rwPhase < 5) {
    if (rwTimer % 42 === 0) rwPhase++;
  }
}

function drawGameOver() {
  let sz   = min(width, height);
  let gndY = height * 0.70;

  // ── Pixelated sunny-field background ───────────────────────────────
  noStroke();
  // Bright sky bands
  let bands  = SKY_BANDS.length;
  let bandPx = max(1, floor(gndY / bands));
  for (let b = 0; b < bands; b++) {
    let sc = SKY_BANDS[b];
    fill(min(255, sc[0] + 28), min(255, sc[1] + 18), min(255, sc[2] + 6));
    rect(0, b * bandPx, width, bandPx + 1);
  }

  // Animated clouds
  let co = frameCount * 0.45;
  let cPositions = [0.08, 0.32, 0.58, 0.82];
  for (let i = 0; i < cPositions.length; i++) {
    let cx  = ((cPositions[i] * width * 1.4 + co) % (width * 1.4)) - sz * 0.08;
    let cy  = gndY * (0.12 + i * 0.1);
    let cw  = sz * (0.10 + i * 0.018);
    let ch2 = cw * (CS.length / CS[0].length);
    drawSprite(CS, CC, cx, cy, cw, ch2);
  }

  // Sunny green field
  fill(88, 172, 72);
  rect(0, gndY, width, height - gndY);
  // Lighter band at horizon
  fill(112, 195, 88);
  rect(0, gndY, width, max(4, floor(height * 0.018)));

  // Pixel flowers scattered across field
  let flowerColors = [[255,210,60],[255,120,160],[255,255,255],[180,255,120]];
  for (let f = 0; f < 14; f++) {
    let fx = (f * 137 + 42) % width;
    let fy = gndY + max(6, floor((height - gndY) * 0.25)) + (f * 53) % floor((height - gndY) * 0.5);
    let fc = flowerColors[f % flowerColors.length];
    fill(fc[0], fc[1], fc[2]);
    let ps = max(3, floor(sz * 0.006));
    rect(fx, fy, ps, ps);
    rect(fx - ps, fy - ps, ps, ps);
    rect(fx + ps, fy - ps, ps, ps);
    rect(fx, fy - ps * 2, ps, ps);
    fill(255, 220, 80);
    rect(fx, fy - ps, ps, ps); // centre
  }

  // ── title.png ─────────────────────────────────────────────────────
  if (titleImg && titleImg.width > 0) {
    let tw = sz * 0.40;
    let th = tw * (titleImg.height / titleImg.width);
    let ty = gndY * 0.04 + sin(frameCount * 0.04) * sz * 0.012;
    image(titleImg, width * 0.5 - tw * 0.5, ty, tw, th);
  }

  // ── Text content ──────────────────────────────────────────────────
  textAlign(CENTER, CENTER);
  noStroke();

  fill(255, 242, 80);
  textSize(sz * 0.068);
  text('Great Run!', width * 0.5, gndY * 0.60);

  fill(255, 255, 255);
  textSize(sz * 0.050);
  text(finalDist + 'm', width * 0.5, gndY * 0.73);

  fill(220, 255, 200);
  textSize(sz * 0.024);
  text('distance explored', width * 0.5, gndY * 0.81);

  if (floor(frameCount / 36) % 2 === 0) {
    fill(255, 242, 80);
    textSize(sz * 0.034);
    text('Tap to explore again!', width * 0.5, height * 0.91);
  }
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
  if (gameState === 'INTRO') {
    // Move to rules screen, reset typewriter
    gameState = 'RULES';
    rwCharIdx = 0; rwPhase = 0; rwTimer = 0;
  } else if (gameState === 'RULES') {
    if (rwPhase >= 5) {
      // All content shown — start game
      initGame();
      gameState = 'PLAYING';
      startMusic();
    } else {
      // Fast-forward remaining text on early tap
      rwCharIdx = RULES_TITLE.length;
      rwPhase   = 5;
    }
  } else if (gameState === 'PLAYING') {
    if (ch.jumpsLeft > 0) {
      ch.vy = chJumpForce;
      ch.onGround = false;
      ch.jumpsLeft--;
      playSound(sndJump);
    }
  } else if (gameState === 'GAMEOVER') {
    stopMusic();
    initGame();
    gameState = 'PLAYING';
    startMusic();
  }
}
