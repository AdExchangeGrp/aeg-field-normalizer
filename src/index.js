export function normalizeNumber (num) {

	let conversion = Number(num);

	if (isNaN(conversion) || !isFinite(conversion)) {

		conversion = 0;

	}

	return conversion;

}

export function normalizeNumberZeroOrGreater (num) {

	let conversion = normalizeNumber(num);

	if (conversion < 0) {

		conversion = 0;

	}

	return conversion;

}

export function normalizeField (field) {

	if (!field) {

		field = 'BLANK';

	}

	return field.replace(':', '-');

}
