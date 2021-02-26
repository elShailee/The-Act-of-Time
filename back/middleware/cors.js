//this middleware sets the CORS Access (Cross Origin Resource Sharing) response-header to '*'.
//basically it's telling the browser that the content it gets is intentional.
//needed for the browser to accept any response.
module.exports = res => {
	res.setHeader('access-control-allow-origin', '*');
};
