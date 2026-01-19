const addedIcons = (icons, currentList, name) => {

	const mapList = currentList.map((currObj) => {
		const arrIcon = []

		currObj[name].forEach((currIcon, i) => {
			const icon = icons.find(({ id }) => id === currIcon);

			arrIcon.push({
				...icon
			});
		});
		return { ...currObj, [name]: arrIcon };
	});
	return mapList;
};

export default addedIcons;