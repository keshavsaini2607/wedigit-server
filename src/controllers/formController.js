export const getForms = (_req, res, next) => {
    try {
        const responseData = {
            message: 'Success',
            forms: [],
            status: 200
        };

        res.json(responseData);
    } catch (error) {
        next(error);
    }
};
