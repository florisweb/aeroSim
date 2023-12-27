import Vector from "./vector";

const World = new class {
	speed = 50;
	grid = [];
	linkers = [];

	sink;
	source;

	logGrid() {
		let table = [];
		for (let x = 0; x < this.grid.length; x++)
		{
			table[x] = [];
			for (let y = 0; y < this.grid[0].length; y++)
			{
				table[x][y] = this.grid[x][y].value;
			}
		}
		console.table(table);
	}

	setup(_gridSize) {
		for (let x = 0; x < _gridSize[0]; x++)
		{
			this.grid[x] = [];
			for (let y = 0; y < _gridSize[1]; y++)
			{
				this.grid[x][y] = {value: 0};
			}
		}

		for (let x = 0; x < _gridSize[0] - 1; x++)
		{
			for (let y = 0; y < _gridSize[1]; y++)
			{
				this.linkers.push([this.grid[x][y], this.grid[x + 1][y]]);
			}
		}

		for (let x = 0; x < _gridSize[0]; x++)
		{
			for (let y = 0; y < _gridSize[1] - 1; y++)
			{
				this.linkers.push([this.grid[x][y], this.grid[x][y + 1]]);
			}
		}

		this.sink = {value: 0};
		this.source = {value: 255};
		for (let y = 0; y < _gridSize[1] - 1; y++)
		{
			this.linkers.push([this.sink, this.grid[0][y]]);
			this.linkers.push([this.source, this.grid[this.grid.length - 1][y]]);
		}

		this.update();
	}

	#prevUpdate = new Date();
	update() {
		let dt = Math.min((new Date() - this.#prevUpdate) / 1000 * this.speed, 1);
		this.#prevUpdate = new Date();

		World.sink.value = 0;
		World.source.value = 500;

		// console.time('start');
		let changes = [];
		for (let i = 0; i < this.linkers.length; i++)
		{
			if (this.linkers[i][0].isBlock || this.linkers[i][1].isBlock) continue;
			let delta = this.linkers[i][0].value - this.linkers[i][1].value;
			changes[i] = .5 * delta * dt;
		}

		for (let i = 0; i < this.linkers.length; i++)
		{
			if (!changes[i]) continue;
			this.linkers[i][0].value -= changes[i];
			this.linkers[i][1].value += changes[i];
		}
		// console.timeEnd('start');
		setTimeout(() => this.update(), 5);
	}
}

World.setup(new Vector(100, 50));
window.World = World;
export default World;
