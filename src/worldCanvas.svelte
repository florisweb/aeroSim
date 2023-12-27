<script>
	import World from './js/world';
	let canvas;
	let ctx;
	$: {
		if (canvas && !ctx) 
		{
			tileSize = canvas.width / World.grid.length;
			ctx = canvas.getContext('2d');
			render();
		}
	}


	let tileSize = 1;
	function render() {
		if (!ctx) return;
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		for (let x = 0; x < World.grid.length; x++)
		{
			for (let y = 0; y < World.grid[0].length; y++)
			{
				// ctx.strokeStyle = '#000';
				let intensity = World.grid[x][y].value / 255;
				ctx.fillStyle = `rgba(255, 0, 0, ${intensity})`;
				if (World.grid[x][y].isBlock) ctx.fillStyle = '#333';
				ctx.beginPath();
				ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
				ctx.closePath();
				ctx.fill();
			}
		}
		requestAnimationFrame(render);
	}
</script>

<main>
	

	<canvas bind:this={canvas} width="1000" height="1000"></canvas>
</main>

<style>
	
</style>