var timeMatrix = [
	[ -1, 0, 9, 9, 17, 17, 17, 17, 17, 17, 18, 21, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, ],
	[ 0, -1, 9, 9, 17, 17, 17, 17, 17, 17, 18, 21, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, ],
	[ -1, -1, -1, 0, 8, 11, 11, 11, 11, 11, 12, 15, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, ],
	[ -1, -1, -1, -1, 8, 11, 11, 11, 11, 11, 12, 15, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, ],
	[ -1, -1, -1, -1, -1, 3, 3, 3, 3, 3, 4, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, ],
	[ -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 1, 4, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, ],
	[ -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 1, 4, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, ],
	[ -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 1, 4, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, ],
	[ -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 4, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, ],
	[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 4, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, ],
	[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, ],
	[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 4, 7, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, ],
	[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 4, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, ],
	[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 4, 6, 5, 8, -1, -1, -1, -1, -1, -1, -1, ],
	[-1, -1,-1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	0,	6,	5,	8,	-1,	7,	-1,	-1,	-1,	-1,	-1,],
	[-1,-1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	6,	5,	8,	-1,	7,	-1,	-1,	-1,	-1,	-1,],
	[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6, -1, -1, -1, -1, -1, -1, -1, -1, ],
	[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6, -1, 5, 6, 7, 7, 6, 9, ],
	[ -1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	3,	5,	3,	7,	8,	-1,],
	[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, ],
	[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 2, 4, 6, 9, ],
	[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, ],
	[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 4, 6, ],
	[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 4, ],
	[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5, ],
	[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, ]
];