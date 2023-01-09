export default function groupArrayByKey(array, key: string) {
	return array.reduce((hash: any, obj: any) => {
		if (obj[key] === undefined) return hash;

		return Object.assign(hash, {
			[obj[key]]: (hash[obj[key]] || []).concat(obj),
		});
	}, {});
}
