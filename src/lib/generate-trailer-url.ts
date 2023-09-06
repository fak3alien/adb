export const generateTrailerUrl = ({
	id,
	site
}: {
	id: string | null | undefined;
	site: string | null | undefined;
}) => {
	if (!id || !site) {
		return null;
	}

	if (site === 'youtube') {
		return `https://www.youtube.com/embed/${id}`;
	}
};
