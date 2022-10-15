interface IBoard {
	//
}

interface IBoardLoader {
	loadBoard(board: IBoard): Promise<void>
	unloadBoard(board: IBoard): Promise<void>
}

class Loader implements IBoardLoader {
	public loadBoard(board: IBoard): Promise<void> {
		return Promise.resolve()
	}

	public unloadBoard(board: IBoard): Promise<void> {
		return Promise.resolve()
	}
}
