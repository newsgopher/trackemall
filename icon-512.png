<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>TrackEmAll — Card Binder</title>
<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Noto+Sans+JP:wght@400;700&display=swap" rel="stylesheet">
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
html,body{width:100%;height:100%;overflow:hidden;font-family:'Noto Sans JP',sans-serif;}

/* ═══ NATURE SCENE BACKGROUND ═══ */
body{
  background:linear-gradient(180deg,
    #7ec8f0 0%, #b8e4f8 25%,
    #c8efc0 50%, #8dc870 70%,
    #6ab050 85%, #5a9840 100%
  );
  position:relative;
}

/* Sun */
.sun{
  position:fixed;top:40px;right:120px;
  width:70px;height:70px;
  background:radial-gradient(circle,#fffaaa 40%,#ffe060 70%,transparent 100%);
  border-radius:50%;
  box-shadow:0 0 40px 20px rgba(255,240,100,0.4);
  animation:sunPulse 4s ease-in-out infinite;
  z-index:1;
}
@keyframes sunPulse{0%,100%{box-shadow:0 0 40px 20px rgba(255,240,100,0.4);}50%{box-shadow:0 0 60px 30px rgba(255,240,100,0.6);}}

/* Clouds */
.cloud{
  position:fixed;background:rgba(255,255,255,0.85);border-radius:50px;
  z-index:1;animation:cloudDrift linear infinite;
}
.cloud::before,.cloud::after{
  content:'';position:absolute;background:rgba(255,255,255,0.85);border-radius:50%;
}
.cloud-1{width:120px;height:40px;top:60px;animation-duration:35s;animation-delay:-10s;}
.cloud-1::before{width:60px;height:60px;top:-30px;left:15px;}
.cloud-1::after{width:50px;height:50px;top:-20px;right:15px;}
.cloud-2{width:90px;height:30px;top:100px;animation-duration:45s;animation-delay:-25s;}
.cloud-2::before{width:45px;height:45px;top:-22px;left:10px;}
.cloud-2::after{width:38px;height:38px;top:-16px;right:10px;}
.cloud-3{width:150px;height:45px;top:30px;animation-duration:55s;animation-delay:-40s;}
.cloud-3::before{width:70px;height:70px;top:-35px;left:20px;}
.cloud-3::after{width:60px;height:60px;top:-28px;right:20px;}
@keyframes cloudDrift{from{transform:translateX(-200px);}to{transform:translateX(calc(100vw + 200px));}}

/* Mountains in back */
.mountains{
  position:fixed;bottom:25%;left:0;right:0;z-index:1;
  display:flex;align-items:flex-end;justify-content:space-around;
}
.mountain{
  width:0;height:0;
  border-left:solid transparent;
  border-right:solid transparent;
  border-bottom:solid;
  position:relative;
}
.mountain::after{
  content:'';position:absolute;top:0;left:50%;transform:translateX(-50%);
  width:18px;height:18px;background:white;border-radius:50% 50% 0 0;
  top:-8px;
}
.mt1{border-left-width:80px;border-right-width:80px;border-bottom-width:140px;border-bottom-color:#8ab0d0;margin-bottom:-20px;}
.mt2{border-left-width:110px;border-right-width:110px;border-bottom-width:190px;border-bottom-color:#7aa0c0;margin-bottom:-30px;}
.mt3{border-left-width:70px;border-right-width:70px;border-bottom-width:120px;border-bottom-color:#9ac0e0;margin-bottom:-10px;}

/* Hills */
.hills{
  position:fixed;bottom:0;left:0;right:0;height:35%;
  background:linear-gradient(180deg,#7ac860 0%,#5aaa40 40%,#4a9030 100%);
  border-radius:60% 60% 0 0 / 30% 30% 0 0;
  z-index:2;
}
.hills::before{
  content:'';position:absolute;top:-40px;left:-10%;right:-10%;
  height:80px;
  background:linear-gradient(180deg,transparent 0%,#8ad068 100%);
  border-radius:60% 60% 0 0;
}

/* Flowers scattered */
.flower{position:fixed;z-index:3;font-size:14px;animation:flowerSway 3s ease-in-out infinite alternate;}
@keyframes flowerSway{0%{transform:rotate(-8deg);}100%{transform:rotate(8deg);}}

/* ═══ CLEFAIRYS ═══ */
.clefairy{
  position:fixed;z-index:4;
  font-size:32px;
  cursor:pointer;
  transition:transform 0.3s;
  animation:clefairyFloat 4s ease-in-out infinite;
  user-select:none;
}
.clefairy:hover{transform:scale(1.2) rotate(10deg);}
@keyframes clefairyFloat{
  0%,100%{transform:translateY(0px);}
  50%{transform:translateY(-12px);}
}
.clefairy.wander{animation:clefairyWander linear infinite;}
@keyframes clefairyWander{
  0%{transform:translateX(0) scaleX(1);}
  48%{transform:translateX(min(200px,10vw)) scaleX(1);}
  50%{transform:translateX(min(200px,10vw)) scaleX(-1);}
  98%{transform:translateX(0) scaleX(-1);}
  100%{transform:translateX(0) scaleX(1);}
}

/* Grid display mode */
.clefairy.grid-mode{
  position:absolute;
  animation:none;
  transition:all 0.8s cubic-bezier(0.34,1.56,0.64,1);
}

/* ═══ TOP NAV BAR ═══ */
.top-bar{
  position:fixed;top:0;left:0;right:0;z-index:100;
  display:flex;align-items:center;justify-content:space-between;
  padding:8px 16px;
  background:rgba(20,10,5,0.75);
  backdrop-filter:blur(8px);
  border-bottom:2px solid rgba(255,228,74,0.3);
}
.top-bar-left{display:flex;align-items:center;gap:10px;}
.app-title{font-family:'Press Start 2P',monospace;font-size:9px;color:#ffe44a;letter-spacing:0.1em;}
.top-bar-right{display:flex;align-items:center;gap:8px;}
.nav-btn{
  font-family:'Press Start 2P',monospace;font-size:6px;padding:6px 10px;
  background:rgba(0,0,0,0.4);border:1px solid rgba(255,228,74,0.4);
  color:rgba(255,228,74,0.8);cursor:pointer;border-radius:2px;
  transition:all 0.15s;letter-spacing:0.06em;white-space:nowrap;
}
.nav-btn:hover{background:rgba(255,228,74,0.15);border-color:#ffe44a;color:#ffe44a;}
.nav-btn.active{background:rgba(255,228,74,0.2);border-color:#ffe44a;color:#ffe44a;}

/* ═══ BINDER SCENE ═══ */
.binder-scene{
  position:fixed;inset:0;z-index:10;
  display:flex;align-items:center;justify-content:center;
  padding:52px 16px 16px;
}

/* 3-D binder container */
.binder-wrap{
  perspective:1200px;
  display:flex;align-items:center;justify-content:center;
  width:100%;max-width:860px;
  height:calc(100vh - 68px);
}

.binder{
  position:relative;
  width:100%;max-width:800px;
  height:min(90vh,600px);
  display:flex;
  filter:drop-shadow(0 20px 60px rgba(0,0,0,0.6));
  transform-style:preserve-3d;
}

/* Spine */
.binder-spine{
  width:28px;flex-shrink:0;
  background:linear-gradient(90deg,#3a1a0a 0%,#6a3010 30%,#8a4818 50%,#6a3010 70%,#3a1a0a 100%);
  border-radius:4px 0 0 4px;
  display:flex;flex-direction:column;align-items:center;justify-content:center;
  gap:16px;
  box-shadow:inset 2px 0 8px rgba(0,0,0,0.5);
  position:relative;z-index:5;
}
.spine-ring{
  width:18px;height:18px;border-radius:50%;
  background:radial-gradient(circle at 35% 35%,#d0d0d0,#888);
  box-shadow:0 2px 4px rgba(0,0,0,0.6),inset 0 1px 2px rgba(255,255,255,0.3);
  border:1px solid #666;
}

/* Pages */
.binder-pages{
  flex:1;position:relative;overflow:hidden;
  border-radius:0 6px 6px 0;
}

/* Individual page */
.binder-page{
  position:absolute;inset:0;
  background:linear-gradient(135deg,#f5f0e8 0%,#ede8d8 50%,#e8e0cc 100%);
  display:flex;flex-direction:column;
  border-right:1px solid #c8c0a8;
  transition:transform 0.6s cubic-bezier(0.645,0.045,0.355,1.0),opacity 0.4s;
  transform-origin:left center;
  transform-style:preserve-3d;
  backface-visibility:hidden;
}
.binder-page.hidden{transform:rotateY(-90deg);opacity:0;pointer-events:none;}
.binder-page.flipping-out{
  animation:pageFlipOut 0.5s cubic-bezier(0.645,0.045,0.355,1.0) forwards;
}
.binder-page.flipping-in{
  animation:pageFlipIn 0.5s cubic-bezier(0.645,0.045,0.355,1.0) forwards;
}
@keyframes pageFlipOut{
  0%{transform:rotateY(0deg);opacity:1;}
  100%{transform:rotateY(-85deg);opacity:0;}
}
@keyframes pageFlipIn{
  0%{transform:rotateY(85deg);opacity:0;}
  100%{transform:rotateY(0deg);opacity:1;}
}

/* Page header */
.page-header{
  display:flex;align-items:center;justify-content:space-between;
  padding:8px 14px 6px;
  background:linear-gradient(90deg,#c8a060,#e0b870,#c8a060);
  border-bottom:2px solid #a07840;
}
.page-title{font-family:'Press Start 2P',monospace;font-size:6px;color:#3a1a00;letter-spacing:0.1em;}
.page-num{font-family:'Press Start 2P',monospace;font-size:5px;color:#5a3010;letter-spacing:0.08em;}

/* Card grid on page */
.card-grid{
  flex:1;display:grid;grid-template-columns:repeat(3,1fr);
  gap:10px;padding:12px;
  align-content:start;
}

/* Card slot */
.card-slot{
  position:relative;
  background:rgba(0,0,0,0.06);
  border:2px dashed rgba(160,120,60,0.4);
  border-radius:6px;
  aspect-ratio:0.72;
  display:flex;align-items:center;justify-content:center;
  cursor:pointer;
  transition:all 0.2s;
  overflow:hidden;
}
.card-slot:hover{
  background:rgba(255,200,80,0.1);
  border-color:rgba(200,160,60,0.7);
  transform:scale(1.02);
}
.card-slot.filled{
  border:2px solid rgba(160,120,60,0.5);
  background:#fff;
  cursor:default;
}
.card-slot.filled:hover{transform:scale(1.04);box-shadow:0 4px 20px rgba(0,0,0,0.2);}

/* Add button inside slot */
.slot-add-btn{
  width:32px;height:32px;border-radius:50%;
  background:rgba(180,140,60,0.2);
  border:2px solid rgba(160,120,60,0.5);
  color:rgba(120,80,20,0.7);
  font-size:20px;line-height:1;
  display:flex;align-items:center;justify-content:center;
  cursor:pointer;transition:all 0.2s;
}
.slot-add-btn:hover{
  background:rgba(220,180,80,0.4);
  border-color:#c8a050;
  color:#6a3800;
  transform:scale(1.1);
}

/* Card image in slot */
.slot-img{width:100%;height:100%;object-fit:cover;border-radius:4px;display:block;}
.slot-label{
  position:absolute;bottom:0;left:0;right:0;
  background:linear-gradient(transparent,rgba(0,0,0,0.7));
  padding:4px 4px 3px;
  font-family:'Press Start 2P',monospace;font-size:4px;
  color:white;text-align:center;
  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;
  border-radius:0 0 4px 4px;
}
.slot-grade{
  position:absolute;top:3px;right:3px;
  font-family:'Press Start 2P',monospace;font-size:4px;
  padding:1px 4px;border-radius:2px;
  background:rgba(0,0,0,0.7);color:#ffe44a;
}
.slot-remove{
  position:absolute;top:2px;left:2px;
  width:16px;height:16px;border-radius:50%;
  background:rgba(200,30,30,0.8);
  color:white;font-size:10px;
  display:none;align-items:center;justify-content:center;
  cursor:pointer;border:none;line-height:1;
}
.card-slot.filled:hover .slot-remove{display:flex;}

/* Page footer */
.page-footer{
  display:flex;align-items:center;justify-content:space-between;
  padding:6px 14px;
  background:linear-gradient(90deg,#c8a060,#e0b870,#c8a060);
  border-top:2px solid #a07840;
}

/* Page nav arrows */
.page-nav{
  display:flex;align-items:center;gap:8px;
}
.page-arrow{
  font-family:'Press Start 2P',monospace;font-size:10px;
  color:#3a1a00;cursor:pointer;padding:2px 8px;
  background:rgba(255,255,255,0.3);border-radius:3px;
  border:1px solid rgba(0,0,0,0.15);
  transition:all 0.15s;user-select:none;
}
.page-arrow:hover{background:rgba(255,255,255,0.6);}
.page-arrow:disabled,.page-arrow.disabled{opacity:0.3;cursor:not-allowed;}

/* ═══ GRID DISPLAY MODE ═══ */
.grid-display{
  position:fixed;inset:0;z-index:50;
  padding:52px 20px 20px;
  display:none;
  flex-direction:column;
}
.grid-display.show{display:flex;}
.grid-display-header{
  display:flex;align-items:center;gap:12px;margin-bottom:14px;
}
.grid-display-title{font-family:'Press Start 2P',monospace;font-size:9px;color:#ffe44a;text-shadow:0 0 20px rgba(255,228,74,0.5);}
.grid-display-inner{
  flex:1;overflow-y:auto;
  display:grid;
  grid-template-columns:repeat(auto-fill,minmax(110px,1fr));
  gap:10px;
  padding:4px;
}
.grid-card{
  background:#fff;border-radius:6px;overflow:hidden;
  box-shadow:0 4px 20px rgba(0,0,0,0.3);
  aspect-ratio:0.72;position:relative;
  transition:transform 0.3s;cursor:pointer;
  animation:cardAppear 0.6s cubic-bezier(0.34,1.56,0.64,1) both;
}
.grid-card:hover{transform:scale(1.06) rotate(1deg);}
@keyframes cardAppear{
  from{transform:scale(0) rotate(20deg);opacity:0;}
  to{transform:scale(1) rotate(0deg);opacity:1;}
}
.grid-card img{width:100%;height:100%;object-fit:cover;}
.grid-card-label{
  position:absolute;bottom:0;left:0;right:0;
  background:linear-gradient(transparent,rgba(0,0,0,0.75));
  padding:6px 4px 3px;
  font-family:'Press Start 2P',monospace;font-size:4px;
  color:white;text-align:center;
}

/* ═══ CARD PICKER MODAL ═══ */
.picker-overlay{
  position:fixed;inset:0;z-index:200;
  background:rgba(0,0,0,0.7);
  backdrop-filter:blur(4px);
  display:none;align-items:center;justify-content:center;
}
.picker-overlay.show{display:flex;}
.picker-modal{
  background:#1a0e06;
  border:2px solid #c8a050;
  border-radius:6px;
  width:90%;max-width:560px;
  max-height:80vh;
  display:flex;flex-direction:column;
  box-shadow:0 0 0 4px rgba(200,160,80,0.2),0 20px 60px rgba(0,0,0,0.8);
  animation:modalPop 0.2s ease-out;
}
@keyframes modalPop{from{transform:scale(0.9);opacity:0;}to{transform:scale(1);opacity:1;}}
.picker-header{
  display:flex;align-items:center;justify-content:space-between;
  padding:12px 16px;
  background:linear-gradient(90deg,#3a1a00,#5a2a08,#3a1a00);
  border-bottom:2px solid #c8a050;
}
.picker-title{font-family:'Press Start 2P',monospace;font-size:7px;color:#ffe44a;letter-spacing:0.08em;}
.picker-close{
  width:24px;height:24px;border-radius:2px;
  background:transparent;border:1px solid rgba(200,160,80,0.4);
  color:rgba(200,160,80,0.7);cursor:pointer;font-size:14px;
  display:flex;align-items:center;justify-content:center;
  transition:all 0.1s;
}
.picker-close:hover{border-color:#c8a050;color:#ffe44a;}
.picker-search{
  padding:10px 14px;border-bottom:1px solid rgba(200,160,80,0.2);
}
.picker-search input{
  width:100%;background:rgba(0,0,0,0.4);
  border:1px solid rgba(200,160,80,0.3);
  color:#f0e8d0;font-family:'Press Start 2P',monospace;font-size:7px;
  padding:7px 10px;border-radius:2px;outline:none;
}
.picker-search input:focus{border-color:#c8a050;}
.picker-search input::placeholder{color:rgba(200,160,80,0.3);}
.picker-list{flex:1;overflow-y:auto;padding:8px;}
.picker-item{
  display:flex;align-items:center;gap:10px;
  padding:8px 10px;border-radius:3px;cursor:pointer;
  border:1px solid transparent;transition:all 0.1s;margin-bottom:4px;
}
.picker-item:hover{background:rgba(200,160,80,0.1);border-color:rgba(200,160,80,0.3);}
.picker-item-thumb{
  width:36px;height:50px;border-radius:3px;
  background:rgba(0,0,0,0.3);overflow:hidden;flex-shrink:0;
  display:flex;align-items:center;justify-content:center;
  border:1px solid rgba(200,160,80,0.2);
}
.picker-item-thumb img{width:100%;height:100%;object-fit:cover;}
.picker-item-thumb .no-img{font-size:18px;}
.picker-item-info{flex:1;min-width:0;}
.picker-item-name{
  font-family:'Press Start 2P',monospace;font-size:6px;
  color:#f0e8d0;margin-bottom:4px;
  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;
}
.picker-item-meta{font-family:'Press Start 2P',monospace;font-size:4.5px;color:rgba(200,160,80,0.6);}
.picker-item-grade{
  font-family:'Press Start 2P',monospace;font-size:5px;
  padding:2px 6px;border-radius:2px;
  background:rgba(200,160,80,0.15);color:#ffe44a;
  border:1px solid rgba(200,160,80,0.3);white-space:nowrap;flex-shrink:0;
}
.picker-empty{
  text-align:center;padding:30px;
  font-family:'Press Start 2P',monospace;font-size:6px;
  color:rgba(200,160,80,0.3);line-height:2.5;
}

/* Clefairy grid animation overlay */
.clefairy-arrange{
  position:fixed;inset:0;z-index:49;pointer-events:none;
  display:none;
}
.clefairy-arrange.show{display:block;}
.arrange-clefairy{
  position:absolute;font-size:24px;
  transition:all 0.8s cubic-bezier(0.34,1.56,0.64,1);
  animation:bounceAround 0.5s ease-in-out infinite alternate;
}
@keyframes bounceAround{from{transform:translateY(0);}to{transform:translateY(-8px);}}

/* Scrollbars */
::-webkit-scrollbar{width:5px;}
::-webkit-scrollbar-track{background:rgba(0,0,0,0.2);}
::-webkit-scrollbar-thumb{background:rgba(200,160,80,0.4);border-radius:2px;}

/* Toast */
.toast{
  position:fixed;bottom:20px;right:20px;z-index:9999;
  background:rgba(20,10,0,0.9);border:1px solid #c8a050;
  color:#ffe44a;font-family:'Press Start 2P',monospace;font-size:5.5px;
  padding:8px 14px;border-radius:2px;
  box-shadow:3px 3px 0 rgba(0,0,0,0.5);
  animation:toastIn 0.2s ease-out;letter-spacing:0.08em;
}
@keyframes toastIn{from{transform:translateY(16px);opacity:0;}to{transform:translateY(0);opacity:1;}}

/* Stats bar */
.stats-bar{
  position:fixed;bottom:0;left:0;right:0;z-index:20;
  display:flex;align-items:center;
  background:rgba(20,10,5,0.8);backdrop-filter:blur(6px);
  border-top:1px solid rgba(200,160,80,0.3);
  padding:5px 16px;gap:16px;flex-wrap:wrap;
}
.stat-item{font-family:'Press Start 2P',monospace;font-size:5px;color:rgba(200,160,80,0.6);}
.stat-item span{color:#ffe44a;}
</style>
</head>
<body>

<!-- NATURE ELEMENTS -->
<div class="sun"></div>
<div class="cloud cloud-1" style="left:-200px"></div>
<div class="cloud cloud-2" style="left:20%"></div>
<div class="cloud cloud-3" style="left:60%"></div>

<div class="mountains">
  <div class="mountain mt1"></div>
  <div class="mountain mt2"></div>
  <div class="mountain mt3"></div>
  <div class="mountain mt1" style="transform:scaleX(-1)"></div>
  <div class="mountain mt2" style="opacity:0.7"></div>
</div>

<div class="hills"></div>

<!-- Flowers -->
<div class="flower" style="bottom:28%;left:8%;animation-delay:0.2s">🌸</div>
<div class="flower" style="bottom:26%;left:18%;animation-delay:0.7s">🌼</div>
<div class="flower" style="bottom:29%;left:32%;animation-delay:1.1s">🌸</div>
<div class="flower" style="bottom:27%;right:20%;animation-delay:0.4s">🌼</div>
<div class="flower" style="bottom:30%;right:8%;animation-delay:0.9s">🌸</div>
<div class="flower" style="bottom:26%;left:55%;animation-delay:1.4s">🌷</div>
<div class="flower" style="bottom:29%;left:44%;animation-delay:0.6s">🌼</div>

<!-- CLEFAIRYS (background wanderers) -->
<div class="clefairy wander" style="bottom:28%;left:5%;animation-duration:8s;font-size:28px" title="Clefairy!">🌙</div>
<div class="clefairy" style="bottom:30%;left:22%;animation-delay:1s;animation-duration:3.5s" title="Clefairy!">🌙</div>
<div class="clefairy wander" style="bottom:27%;right:15%;animation-duration:11s;animation-delay:-3s;font-size:24px" title="Clefairy!">🌙</div>
<div class="clefairy" style="bottom:32%;right:28%;animation-delay:2s;animation-duration:4s;font-size:26px" title="Clefairy!">🌙</div>
<div class="clefairy wander" style="bottom:29%;left:48%;animation-duration:9s;animation-delay:-5s" title="Clefairy!">🌙</div>
<div class="clefairy" style="bottom:31%;right:5%;animation-delay:0.5s;animation-duration:5s;font-size:22px" title="Clefairy!">🌙</div>

<!-- TOP NAV BAR -->
<div class="top-bar">
  <div class="top-bar-left">
    <span class="app-title">⭐ TRACKEMALL</span>
  </div>
  <div class="top-bar-right">
    <button class="nav-btn active" id="btn-binder" onclick="showView('binder')">📖 BINDER</button>
    <button class="nav-btn" id="btn-grid" onclick="showView('grid')">⊞ GRID VIEW</button>
    <button class="nav-btn" onclick="openVault()">📊 VAULT</button>
    <button class="nav-btn" style="color:#ff8080;border-color:rgba(255,80,80,0.4);" onclick="confirmEmptyBinder()">🗑 EMPTY BINDER</button>
  </div>
</div>

<!-- BINDER SCENE -->
<div class="binder-scene" id="binder-scene">
  <div class="binder-wrap">
    <div class="binder">
      <!-- Spine with rings -->
      <div class="binder-spine">
        <div class="spine-ring"></div>
        <div class="spine-ring"></div>
        <div class="spine-ring"></div>
        <div class="spine-ring"></div>
      </div>
      <!-- Pages container -->
      <div class="binder-pages" id="binder-pages">
        <!-- Pages injected by JS -->
      </div>
    </div>
  </div>
</div>

<!-- GRID DISPLAY -->
<div class="grid-display" id="grid-display">
  <div class="grid-display-header">
    <span class="grid-display-title">⭐ CARD COLLECTION</span>
    <button class="nav-btn" onclick="showView('binder')" style="margin-left:auto">← BACK TO BINDER</button>
  </div>
  <div class="grid-display-inner" id="grid-display-inner"></div>
</div>

<!-- CLEFAIRY ARRANGE OVERLAY -->
<div class="clefairy-arrange" id="clefairy-arrange"></div>

<!-- CARD PICKER MODAL -->
<div class="picker-overlay" id="picker-overlay" onclick="closePickerOutside(event)">
  <div class="picker-modal">
    <div class="picker-header">
      <span class="picker-title">ADD CARD TO BINDER</span>
      <button class="picker-close" onclick="closePicker()">✕</button>
    </div>
    <div class="picker-search">
      <input type="text" id="picker-search-input" placeholder="SEARCH YOUR VAULT..." oninput="renderPickerList()">
    </div>
    <div class="picker-list" id="picker-list"></div>
  </div>
</div>

<!-- STATS BAR -->
<div class="stats-bar" id="stats-bar">
  <div class="stat-item">CARDS IN BINDER: <span id="stat-binder-count">0</span></div>
  <div class="stat-item">GRADED: <span id="stat-graded">0</span></div>
  <div class="stat-item">RAW: <span id="stat-raw">0</span></div>
  <div class="stat-item">TOTAL VALUE: <span id="stat-value">$0</span></div>
</div>

<script>
// ── DATA ──
// Load from same localStorage keys as vault
let GC = JSON.parse(localStorage.getItem('vault_graded')||'[]');
let RC = JSON.parse(localStorage.getItem('vault_raw')||'[]');
let OC = JSON.parse(localStorage.getItem('vault_other')||'[]');
let CI = JSON.parse(localStorage.getItem('vault_images')||'{}');

// Binder layout: array of pages, each page has 9 slots
// Each slot: null or { id, type } reference to a vault card
let BINDER = JSON.parse(localStorage.getItem('trackemall_binder')||'[]');

const SLOTS_PER_PAGE = 9;
let currentPage = 0;
let pickerTargetSlot = null; // { page, slot }

function saveBinder() {
  localStorage.setItem('trackemall_binder', JSON.stringify(BINDER));
}

function allVaultCards() {
  return [
    ...GC.map(c=>({...c,_type:'graded'})),
    ...RC.map(c=>({...c,_type:'raw'})),
    ...OC.map(c=>({...c,_type:'other'})),
  ];
}

function getCard(id) {
  return allVaultCards().find(c=>c.id===id) || null;
}

function fmt(n) {
  if(n==null||isNaN(n)) return '—';
  return '$'+n.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
}
function esc(s){ return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

// ── PAGE MANAGEMENT ──
function totalPages() {
  // At least 1 page, expand as needed
  return Math.max(1, BINDER.length);
}

function ensurePage(p) {
  while(BINDER.length <= p) {
    BINDER.push(Array(SLOTS_PER_PAGE).fill(null));
  }
}

function isLastPageEmpty() {
  const last = BINDER[BINDER.length-1];
  return last && last.every(s=>s===null);
}

function trimEmptyTrailingPages() {
  // Remove trailing empty pages beyond page 1
  while(BINDER.length > 1 && isLastPageEmpty()) {
    BINDER.pop();
  }
  saveBinder();
}

// ── RENDER BINDER ──
function renderBinder(flipDir) {
  const container = document.getElementById('binder-pages');
  ensurePage(currentPage);

  // Build page HTML
  const page = BINDER[currentPage];
  const totalPg = Math.max(1, BINDER.length);

  const pageEl = document.createElement('div');
  pageEl.className = 'binder-page';
  if(flipDir) pageEl.classList.add('flipping-in');

  // Header
  const hdr = document.createElement('div');
  hdr.className = 'page-header';
  hdr.innerHTML = `
    <span class="page-title">⭐ TRACKEMALL BINDER</span>
    <span class="page-num">PAGE ${currentPage+1} / ${totalPg}</span>
  `;
  pageEl.appendChild(hdr);

  // Card grid
  const grid = document.createElement('div');
  grid.className = 'card-grid';

  for(let s=0;s<SLOTS_PER_PAGE;s++) {
    const slotData = page[s];
    const slot = document.createElement('div');

    if(slotData) {
      const card = getCard(slotData.id);
      slot.className = 'card-slot filled';
      const img = CI[slotData.id];
      const grade = card?.grade||card?.condition||card?.itype||'';
      slot.innerHTML = `
        ${img
          ? `<img class="slot-img" src="${img}" alt="${esc(card?.name||'')}" onerror="this.style.display='none'">`
          : `<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:4px;padding:4px;text-align:center;">
               <div style="font-size:22px">🃏</div>
               <div style="font-family:'Press Start 2P',monospace;font-size:3.5px;color:#666;line-height:1.7;">${esc(card?.name||'UNKNOWN')}</div>
             </div>`
        }
        ${grade?`<div class="slot-grade">${esc(grade)}</div>`:''}
        <div class="slot-label">${esc(card?.name||'')}</div>
        <button class="slot-remove" title="Remove from binder" onclick="removeFromBinder(${currentPage},${s},event)">✕</button>
      `;
    } else {
      slot.className = 'card-slot';
      slot.innerHTML = `<div class="slot-add-btn" onclick="openPicker(${currentPage},${s})">+</div>`;
      slot.onclick = (e) => { if(!e.target.closest('.slot-add-btn')) openPicker(currentPage,s); };
    }

    grid.appendChild(slot);
  }
  pageEl.appendChild(grid);

  // Footer with navigation
  const ftr = document.createElement('div');
  ftr.className = 'page-footer';
  ftr.innerHTML = `
    <div class="page-nav">
      <span class="page-arrow ${currentPage===0?'disabled':''}" onclick="turnPage(-1)">◀</span>
      <span style="font-family:'Press Start 2P',monospace;font-size:5px;color:#3a1a00;">${currentPage+1} / ${totalPg}</span>
      <span class="page-arrow" onclick="turnPage(1)">▶</span>
    </div>
    <span style="font-family:'Press Start 2P',monospace;font-size:4.5px;color:#5a3010;">
      ${page.filter(Boolean).length} / ${SLOTS_PER_PAGE} CARDS
    </span>
  `;
  pageEl.appendChild(ftr);

  // Animate out old page, replace with new
  const old = container.querySelector('.binder-page');
  if(old && flipDir) {
    old.classList.add('flipping-out');
    setTimeout(()=>{
      old.remove();
      container.appendChild(pageEl);
    }, 480);
  } else {
    if(old) old.remove();
    container.appendChild(pageEl);
  }

  updateStats();
}

// ── PAGE TURN ──
function turnPage(dir) {
  const newPage = currentPage + dir;
  if(newPage < 0) return;

  if(dir > 0) {
    // Going forward — ensure next page exists
    ensurePage(newPage);
    saveBinder();
  } else {
    if(newPage < 0) return;
  }

  currentPage = newPage;
  renderBinder(dir > 0 ? 'forward' : 'back');
}

// ── CARD PICKER ──
function openPicker(page, slot) {
  pickerTargetSlot = { page, slot };
  document.getElementById('picker-search-input').value = '';
  renderPickerList();
  document.getElementById('picker-overlay').classList.add('show');
  setTimeout(()=>document.getElementById('picker-search-input').focus(), 100);
}

function closePicker() {
  document.getElementById('picker-overlay').classList.remove('show');
  pickerTargetSlot = null;
}

function closePickerOutside(e) {
  if(e.target===document.getElementById('picker-overlay')) closePicker();
}

function renderPickerList() {
  const q = document.getElementById('picker-search-input').value.toLowerCase();
  const all = allVaultCards();
  const filtered = q ? all.filter(c=>(c.name||'').toLowerCase().includes(q)||(c.set||'').toLowerCase().includes(q)) : all;
  const list = document.getElementById('picker-list');

  if(!all.length) {
    list.innerHTML = `<div class="picker-empty">NO CARDS IN VAULT YET<br>ADD CARDS IN THE VAULT VIEW FIRST</div>`;
    return;
  }
  if(!filtered.length) {
    list.innerHTML = `<div class="picker-empty">NO CARDS MATCH "${esc(q)}"</div>`;
    return;
  }

  list.innerHTML = filtered.map(card => {
    const img = CI[card.id];
    const grade = card.grade||card.condition||card.itype||'';
    const price = card.latest_comp||card.purchase;
    return `<div class="picker-item" onclick="addToBinder('${card.id}')">
      <div class="picker-item-thumb">
        ${img
          ? `<img src="${img}" alt="${esc(card.name)}">`
          : `<span class="no-img">🃏</span>`
        }
      </div>
      <div class="picker-item-info">
        <div class="picker-item-name">${esc(card.name)}</div>
        <div class="picker-item-meta">${esc(card.set||'')}${card.number?' #'+esc(card.number):''}</div>
        ${price!=null?`<div class="picker-item-meta" style="color:rgba(100,220,120,0.7);">${fmt(price)}</div>`:''}
      </div>
      ${grade?`<div class="picker-item-grade">${esc(grade)}</div>`:''}
    </div>`;
  }).join('');
}

function addToBinder(cardId) {
  if(!pickerTargetSlot) return;
  const { page, slot } = pickerTargetSlot;
  ensurePage(page);
  BINDER[page][slot] = { id: cardId };
  saveBinder();
  closePicker();
  renderBinder();
  toast('Card added to binder!');
}

function removeFromBinder(page, slot, e) {
  e?.stopPropagation();
  BINDER[page][slot] = null;
  trimEmptyTrailingPages();
  if(currentPage >= BINDER.length) currentPage = BINDER.length-1;
  renderBinder();
  toast('Card removed from binder.');
}

// ── EMPTY BINDER ──
function confirmEmptyBinder() {
  const count = BINDER.flat().filter(Boolean).length;
  if(!count) { toast('Binder is already empty!'); return; }
  if(!confirm(`Remove all ${count} cards from the binder? (Cards stay in your vault, just removed from binder view)`)) return;
  animateClefairyArrange(() => {
    BINDER = [Array(SLOTS_PER_PAGE).fill(null)];
    saveBinder();
    currentPage = 0;
    renderBinder();
    toast('Binder emptied! Cards are still in your vault.');
  });
}

// ── CLEFAIRY ARRANGE ANIMATION ──
function animateClefairyArrange(callback) {
  const overlay = document.getElementById('clefairy-arrange');
  overlay.innerHTML = '';
  overlay.classList.add('show');

  // Spawn a bunch of clefairys flying around
  const count = 12;
  for(let i=0;i<count;i++) {
    const el = document.createElement('div');
    el.className = 'arrange-clefairy';
    el.textContent = '🌙';
    el.style.left = Math.random()*90+'%';
    el.style.top  = Math.random()*80+'%';
    el.style.fontSize = (20+Math.random()*20)+'px';
    el.style.animationDelay = (Math.random()*0.5)+'s';
    el.style.animationDuration = (0.3+Math.random()*0.3)+'s';
    overlay.appendChild(el);

    // Animate them flying to random positions
    setTimeout(()=>{
      el.style.left = Math.random()*85+'%';
      el.style.top  = Math.random()*70+'%';
    }, 100+i*60);
  }

  // Run callback after animation
  setTimeout(()=>{
    if(callback) callback();
    setTimeout(()=>{ overlay.classList.remove('show'); overlay.innerHTML=''; }, 800);
  }, 1200);
}

// ── GRID VIEW ──
function showGridView() {
  const all = allVaultCards();
  const inner = document.getElementById('grid-display-inner');

  if(!all.length) {
    inner.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:40px;font-family:'Press Start 2P',monospace;font-size:7px;color:rgba(255,228,74,0.3);line-height:2.5;">NO CARDS IN VAULT YET<br>ADD CARDS TO SEE THEM HERE</div>`;
    return;
  }

  animateClefairyArrange(null);

  inner.innerHTML = '';
  all.forEach((card, i) => {
    const img = CI[card.id];
    const el = document.createElement('div');
    el.className = 'grid-card';
    el.style.animationDelay = (i * 0.05) + 's';
    el.innerHTML = img
      ? `<img src="${img}" alt="${esc(card.name)}">`
      : `<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;background:linear-gradient(135deg,#2a1a0a,#1a0a02);gap:6px;">
           <div style="font-size:28px">🃏</div>
           <div style="font-family:'Press Start 2P',monospace;font-size:4px;color:rgba(200,160,80,0.6);text-align:center;padding:0 4px;line-height:1.8;">${esc(card.name)}</div>
         </div>`;
    el.innerHTML += `<div class="grid-card-label">${esc(card.name)}</div>`;
    el.title = `${card.name}${card.grade?' — '+card.grade:''}`;
    inner.appendChild(el);
  });
}

// ── VIEW SWITCHING ──
function showView(view) {
  document.getElementById('binder-scene').style.display = view==='binder' ? 'flex' : 'none';
  document.getElementById('grid-display').classList.toggle('show', view==='grid');
  document.getElementById('btn-binder').classList.toggle('active', view==='binder');
  document.getElementById('btn-grid').classList.toggle('active', view==='grid');
  document.getElementById('stats-bar').style.display = 'flex';

  if(view==='grid') showGridView();
}

function openVault() {
  // Opens vault in same tab
  window.location.href = 'index.html';
}

// ── STATS ──
function updateStats() {
  const binderCount = BINDER.flat().filter(Boolean).length;
  document.getElementById('stat-binder-count').textContent = binderCount;
  document.getElementById('stat-graded').textContent = GC.length;
  document.getElementById('stat-raw').textContent = RC.length;
  const totalVal = [...GC,...RC,...OC].reduce((s,c)=>s+(c.latest_comp||c.purchase||0),0);
  document.getElementById('stat-value').textContent = fmt(totalVal);
}

// ── TOAST ──
let toastTimer;
function toast(msg) {
  document.querySelector('.toast')?.remove();
  clearTimeout(toastTimer);
  const el = Object.assign(document.createElement('div'),{className:'toast',textContent:msg});
  document.body.appendChild(el);
  toastTimer = setTimeout(()=>el.remove(), 2600);
}

// ── KEYBOARD NAV ──
document.addEventListener('keydown', e => {
  if(['INPUT','TEXTAREA'].includes(e.target.tagName)) return;
  if(e.key==='ArrowRight'||e.key==='ArrowDown') turnPage(1);
  if(e.key==='ArrowLeft'||e.key==='ArrowUp') turnPage(-1);
  if(e.key==='Escape') closePicker();
});

// ── INIT ──
ensurePage(0);
renderBinder();
</script>
</body>
</html>
