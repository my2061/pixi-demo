import React, { useEffect } from "react";
import * as PIXI from "pixi.js";

export default function Game() {
  useEffect(() => {
    initGame();
  }, []);

  return <div></div>;
}

/**
 * @description: 初始化游戏
 * @return {*}
 */
const initGame = () => {
	const {
		Application,
		Sprite,
		Container,
		Loader: { shared: { resources } },
		Text,
		TextStyle,
		utils: { TextureCache },
		Graphics
	} = PIXI;
	

	const app = new Application({
		width: 521,
		height: 521,
		antialias: true,
		backgroundAlpha: 1,
		resolution: 1,
	})

	document.body.appendChild(app.view);

	PIXI.Loader.shared.add('../../images/treasureHunter.json').load(setup);

	function setup(){
		console.log("加载完毕");
	}

	
};
