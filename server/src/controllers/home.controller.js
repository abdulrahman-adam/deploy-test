
export const getHome = async (req , res ) => {
	try {
		res.status(200).send({ message: 'Hello from server : 3001!' });
	} catch (e ) {
		res.status(500).send(e.toString());
	}
};
