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
const TOTAL_DIST    = 6000;
const BASE_SPEED    = 3;
const MAX_SPEED     = 5.5;
const INVULN_FRAMES = 90;


// ─── State ────────────────────────────────────────────────────────────────────
let charImg;
let gameState = 'INTRO';

let ch;
let groundY;
let scrollDist, scrollSpeed;
let obstacles;
let hearts, invulnTimer;
let spawnTimer, nextSpawnIn;
let clouds;
let chGravity, chJumpForce;

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
  };
  ({ gravity: chGravity, jumpForce: chJumpForce } = calcPhysics(unit));

  scrollDist  = 0;
  scrollSpeed = BASE_SPEED;
  obstacles   = [];
  hearts      = 3;
  invulnTimer = 0;
  spawnTimer  = 0;
  nextSpawnIn = 80;

  clouds = [];
  for (let i = 0; i < 3; i++) {
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

  if (scrollDist >= TOTAL_DIST) {
    gameState = 'WIN';
    stopMusic();
    playSound(sndWin);
    return;
  }

  // Spawn obstacles
  spawnTimer++;
  if (spawnTimer >= nextSpawnIn) {
    spawnObstacle();
    spawnTimer  = 0;
    nextSpawnIn = floor(random(100, 170)); // fewer obstacles = faster mobile
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
        if (hearts <= 0) {
          hearts = 0;
          gameState = 'GAMEOVER';
          stopMusic();
          playSound(sndGameOver);
          return;
        }
        playSound(sndHurt);
      } else {
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
    let w  = unit * 1.1;
    let h  = w * (sp.length / sp[0].length);
    obstacles.push({ type: 'franchise', variant, x: width + unit, y: groundY - h, w, h });
  } else {
    let variant = random(['boba', 'coffee']);
    let sp   = variant === 'boba' ? BOBAS : COFFEES;
    let w    = unit * 1.1;
    let h    = w * (sp.length / sp[0].length);
    let maxJ = unit * 2.0;
    let centreY = groundY - ch.h / 2 - maxJ * 0.55;
    obstacles.push({ type: 'market', variant, x: width + w, y: centreY - h / 2, w, h });
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
  let step   = 34; // larger spacing = fewer rects, better mobile perf
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

  drawHearts();
  drawProgress();
}

// ─── Intro / Rules screens ────────────────────────────────────────────────────

// Ransom-note style SEARCH logo matching the brand image
function drawSearchLogo(cx, cy, letterSz) {
  let letters  = 'SEARCH';
  let bgColors = [
    [198, 222,  28],  // S  lime yellow
    [ 38, 192, 218],  // E  cyan
    [242, 128, 182],  // A  pink
    [ 18,  32,  72],  // R  dark navy
    [208,  42, 172],  // C  magenta
    [188, 222,  22],  // H  yellow-green
  ];
  let gap    = letterSz * 0.06;
  let totalW = letters.length * (letterSz + gap) - gap;
  let startX = cx - totalW / 2;

  noStroke();
  for (let i = 0; i < letters.length; i++) {
    let lx  = startX + i * (letterSz + gap);
    let col = bgColors[i];
    fill(col[0], col[1], col[2]);
    rect(lx, cy, letterSz, letterSz * 1.12, letterSz * 0.1);
    fill(i === 3 ? color(195, 215, 255) : color(22, 22, 22));
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    textSize(letterSz * 0.72);
    text(letters[i], lx + letterSz / 2, cy + letterSz * 0.56);
    textStyle(NORMAL);
  }
}

function drawIntro() {
  // Sky gradient background
  noStroke();
  fill(95, 175, 228);
  rect(0, 0, width, height * 0.75);
  fill(78, 152, 72);
  rect(0, height * 0.75, width, height * 0.25);

  let sz     = min(width, height);
  let floatY = sin(frameCount * 0.042) * sz * 0.016; // gentle bob

  // Character — large and centred
  let charSz = sz * 0.42;
  let charX  = width / 2 - charSz / 2;
  let charY  = height * 0.08 + floatY;
  image(charImg, charX, charY, charSz, charSz);

  // Colorful SEARCH logo below character
  let letterSz = sz * 0.098;
  drawSearchLogo(width / 2, charY + charSz + sz * 0.028, letterSz);

  // "Tap to continue" blinks after 80 frames
  if (frameCount > 80 && floor(frameCount / 38) % 2 === 0) {
    fill(255, 220, 48);
    noStroke();
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
    if (ch.onGround) {
      ch.vy = chJumpForce;
      ch.onGround = false;
      playSound(sndJump);
    }
  } else {
    // WIN or GAMEOVER — restart directly into game
    stopMusic();
    initGame();
    gameState = 'PLAYING';
    startMusic();
  }
}
