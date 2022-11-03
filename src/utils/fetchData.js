const {REACT_APP_IO_URL} = process.env;

export const fetchData = async (path) => {
	if (path.startsWith("local:")) {
		const url = path.replace("local:", "");
		const data = await fetch(url);
		const json = await data.json();
		return json.paths;
	} else {
		const url = `${REACT_APP_IO_URL}content?path=/${path.split(":/")[1]}`;
		const data = await fetch(url);
		const json = await data.json();
		return json.data;
	}
};
