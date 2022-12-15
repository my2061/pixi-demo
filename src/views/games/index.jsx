import React, { useEffect } from "react";
// import * as PIXI from "pixi.js";
import * as PIXI from "pixi.js";

export default function Game() {
  useEffect(() => {
    initGame();
  }, []);

  return <div></div>;
}

const imgList = {
  door: "https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/295b261bcedf492b94d638c67d5c102c~tplv-k3u1fbpfcp-watermark.image?",
  map: "https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/eb3b6bbdbe7040da823c15f9e33436f2~tplv-k3u1fbpfcp-watermark.image?",
  npc: "https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/381e7d17034447acb4f2963ba8e5bd15~tplv-k3u1fbpfcp-watermark.image?",
  box: "https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/29b0198a241d4b4d8783d54c5f4b5eb0~tplv-k3u1fbpfcp-watermark.image?",
  monster:
    "https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d7188ff24d964ce29879c99a90fd7ec5~tplv-k3u1fbpfcp-watermark.image?",
};

/**
 * @description: 初始化游戏
 * @return {*}
 */
const initGame = () => {
  const {
    Application,
    Sprite,
    Container,
    Loader: { shared },
    Text,
    TextStyle,
    utils: { TextureCache },
    Graphics,
  } = PIXI;

  const app = new Application({
    width: 512,
    height: 512,
    antialias: true,
    backgroundAlpha: 1,
    resolution: 1,
  });

  document.body.appendChild(app.view);

  let gameScene, npc, door, box, map, monster;

  shared.add(imgList.box).load(setup);

  function setup() {
    console.log("加载完成");

    // 游戏场景：主舞台
    gameScene = new Container();
    gameScene.sortableChildren = true;
    app.stage.addChild(gameScene);

    // 地图
    map = new Sprite.from(imgList.map);
    map.zIndex = 100;
    gameScene.addChild(map);

    // npc人物
    npc = new Sprite.from(imgList.npc);
    npc.zIndex = 101;
    gameScene.addChild(npc);

    // 出口：门
    door = new Sprite.from(imgList.door);
    door.x = app.screen.width / 2;
    door.y = app.screen.height / 2;
    gameScene.addChild(door);

    // 宝箱
    box = new Sprite.from(imgList.box);
    gameScene.addChild(box);

    // 怪物
    monster = new Sprite.from(imgList.monster);
    gameScene.addChild(monster);
  }
};
