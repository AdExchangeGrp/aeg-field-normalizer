export function normalizeNumber(num: string | number): number {

	let conversion = Number(num);

	if (isNaN(conversion) || !isFinite(conversion)) {

		conversion = 0;

	}

	return conversion;

}

export function normalizeNumberZeroOrGreater(num: string | number): number {

	let conversion = normalizeNumber(num);

	if (conversion < 0) {

		conversion = 0;

	}

	return conversion;

}

export function normalizeField(field: string): string {

	if (!field) {

		field = 'BLANK';

	}

	return field.replace(':', '-');

}
